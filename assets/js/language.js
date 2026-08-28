(() => {
  const STORAGE_KEY = "wigor_site_language";
  const translations = {
    en: {
      page_title: "Portfolio", chemistry: "Chemistry", programming: "Programming", arts: "Arts", analysis: "Analysis",
      planning: "Planning", lab: "Lab", labs: "Labs", projects: "Projects", experiments: "Experiments",
      services_heading: "Services", social_media: "Social media", lab_notebook: "Lab notebook", articles: "Articles",
      settings: "Settings", intro_name: "Hi, my name is Wigor,", intro_alias: "also known as",
      intro_build: "I build solutions at the intersection of", intro_fields: "chemistry and technology",
      intro_resume: "To learn more about me, click here to view my résumé", support_project: "Support this project",
      marketplace_title: "Top marketplace picks and buying groups",
      marketplace_text: "A curated selection of products, group-buy ideas and recommendations for chemistry, programming, data analysis and automation enthusiasts. See the top picks and join buying groups for exclusive deals on essential tools and resources.",
      portfolio_description: "TechBioChem portfolio for chemistry, programming, data analysis and automation projects.",
      navigation: "Navigation", home: "Home", chem_lab: "Chem Lab", chem_projects: "Chem Projects", dev_projects: "Dev Projects",
      focus_areas: "Focus areas", data_analysis: "Data analysis", automation: "Automation", contact: "Contact", resume: "Résumé",
      rights_reserved: "All rights reserved.", footer_navigation: "Footer navigation", open_profile: "Open profile links",
      open_private_schedule: "Open your private schedule", background_image: "Background image", profile_picture: "Profile picture",
      chemistry_marketplace: "Chemistry marketplace", scheduled: "Scheduled", scheduled_hint: "Click here to see your schedules",
      contact_me: "Contact me", name: "Name:", phone: "Phone:", email: "Email:", deadline: "Deadline:", services: "Services:",
      consulting: "Consulting", project: "Project", purchase_sale: "Purchase / sale", other: "Other", subject: "Subject:",
      contact_reason: "Reason for contact", freelance: "Freelance", question: "Question", business: "Business / purchase and sale",
      proposal: "Proposal / partnership", message: "Message:", name_placeholder: "Type your name here",
      email_placeholder: "Type your email here", message_placeholder: "Have a project in mind? Send me a message and I'll get back to you soon.",
      private_code_placeholder: "Received by email", cancel: "Cancel", submit: "Submit", your_schedule: "Your schedule",
      schedule_intro: "Only your appointments with Wigor appear here.", private_code: "Private code:", close: "Close",
      open_agenda: "Open agenda", personal_agenda: "Personal agenda", private_client_agenda: "Private client agenda",
      your_appointments: "Your appointments", your_proposal_threads: "Your proposal threads", proposals_business: "Proposals & business",
      forget_access: "Forget access", scheduled_status: "Scheduled", confirmed_status: "Confirmed", cancelled_status: "Cancelled",
      completed_status: "Completed", waiting_decision: "Waiting for decision", purchase_accepted: "Purchase accepted",
      purchase_declined: "Purchase declined", improvement_requested: "Improvement requested", you: "You",
      send_improved: "Send improved proposal", send_counter: "Send counterproposal",
      revised_proposal: "Keep the same subject and write your revised proposal:", send_review: "Send for review", sending: "Sending...",
      opening_agenda: "Opening your agenda...", no_appointments: "No appointment has been marked yet.",
      appointments_updated: "Appointments updated.", counter_sending: "Sending your counterproposal...",
      counter_sent: "Counterproposal sent in the same thread.", counter_failed: "Could not send the counterproposal. Please try again.",
      invalid_code: "This code is invalid or the agenda is temporarily unavailable.",
      enter_code: "Enter the private code received after sending Contact me.", access_removed: "Private access removed from this device.",
      contact_sending: "Sending...", contact_sent: "Sent successfully. Your private agenda is ready in Scheduled.",
      contact_failed: "Could not send. Please try again.", loading: "Loading...", dev_lab: "Dev Lab",
      scientific_workspace: "Scientific workspace", general: "General", general_view: "Overview", tools: "Tools",
      data_entry: "Data entry", documentation: "Documentation", close_sidebar: "Close sidebar", show_sidebar: "Show sidebar",
      collapse_sidebar: "Collapse sidebar", hide_sidebar: "Hide sidebar", chem_lab_tools: "Chem Lab tools",
      panel_content: "Panel content goes here...", open_project: "Open project",
      projects_error: "Sorry, an error occurred while loading the projects.", no_projects: "No projects found.", no_description: "No description.",
      lab_error: "Sorry, an error occurred while loading the lab.", no_lab: "No lab found.",
      titration_lab: "Titration laboratory", new_experiment: "New experiment", virtual_bench: "Virtual bench",
      titration_viewer: "3D titration laboratory viewer", reaction: "Reaction", solutions: "Solutions",
      complementary_equations: "Complementary equations", calculate_results: "Run the calculation to generate the results.",
      titration_curve: "Titration curve", configure_experiment: "Configure experiment", experiment: "Experiment",
      erlenmeyer_analysis: "Analysis in the Erlenmeyer flask", burette_titrant: "Titrant in the burette",
      save: "Save", concentration: "Concentration", volume: "Volume", formula: "Formula", equation: "Equation",
      edit_experiment: "Edit experiment", no_reaction: "No reaction provided. Edit the experiment to add a chemical reaction.",
      no_solutions: "No solutions provided. Edit the experiment to add solutions.", calculate_titration: "Calculate titration",
      no_calculation: "No calculation has been performed yet.", experiment_name: "Name", molecular_equation: "Molecular equation",
      initial_burette_volume: "Initial burette volume"
    },
    pt: {
      page_title: "Portfólio", chemistry: "Química", programming: "Programação", arts: "Artes", analysis: "Análise",
      planning: "Planejamento", lab: "Laboratório", labs: "Laboratórios", projects: "Projetos", experiments: "Experimentos",
      services_heading: "Serviços", social_media: "Redes sociais", lab_notebook: "Caderno de laboratório", articles: "Artigos",
      settings: "Configurações", intro_name: "Olá, meu nome é Wigor,", intro_alias: "também conhecido como",
      intro_build: "Eu desenvolvo soluções na interseção entre", intro_fields: "química e tecnologia",
      intro_resume: "Para saber mais sobre mim, clique aqui e acesse meu currículo", support_project: "Apoie este projeto",
      marketplace_title: "Melhores escolhas e grupos de compra",
      marketplace_text: "Uma seleção de produtos, ideias de compras coletivas e recomendações para quem gosta de química, programação, análise de dados e automação. Veja os destaques e participe dos grupos para obter ofertas exclusivas em ferramentas essenciais.",
      portfolio_description: "Portfólio TechBioChem de projetos de química, programação, análise de dados e automação.",
      navigation: "Navegação", home: "Início", chem_lab: "Laboratório de Química", chem_projects: "Projetos de Química",
      dev_projects: "Projetos de Programação", focus_areas: "Áreas de atuação", data_analysis: "Análise de dados",
      automation: "Automação", contact: "Contato", resume: "Currículo", rights_reserved: "Todos os direitos reservados.",
      footer_navigation: "Navegação do rodapé", open_profile: "Abrir links do perfil", open_private_schedule: "Abrir sua agenda privada",
      background_image: "Imagem de fundo", profile_picture: "Foto de perfil", chemistry_marketplace: "Marketplace de química",
      scheduled: "Agenda", scheduled_hint: "Clique aqui para ver suas marcações", contact_me: "Fale comigo", name: "Nome:",
      phone: "Telefone:", email: "E-mail:", deadline: "Prazo:", services: "Serviços:", consulting: "Consultoria",
      project: "Projeto", purchase_sale: "Compra / venda", other: "Outro", subject: "Assunto:",
      contact_reason: "Motivo do contato", freelance: "Freelance", question: "Pergunta", business: "Negócio / compra e venda",
      proposal: "Proposta / parceria", message: "Mensagem:", name_placeholder: "Digite seu nome aqui",
      email_placeholder: "Digite seu e-mail aqui", message_placeholder: "Tem um projeto em mente? Envie uma mensagem e responderei em breve.",
      private_code_placeholder: "Recebido por e-mail", cancel: "Cancelar", submit: "Enviar", your_schedule: "Sua agenda",
      schedule_intro: "Somente suas marcações com Wigor aparecem aqui.", private_code: "Código privado:", close: "Fechar",
      open_agenda: "Abrir agenda", personal_agenda: "Agenda pessoal", private_client_agenda: "Agenda privada do cliente",
      your_appointments: "Suas marcações", your_proposal_threads: "Suas conversas de propostas", proposals_business: "Propostas e negócios",
      forget_access: "Esquecer acesso", scheduled_status: "Agendado", confirmed_status: "Confirmado", cancelled_status: "Cancelado",
      completed_status: "Concluído", waiting_decision: "Aguardando decisão", purchase_accepted: "Compra aceita",
      purchase_declined: "Compra recusada", improvement_requested: "Melhoria solicitada", you: "Você",
      send_improved: "Enviar proposta melhorada", send_counter: "Enviar contraproposta",
      revised_proposal: "Mantenha o mesmo assunto e escreva sua proposta revisada:", send_review: "Enviar para análise",
      sending: "Enviando...", opening_agenda: "Abrindo sua agenda...", no_appointments: "Nenhuma marcação foi feita ainda.",
      appointments_updated: "Agenda atualizada.", counter_sending: "Enviando sua contraproposta...",
      counter_sent: "Contraproposta enviada na mesma conversa.", counter_failed: "Não foi possível enviar a contraproposta. Tente novamente.",
      invalid_code: "Este código é inválido ou a agenda está temporariamente indisponível.",
      enter_code: "Digite o código privado recebido após enviar o formulário.", access_removed: "Acesso privado removido deste dispositivo.",
      contact_sending: "Enviando...", contact_sent: "Enviado com sucesso. Sua agenda privada está pronta.",
      contact_failed: "Não foi possível enviar. Tente novamente.", loading: "Carregando...", dev_lab: "Laboratório de Programação",
      scientific_workspace: "Espaço de trabalho científico", general: "Geral", general_view: "Visão geral", tools: "Ferramentas",
      data_entry: "Entrada de dados", documentation: "Documentação", close_sidebar: "Fechar barra lateral",
      show_sidebar: "Mostrar barra lateral", collapse_sidebar: "Recolher barra lateral", hide_sidebar: "Ocultar barra lateral",
      chem_lab_tools: "Ferramentas do Laboratório de Química", panel_content: "O conteúdo do painel aparece aqui...",
      open_project: "Abrir projeto", projects_error: "Desculpe, ocorreu um erro ao carregar os projetos.",
      no_projects: "Nenhum projeto encontrado.", no_description: "Sem descrição.", lab_error: "Desculpe, ocorreu um erro ao carregar o laboratório.",
      no_lab: "Nenhum laboratório encontrado.", titration_lab: "Laboratório de Titulação", new_experiment: "Novo experimento",
      virtual_bench: "Bancada virtual", titration_viewer: "Visualizador 3D do laboratório de titulação", reaction: "Reação",
      solutions: "Soluções", complementary_equations: "Equações complementares",
      calculate_results: "Realize o cálculo para gerar os resultados.", titration_curve: "Curva de titulação",
      configure_experiment: "Configurar experimento", experiment: "Experimento", erlenmeyer_analysis: "Análise no Erlenmeyer",
      burette_titrant: "Titulante na bureta", save: "Salvar", concentration: "Concentração", volume: "Volume",
      formula: "Fórmula", equation: "Equação", edit_experiment: "Editar experimento",
      no_reaction: "Nenhuma reação informada. Edite o experimento para adicionar uma reação química.",
      no_solutions: "Nenhuma solução informada. Edite o experimento para adicionar soluções.",
      calculate_titration: "Calcular titulação", no_calculation: "Nenhum cálculo realizado ainda.",
      experiment_name: "Nome", molecular_equation: "Equação molecular", initial_burette_volume: "Volume inicial da bureta"
    }
  };

  const requestedLocale = new URLSearchParams(window.location.search).get("lang");
  let locale = requestedLocale === "pt" || requestedLocale === "en"
    ? requestedLocale
    : localStorage.getItem(STORAGE_KEY) === "pt" ? "pt" : "en";
  const t = (key) => translations[locale][key] || translations.en[key] || key;
  const translatedAttributes = {
    "data-i18n-placeholder": "placeholder", "data-i18n-aria-label": "aria-label",
    "data-i18n-tooltip": "data-tooltip", "data-i18n-alt": "alt", "data-i18n-title": "title",
    "data-i18n-data-text": "data-text"
  };

  const ensureToggle = () => {
    if (document.getElementById("language-toggle")) return;
    const toggle = document.createElement("button");
    toggle.className = "language-toggle";
    toggle.id = "language-toggle";
    toggle.type = "button";
    document.body.prepend(toggle);
  };

  const apply = () => {
    document.documentElement.lang = locale === "pt" ? "pt-BR" : "en";
    document.querySelectorAll("[data-i18n]").forEach((element) => { element.textContent = t(element.dataset.i18n); });
    Object.entries(translatedAttributes).forEach(([selector, attribute]) => {
      document.querySelectorAll(`[${selector}]`).forEach((element) => element.setAttribute(attribute, t(element.getAttribute(selector))));
    });
    const toggle = document.getElementById("language-toggle");
    if (toggle) {
      toggle.textContent = locale === "pt" ? "EN" : "PT";
      toggle.setAttribute("aria-label", locale === "pt" ? "Switch language to English" : "Mudar idioma para português");
    }
  };

  ensureToggle();
  document.getElementById("language-toggle")?.addEventListener("click", () => {
    locale = locale === "pt" ? "en" : "pt";
    localStorage.setItem(STORAGE_KEY, locale);
    apply();
    window.dispatchEvent(new CustomEvent("site-language-changed", { detail: { locale } }));
  });
  window.siteI18n = { t, apply, get locale() { return locale; } };
  apply();
})();
