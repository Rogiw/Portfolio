document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-ready");

  const profile = document.querySelector(".perfil");
  const trigger = document.querySelector(".perfil-trigger");
  const scheduled = document.querySelector(".scheduled");
  const scheduledHint = document.querySelector(".scheduled-hint");

  if (profile && trigger) {
    trigger.addEventListener("click", () => {
      const isOpen = profile.classList.toggle("is-open");
      trigger.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (scheduled) {
    let startX = 0;
    let currentX = 0;
    let hasDragged = false;
    let introDone = false;

    const setScheduledOpen = (isOpen) => {
      scheduled.classList.toggle("is-open", isOpen);
      scheduled.setAttribute("aria-expanded", String(isOpen));
    };

    const showScheduledHint = (duration = 2200) => {
      if (!scheduledHint) return;

      scheduledHint.classList.add("is-visible");
      window.setTimeout(() => {
        scheduledHint.classList.remove("is-visible");
      }, duration);
    };

    setScheduledOpen(true);

    window.setTimeout(() => {
      if (introDone) return;

      setScheduledOpen(false);
      showScheduledHint();
      introDone = true;
    }, 2200);

    scheduled.addEventListener("click", (event) => {
      introDone = true;

      if (hasDragged) {
        event.preventDefault();
        hasDragged = false;
        return;
      }

      if (!scheduled.classList.contains("is-open")) {
        event.preventDefault();
        setScheduledOpen(true);
      }
    });

    document.addEventListener("click", (event) => {
      if (!scheduled.classList.contains("is-open")) return;

      if (!scheduled.contains(event.target)) {
        setScheduledOpen(false);
      }
    });

    scheduled.addEventListener("pointerdown", (event) => {
      introDone = true;
      startX = event.clientX;
      currentX = event.clientX;
      hasDragged = false;
      scheduled.classList.add("is-dragging");
      scheduled.setPointerCapture(event.pointerId);
    });

    scheduled.addEventListener("pointermove", (event) => {
      currentX = event.clientX;

      if (Math.abs(currentX - startX) > 8) {
        hasDragged = true;
      }
    });

    scheduled.addEventListener("pointerup", (event) => {
      const movement = currentX - startX;
      scheduled.classList.remove("is-dragging");

      if (Math.abs(movement) > 24) {
        setScheduledOpen(movement < 0);
      }

      if (scheduled.hasPointerCapture(event.pointerId)) {
        scheduled.releasePointerCapture(event.pointerId);
      }
    });

    scheduled.addEventListener("pointercancel", () => {
      scheduled.classList.remove("is-dragging");
      hasDragged = false;
    });
  }
});

const API_URL = "https://api.wigorrodrigues.com.br";

document.querySelectorAll("[data-api-route]").forEach((link) => {
    link.addEventListener("click", async (event) => {
        event.preventDefault();

        const route = link.dataset.apiRoute;
        const response = await fetch(`${API_URL}${route}`);
        const data = await response.json();

        console.log(data);
    });
});
