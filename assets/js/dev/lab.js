const API_URL = "https://api.wigorrodrigues.com.br";

const content = document.querySelector("#lab-content");
const t = (key) => window.siteI18n?.t(key) || key;

loadLab();

async function loadLab() {
  try {
    const response = await fetch(`${API_URL}/dev/lab`);

    if (!response.ok) {
      throw new Error(`Erro ${response.status}`);
    }

    const data = await response.json();
    renderLab(data.lab || []);
  } catch (error) {
    console.error("Erro ao carregar o lab:", error);
    content.innerHTML = `<p data-i18n="lab_error">${t("lab_error")}</p>`;
  }
}

function renderLab(items) {
  if (items.length === 0) {
    content.innerHTML = `<p data-i18n="no_lab">${t("no_lab")}</p>`;
    return;
  }

  content.innerHTML = items.map((item) => `
    <article class="content-card">
      <h2>${item}</h2>
    </article>
  `).join("");
}
