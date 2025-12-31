###########reset.css

Aqui você zera o comportamento padrão do navegador.

Você vai:

Remover margens e paddings automáticos

Padronizar o box-sizing

Garantir que todos os navegadores comecem do mesmo ponto

👉 Você não estiliza visualmente nada aqui.
É só “limpar o terreno”.

##########variables.css

Aqui você define tudo que é padrão global do site.

Você vai colocar:

Cores principais (fundo, texto, destaque)

Fontes principais

Espaçamentos padrão

Tamanhos que se repetem muito

👉 Esse arquivo existe para evitar repetição e manter consistência.
👉 Todos os outros CSS “enxergam” essas variáveis automaticamente.

###########base.css

Aqui você define o estilo básico dos elementos HTML.

Você vai configurar:

Fonte padrão do site

Cor padrão do texto

Estilo geral de títulos (h1, h2, etc.)

Parágrafos, links, listas

👉 Pense como o “jeito padrão” do texto do site.
👉 Nada específico de página aqui.

layout.css

Aqui entra a estrutura da página.

Você vai estilizar:

Header

Nav

Main

Sections

Footer

Alinhamentos grandes (flex, grid)

Espaçamentos entre blocos principais

👉 Não é aparência fina, é organização do espaço.
👉 Onde cada parte vive na tela.

components.css

Aqui você guarda elementos reutilizáveis.

Você vai colocar:

Cards

Botões

Caixas de destaque

Classes de ênfase de texto (ex: seu “TheWhite”)

👉 Tudo que pode aparecer em várias páginas.
👉 Componentes são “peças de LEGO”.

icons.css

Aqui fica tudo relacionado a ícones.

Você vai definir:

Tamanho padrão dos ícones

Cor

Hover

Espaçamento

Alinhamento

👉 Não misture ícone com layout geral.
👉 Isso facilita trocar todos os ícones depois.

pages/home.css

Aqui é exclusivo da página inicial.

Você vai estilizar:

Hero

Marca / nome do projeto

Perfil

Seções que só existem na home

Background central da home (imagem, gradiente, etc.)

👉 Se amanhã você refizer a home, só mexe aqui.

Onde fica a imagem de background central?

Ela não é estrutura, é visual.

Você coloca:

No CSS da página (pages/home.css)

Aplicada ao elemento principal da página (geralmente header ou uma section hero)

👉 O HTML só declara a área.
👉 O CSS decide se tem imagem, cor ou nada.

Sobre palavras com estilo especial (sua ênfase)

Isso é:

Um componente de texto

Fica no components.css

Assim você pode usar essa ênfase:

Em qualquer página

Sem repetir estilo

Perfil: nav ou main?

Perfil é conteúdo, não navegação.

👉 Fica no main.
Nav é só para links.

Resumo mental rápido

reset → limpar

variables → padrão global

base → texto e elementos básicos

layout → organização da página

components → peças reutilizáveis

icons → só ícones

pages → visual específico de cada página

Se quiser, no próximo passo eu faço um checklist tipo “ordem de construção” pra você seguir sem se perder.