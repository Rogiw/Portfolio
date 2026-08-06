const sidebarState = {
  expanded: "expanded",
  compact: "compact",
  hidden: "hidden",
};

const page = document.body;
const resizeButton = document.querySelector("[data-sidebar-resize]");
const hideButton = document.querySelector("[data-sidebar-hide]");
const showButton = document.querySelector("[data-sidebar-show]");

function setSidebarState(state) {
  page.dataset.sidebarState = state;

  const isExpanded = state === sidebarState.expanded;

  resizeButton.setAttribute("aria-expanded", String(isExpanded));
  resizeButton.setAttribute(
    "aria-label",
    isExpanded ? "Recolher barra lateral" : "Expandir barra lateral",
  );
  resizeButton.title = isExpanded
    ? "Recolher barra lateral"
    : "Expandir barra lateral";
  resizeButton.querySelector("[aria-hidden]").textContent = isExpanded
    ? "‹"
    : "›";
}

resizeButton.addEventListener("click", () => {
  const nextState =
    page.dataset.sidebarState === sidebarState.compact
      ? sidebarState.expanded
      : sidebarState.compact;

  setSidebarState(nextState);
});

hideButton.addEventListener("click", () => {
  setSidebarState(sidebarState.hidden);
  showButton.focus();
});

showButton.addEventListener("click", () => {
  setSidebarState(sidebarState.expanded);
  resizeButton.focus();
});
