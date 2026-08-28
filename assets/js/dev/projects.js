const API_URL = "https://api.wigorrodrigues.com.br";

const content = document.querySelector("#projects-content");
const t = (key) => window.siteI18n?.t(key) || key;

loadProjects();

async function loadProjects() {
    try {
        const response = await fetch(`${API_URL}/dev/projects`);

        if (!response.ok) {
            throw new Error(`Erro ${response.status}`);
        }

        const data = await response.json();
        renderProjects(data.projects || []);
    } catch (error) {
        console.error("Erro ao carregar os projetos:", error);
        content.innerHTML = `<p data-i18n="projects_error">${t("projects_error")}</p>`;
    }
}

function renderProjects(projects) {
    if (projects.length === 0) {
        content.innerHTML = `<p data-i18n="no_projects">${t("no_projects")}</p>`;
        return;
    }

    content.innerHTML = projects.map((project) => `
    <article class="content-card">
      <h2>${project.name}</h2>
      <p${project.description ? "" : ' data-i18n="no_description"'}>${project.description || t("no_description")}</p>
      ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer" data-i18n="open_project">${t("open_project")}</a>` : ""}
    </article>
  `).join("");
}
