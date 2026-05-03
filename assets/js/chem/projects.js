const API_URL = "htpps://api.wigorrodrigues.com.br";
//esse texto está cheio de anotações de funções pois ainda estou aprendendo a usar js. Nesse momento, só tenho conhecimento em pyhton, html, css e um pouco de linux e suas funcoes e como configurar um servidor, mas estou aprendendo js para poder fazer coisas mais interativas no meu site, como puxar dados de uma API e mostrar na tela, ou seja, coisas que não são possíveis só com html e css. Por isso, estou anotando tudo para poder lembrar depois e também para quem quiser aprender junto comigo.
const params = new URLSearchParams(window.location.search);
//new é para criar um objeto a partir de uma classe, nesse caso a classe é URLSearchParams, que é uma classe nativa do JavaScript para trabalhar com parâmetros de URL
//window.location.search é para pegar a parte da URL que vem depois do "?", ou seja, os parâmetros da URL
//URLSearchParams é uma classe que facilita a manipulação dos parâmetros da URL, permitindo acessar os valores dos parâmetros de forma simples
const area = params.get('area'); //get é um método da classe URLSearchParams para pegar o valor de um parâmetro específico, nesse caso o parâmetro "area"
const title = document.querySelector("#page-title");
const content = document.querySelector("#projects-content");

const AllowedAreas = ["chem", "dev"];//Array de áreas permitidas, para evitar que o usuário tente acessar uma área que não existe. 

if (!AllowedAreas.includes(area)) {
    title.textContent = "Área não encontrada";
    content.innerHTML = "<p>Desculpe, a área que você está tentando acessar não existe.</p>";
} else {
    title.textContent = '${area.toUpperCase()} Projects';//toUpperCase é um método de string para transformar a string em maiúscula, nesse caso para deixar o título mais bonito
}

async function loadProjects(area) {
    try {
        const reponse = await fetch(`${API_URL}/chem/projects`);//fetch é uma função nativa do JavaScript para fazer requisições HTTP, nesse caso para pegar os projetos da área de química
        if (!response.ok) {//ok é uma propriedade da resposta da requisição que indica se a requisição foi bem sucedida (status 200-299)
            throw new Error("Erro ao carregar os projetos");//throw é para lançar um erro, nesse caso para mostrar uma mensagem de erro se a requisição não for bem sucedida
        }
        const data = await response.json();//json é um método da resposta da requisição para transformar a resposta em um objeto JavaScript, nesse caso para poder acessar os dados dos projetos
        renderProjects(data);//renderProjects é uma função para renderizar os projetos na tela, passando os dados dos projetos como parâmetro
    } catch (error) {
        console.error("Erro ao carregar os projetos:", error);//console.error é para mostrar uma mensagem de erro no console do navegador, nesse caso para ajudar a identificar o problema se a requisição não for bem sucedida
        content.innerHTML = "<p>Desculpe, ocorreu um erro ao carregar os projetos.</p>";//innerHTML é para colocar um conteúdo HTML dentro de um elemento, nesse caso para mostrar uma mensagem de erro na tela se a requisição não for bem sucedida
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
      <p>${project.description || "Sem descrição."}</p>
      ${project.url ? `<a href="${project.url}" target="_blank" rel="noopener noreferrer">Open project</a>` : ""}
    </article>
  `).join("");
}