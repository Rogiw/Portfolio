(() => {
  const STORAGE_KEY = "wigor_schedule_token";
  const API_URL = "https://api.wigorrodrigues.com.br/api/schedule";
  const modal = document.getElementById("client-schedule-modal");
  const form = document.getElementById("schedule-access-form");
  const input = document.getElementById("schedule-access-code");
  const forgetButton = document.getElementById("schedule-forget");
  const status = document.getElementById("schedule-status");
  const clientName = document.getElementById("schedule-client-name");
  const list = document.getElementById("appointment-list");
  const offerAgenda = document.getElementById("offer-agenda");
  const offerList = document.getElementById("offer-list");

  if (!modal || !form || !input || !status || !clientName || !list || !offerAgenda || !offerList) return;

  const t = (key) => window.siteI18n?.t(key) || key;
  const activeLocale = () => window.siteI18n?.locale === "pt" ? "pt-BR" : "en";

  const setStatus = (message, state = "") => {
    status.textContent = message;
    status.className = `form-status${state ? ` is-${state}` : ""}`;
  };

  const clearAgenda = () => {
    modal.dataset.agendaOpen = "false";
    clientName.textContent = "";
    list.replaceChildren();
    offerList.replaceChildren();
  };

  const formatWeekday = (date) => new Intl.DateTimeFormat(activeLocale(), { weekday: "short" }).format(date);
  const formatMonth = (date) => new Intl.DateTimeFormat(activeLocale(), { month: "short" }).format(date);
  const formatTime = (date) => new Intl.DateTimeFormat(activeLocale(), { hour: "2-digit", minute: "2-digit" }).format(date);
  const formatThreadTime = (date) => new Intl.DateTimeFormat(activeLocale(), { dateStyle: "medium", timeStyle: "short" }).format(date);

  const statusLabelKeys = {
    scheduled: "scheduled_status",
    confirmed: "confirmed_status",
    cancelled: "cancelled_status",
    completed: "completed_status",
  };

  const offerStatusLabelKeys = {
    pending: "waiting_decision",
    accepted: "purchase_accepted",
    rejected: "purchase_declined",
    changes_requested: "improvement_requested",
  };

  const offerSubjectKeys = {
    business: "business",
    proposal: "proposal",
  };

  const renderAppointment = (appointment) => {
    const item = document.createElement("li");
    item.className = "appointment-card";

    const start = new Date(appointment.starts_utc * 1000);
    const end = new Date(appointment.ends_utc * 1000);
    const date = document.createElement("time");
    date.className = "appointment-card__date";
    date.dateTime = start.toISOString();

    const weekday = document.createElement("span");
    weekday.className = "appointment-card__weekday";
    weekday.textContent = formatWeekday(start);
    const day = document.createElement("span");
    day.className = "appointment-card__day";
    day.textContent = String(start.getDate()).padStart(2, "0");
    const month = document.createElement("span");
    month.className = "appointment-card__month";
    month.textContent = formatMonth(start);
    date.append(weekday, day, month);

    const details = document.createElement("div");
    details.className = "appointment-card__details";
    const head = document.createElement("div");
    head.className = "appointment-card__head";
    const title = document.createElement("h3");
    title.textContent = appointment.title;
    const badge = document.createElement("span");
    badge.className = "appointment-status";
    badge.textContent = statusLabelKeys[appointment.status] ? t(statusLabelKeys[appointment.status]) : appointment.status;
    head.append(title, badge);

    const time = document.createElement("time");
    time.className = "appointment-card__time";
    time.dateTime = start.toISOString();
    time.textContent = `${formatTime(start)} — ${formatTime(end)}`;
    details.append(head, time);

    if (appointment.note) {
      const note = document.createElement("p");
      note.textContent = appointment.note;
      details.append(note);
    }

    item.append(date, details);
    return item;
  };

  const renderOffer = (offer, token) => {
    const item = document.createElement("li");
    item.className = "offer-card";

    const heading = document.createElement("div");
    heading.className = "offer-card__heading";
    const title = document.createElement("h4");
    title.textContent = offerSubjectKeys[offer.subject] ? t(offerSubjectKeys[offer.subject]) : offer.subject;
    const stamp = document.createElement("span");
    stamp.className = `offer-status offer-status--${offer.status}`;
    stamp.textContent = offerStatusLabelKeys[offer.status] ? t(offerStatusLabelKeys[offer.status]) : offer.status;
    heading.append(title, stamp);

    const thread = document.createElement("ol");
    thread.className = "offer-thread";
    (Array.isArray(offer.messages) ? offer.messages : []).forEach((entry) => {
      const message = document.createElement("li");
      message.className = `offer-message offer-message--${entry.sender}`;
      const meta = document.createElement("div");
      meta.className = "offer-message__meta";
      const sender = document.createElement("strong");
      sender.textContent = entry.sender === "owner" ? "Wigor" : t("you");
      const created = document.createElement("time");
      const createdAt = new Date(entry.created_utc * 1000);
      created.dateTime = createdAt.toISOString();
      created.textContent = formatThreadTime(createdAt);
      meta.append(sender, created);
      const body = document.createElement("p");
      body.textContent = entry.message;
      message.append(meta, body);
      thread.append(message);
    });

    item.append(heading, thread);

    if (offer.status !== "accepted") {
      const toggle = document.createElement("button");
      toggle.className = "offer-counter-toggle";
      toggle.type = "button";
      toggle.textContent = offer.status === "changes_requested" ? t("send_improved") : t("send_counter");

      const counterForm = document.createElement("form");
      counterForm.className = "offer-counter-form";
      counterForm.hidden = true;
      const label = document.createElement("label");
      label.textContent = t("revised_proposal");
      const textarea = document.createElement("textarea");
      textarea.name = "message";
      textarea.required = true;
      textarea.minLength = 3;
      textarea.maxLength = 1000;
      textarea.rows = 4;
      const submit = document.createElement("button");
      submit.type = "submit";
      submit.textContent = t("send_review");
      label.append(textarea);
      counterForm.append(label, submit);

      toggle.addEventListener("click", () => {
        counterForm.hidden = !counterForm.hidden;
        if (!counterForm.hidden) textarea.focus();
      });
      counterForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        if (!counterForm.checkValidity()) {
          counterForm.reportValidity();
          return;
        }
        submit.disabled = true;
        submit.textContent = t("sending");
        setStatus(t("counter_sending"), "pending");
        try {
          const response = await fetch(`${API_URL}/offers/${encodeURIComponent(offer.id)}/counterproposal`, {
            method: "POST",
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ message: textarea.value }),
          });
          if (!response.ok) throw new Error(String(response.status));
          await loadAgenda(token);
          setStatus(t("counter_sent"), "success");
        } catch (error) {
          setStatus(t("counter_failed"), "error");
          submit.disabled = false;
          submit.textContent = t("send_review");
        }
      });
      item.append(toggle, counterForm);
    }

    return item;
  };

  const loadAgenda = async (token) => {
    const normalized = String(token || "").trim();
    if (normalized.length < 32) {
      clearAgenda();
      setStatus(t("enter_code"), "error");
      return;
    }

    setStatus(t("opening_agenda"), "pending");
    try {
      const response = await fetch(API_URL, {
        headers: { Authorization: `Bearer ${normalized}`, Accept: "application/json" },
        cache: "no-store",
      });
      if (!response.ok) throw new Error(String(response.status));
      const data = await response.json();
      localStorage.setItem(STORAGE_KEY, normalized);
      input.value = normalized;
      clientName.textContent = data.client;
      list.replaceChildren();
      if (!Array.isArray(data.appointments) || data.appointments.length === 0) {
        const empty = document.createElement("li");
        empty.className = "appointment-list__empty";
        empty.textContent = t("no_appointments");
        list.append(empty);
      } else {
        list.append(...data.appointments.map(renderAppointment));
      }
      offerList.replaceChildren();
      const offers = Array.isArray(data.offers) ? data.offers : [];
      offerAgenda.hidden = offers.length === 0;
      if (offers.length > 0) {
        offerList.append(...offers.map((offer) => renderOffer(offer, normalized)));
      }
      modal.dataset.agendaOpen = "true";
      setStatus(t("appointments_updated"), "success");
    } catch (error) {
      clearAgenda();
      setStatus(t("invalid_code"), "error");
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    loadAgenda(input.value);
  });

  forgetButton?.addEventListener("click", () => {
    localStorage.removeItem(STORAGE_KEY);
    input.value = "";
    clearAgenda();
    setStatus(t("access_removed"));
    input.focus();
  });

  document.querySelectorAll('[data-modal-open="client-schedule-modal"]').forEach((button) => {
    button.addEventListener("click", () => {
      const token = localStorage.getItem(STORAGE_KEY) || "";
      input.value = token;
      if (token) loadAgenda(token);
    });
  });

  window.addEventListener("schedule-token-updated", (event) => {
    const token = event.detail?.token;
    if (typeof token === "string") input.value = token;
  });

  window.addEventListener("site-language-changed", () => {
    const token = localStorage.getItem(STORAGE_KEY) || "";
    if (modal.open && token) loadAgenda(token);
  });

  const params = new URLSearchParams(window.location.search);
  const linkedToken = params.get("schedule");
  if (linkedToken && linkedToken.length >= 32) {
    localStorage.setItem(STORAGE_KEY, linkedToken);
    input.value = linkedToken;
    params.delete("schedule");
    const cleanQuery = params.toString();
    history.replaceState(null, "", `${window.location.pathname}${cleanQuery ? `?${cleanQuery}` : ""}${window.location.hash}`);
    modal.showModal();
    loadAgenda(linkedToken);
  }
})();
