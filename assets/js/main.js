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
