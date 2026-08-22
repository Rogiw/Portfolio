document.querySelectorAll('[data-modal-open]').forEach((button) => {
    const modalId = button.dataset.modalOpen;
    const modal = document.getElementById(modalId);

    if (!modal) return;

    button.addEventListener('click', () => {
        modal.showModal();
    });
});

document.querySelectorAll('[data-modal-close]').forEach((button) => {
    const modal = button.closest('dialog');

    if (!modal) return;

    button.addEventListener('click', () => {
        modal.close();
    });
});

document.querySelectorAll("dialog").forEach((modal) => {
  const content = modal.querySelector(".modal-content");

  modal.addEventListener("click", (event) => {
    if (content && !content.contains(event.target)) {
      modal.close();
    }
  });
});

const scheduleForm = document.getElementById("schedule-form");

if (scheduleForm) {
  const status = scheduleForm.querySelector(".form-status");
  const submitButton = scheduleForm.querySelector('button[type="submit"]');

  scheduleForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!scheduleForm.checkValidity()) {
      scheduleForm.reportValidity();
      return;
    }

    const formData = new FormData(scheduleForm);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      deadline: String(formData.get("date") || "") || null,
      subject: String(formData.get("subject") || ""),
      services: formData.getAll("services").map((value) => String(value)),
      message: String(formData.get("message") || ""),
      website: String(formData.get("website") || ""),
    };

    if (status) {
      status.textContent = "Sending...";
      status.className = "form-status is-pending";
    }

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent = "Sending...";
    }

    try {
      const response = await fetch(scheduleForm.action, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form request failed");
      }

      scheduleForm.reset();

      if (status) {
        status.textContent = "Sent successfully";
        status.className = "form-status is-success";
      }
    } catch (error) {
      if (status) {
        status.textContent = "Could not send. Please try again.";
        status.className = "form-status is-error";
      }
    } finally {
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.textContent = "Submit";
      }
    }
  });
}
