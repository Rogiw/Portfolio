const API_URL = "https://api.wigorrodrigues.com.br";

const content = document.querySelector("#lab-content");

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
    content.innerHTML = "<p>Desculpe, ocorreu um erro ao carregar o lab.</p>";
  }
}

function renderLab(items) {
  if (items.length === 0) {
    content.innerHTML = "<p>Nenhum lab encontrado.</p>";
    return;
  }

  content.innerHTML = items.map((item) => `
    <article class="content-card">
      <h2>${item}</h2>
    </article>
  `).join("");
}
