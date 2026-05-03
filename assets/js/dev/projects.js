const API_URL = "https://api.wigorrodrigues.com.br";

const content = document.querySelector("#projects-content");

loadProjects();

async function loadProjects() {
    try {
        const response = await fetch(`${API_URL}/chem/projects`);

        if (!response.ok) {
            throw new Error(`Erro ${response.status}`);
        }

        const data = await response.json();
        renderProjects(data.projects || []);
    } catch (error) {
        console.error("Erro ao carregar os projetos:", error);
        content.innerHTML = "<p>Desculpe, ocorreu um erro ao carregar os projetos.</p>";
    }
}

function renderProjects(projects) {
    if (projects.length === 0) {
        content.innerHTML = "<p>Nenhum projeto encontrado.</p>";
        return;
    }

    content.innerHTML = projects.map((project) => `
    <article class="content-card">
      <h2>${project.name}</h2>
      <p>${project.description || "Sem descricao."}</p>
      ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">Open project</a>` : ""}
    </article>
  `).join("");
}
