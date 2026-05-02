document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("js-ready");

  const profile = document.querySelector(".perfil");
  const trigger = document.querySelector(".perfil-trigger");

  if (!profile || !trigger) {
    return;
  }

  trigger.addEventListener("click", () => {
    const isOpen = profile.classList.toggle("is-open");
    trigger.setAttribute("aria-expanded", String(isOpen));
  });
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