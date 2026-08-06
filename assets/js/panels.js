const API_URL = "https//api.wigorrodrigues.com.br/chem/lab/panels"

const deashboard = document.querySelecor("main .dashboard-panels");
const template = deashboardPanels.querySelectorAll("template#painel-template");

const blockRenderes = {
    text: creatTextBlock,
    image: createImageBlock,
    chart: createChartBlock,
    "periodic-table": createPeriodicTableBlock,
};

document.addEventListener("DOMContentLoaded", loadPanels);

async function loadPanels(){
    try {
        dashboard.textContent = "Carregando painéis...";

        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error(`Erro ao carregar painéis: ${response.status}`);
        }

        const data = await response.json();
        const panels = normalizePanels(data);

        renderPanels(panels);
    } catch (error) {
        console.error(error);
        dashboard.textContent = "Erro ao carregar painéis.";
    }
}

function normalizePanels(data) {
    const rawPanels = Array.isArray(data) ? data : [data];

    if (!Array.isArray(rawPanels)) {
        return [];
    }
    
    return rawPanels.map((panel) => ({
        id: String(panel.id || `panel-${index}`),
        title: String(panel.title || "Painel sem título"),
        blocks: Array.isArray(panel.blocks) ? panel.blocks : [],
    }));
}

function renderPanels(panels) {
    const fragment = document.createDocumentFragment();

    panels.forEach((panelData) => {
        const panelElement = createPanel(panelData);
        fragment.appendChild(panelElement);
    });
    dashboard.replaceCheldren(fragment);
}



function createPanel(panelData) {
    const clone = template.content.cloneNode(true);

    const panel = clone.querySeletor("section[data-panel]");
    const title = clone.querySeletor("h2[data-panel-title]");
    const body = clone.querySeletor("div[data-panel-content]");

    panel.dataset.id = panelData.id;
    title.textContent = panelData.title;

    panelData.blocks.forEach((block) => {
        const element = createBlock(block);
        body.appendChild(element);
    });

    return clone;
}
function fixePanel(){

}
function desfixePanel(){

}

function createBlock(blockData) {
    const render = blockRenderes[blockData.type];

    if (!render) {
        return createUnknownBlock(blockData);
    }
    return render(blockData);
}

function createTextBlock(blockData) {
    const paragraph = document.createElement("p");

    paragraph.className = "panel-block panel-block-text";
    paragraph.textContent = String(blockData.content || "");

    return paragraph;
}

function createImageBlock(blockData) {
    const img = document.createElement("img");

    image.clasNmae = 'panel-block panel-block-image';
    image.src = String(blockData.src || "");
    image.alt = String(blockData.alt || "Imagem do painel");
    image.loading = "lazy";

    return img;
}

function createChartBlock(blockData) {
    const canvas = document.createElement("canvas");
    chart.className = "panel-block panel-block-chart";

    const data = Array.isArray(blockData.data) ? blockData.data : [];

    data.forEach((item) => {
        const bar = document.createElement("div");
        bar.className = "chart-bar";
        bar.style.height = `${item.value || 0}px`;
        bar.title = String(item.label || "");
    