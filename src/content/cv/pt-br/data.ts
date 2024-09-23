import { t } from "../../../lib/i18n";

export const projects = [
  {
    title: "Lusci - Bot musical com IA para Discord",
    role: "Desenvolvedor de Software",
    dateRange: "Abr 2024 - Presente",
    text: "Lusci é um bot do Discord gratuito, projetado para aprimorar a experiência musical do seu servidor. Com comandos para tocar, gerenciar faixas e verificar informações do bot, o Lusci traz música para sua comunidade do Discord por meio da interpretação de comandos em linguagem natural.",
    skills: "Java, JDA, Gemini, Git, GitHub, Gradle, Docker, ...".split(", "),
    link: "https://github.com/neogaialab/lusci",
  },
  {
    title: "Facevault - Sistema para gerenciamento de pessoas e suas biometrias faciais.",
    role: "Desenvolvedor de Software",
    dateRange: "Mai 2024 - Mai 2024",
    text: "Este projeto é um desafio técnico que envolve o desenvolvimento de um sistema web para registro, atualização e visualização de usuários, incluindo suas biometrias faciais (foto do rosto). As principais áreas de foco são a criação de um banco de dados relacional, uma API e um frontend.",
    skills: "Java, SpringBoot, Gradle, PostgreSQL, SQL, Lambok, Angular, HTML, CSS, Ant Design, Docker, Git, GitHub, ...".split(", "),
    link: "https://github.com/luisfuturist/challenge-facevault",
  },
  {
    title: "Strigi - IA Assistente de terminal",
    role: "Desenvolvedor de Software",
    dateRange: "Abr 2024 - Presente",
    text: "Strigi é um assistente de IA gratuito e experimental que funciona dentro da sua linha de comando. Ele ajuda você com várias tarefas relacionadas a comandos, como gerar comandos com base em suas instruções e explicar os existentes de forma clara.",
    skills: "TypeScript, Bun, Node.js, Gemini, Git, GitHub, ...".split(", "),
    link: "https://neogaialab.github.io/strigi/overview/introduction.html",
  }
];

export const experience = [
  {
    title: "AtmosLab",
    link: "https://www.atmoslab.com.br/",
    role: "Professor de Inglês - Tempo parcial",
    dateRange: t("Jul 2024 - Present"),
    skills:
      "Ensino de Inglês".split(", "),
  },
  {
    title: "With",
    link: "https://with.luisfuturist.com",
    role: "Desenvolvedor Full Stack & Professor de Inglês - Autônomo",
    dateRange: t("Sep 2023 - Jan 2024"),
    text: "Preparo de apresentações, instrução individualizada e desenvolvimento de tarefas para casa, com foco na correção e feedback personalizado. Além disso, criei um website e posts para a divulgação de meus serviços de ensino, garantindo uma comunicação eficaz e profissional.",
    skills:
      "P-react, Astro, Vite, HTML, TailwindCSS, Git, CF Pages, SSR, ...".split(", "),
  },
  {
    title: "Maskavo",
    link: "https://modamaskavo.com.br",
    role: t("Web Developer & IT Assistant - Freelance"),
    dateRange: t("May 2021 - Aug 2023"),
    text: t(
      "Installation, maintenance, configuration and creation of the website, including landing page and e-commerce.",
    ),
    skills:
      "Wordpress, MySQL, HTML, CSS, Git, Vite, Express, React.js, ...".split(", "),
  },
  {
    title: "BeeSix Soluções",
    role: t("Full Stack Developer - Full-time"),
    dateRange: t("Feb 2023 - Jun 2023"),
    text: t("Providing software development services such as bug fixes, code refactoring and new feature implementation, including creation of a user account page and a module for editing and PDF generation."),
    skills: "React.js, HTML, styled-components, Git, Node.js, Express, ...".split(", "),
  },
];
export const courses = [
  {
    title: t("Programming Logic with JavaScript"),
    role: "SENAI/SC",
    link: "https://ecommerce.sesisenai.org.br/documentos/validar/DCQLASYWD0",
    skills: "Lógica de Programação, JavaScript".split(", "),
    dateRange: "2022 - 2022",
    startTime: "2022",
    endTime: "2022",
  },
  {
    title: t("Programming Front-end Basics"),
    role: "SENAI/SC",
    link: "https://ecommerce.sesisenai.org.br/documentos/validar/DGFXYXD9XH",
    skills: "Desenvolvimento Front-end, HTML, CSS, JavaScript".split(", "),
    dateRange: "2022 - 2022",
    startTime: "2022",
    endTime: "2022",
  },
  {
    title: t("Programming Back-end Basics"),
    role: "SENAI/SC",
    link: "https://ecommerce.sesisenai.org.br/documentos/validar/D25IUCYI6O",
    skills: "Desenvolvimento Back-end, Node.js, HTTP, Express, MongoDB, AWS".split(", "),
    dateRange: "2022 - 2022",
    startTime: "2022",
    endTime: "2022",
  },
  {
    title: t("Cloud Computing"),
    role: "SENAI/SC",
    link: "https://ecommerce.sesisenai.org.br/documentos/validar/D8FCS6GKN0",
    skills: "Computação em Nuvem".split(", "),
    dateRange: "2022 - 2022",
    startTime: "2022",
    endTime: "2022",
  },
  {
    title: t("User Experience - Digital Interfaces"),
    role: "SENAI/SC",
    link: "https://ecommerce.sesisenai.org.br/documentos/validar/D5GDAE7HYX",
    dateRange: "2022 - 2022",
    startTime: "2022",
    endTime: "2022",
  },
  {
    title: "Customer Success",
    role: "SENAI/SC",
    link: "https://ecommerce.sesisenai.org.br/documentos/validar/DJ9IFPYAM2",
    dateRange: "2022 - 2022",
    startTime: "2022",
    endTime: "2022",
  },
  {
    title: t("Notions of Technical English"),
    role: "SENAI/SC",
    link: "https://ecommerce.sesisenai.org.br/documentos/validar/DEESS38VTQ",
    dateRange: "2022 - 2022",
    startTime: "2022",
    endTime: "2022",
  },
];
export const certificates = [
  {
    title: "Intermediário Superior - CEFR Nível B2+",
    role: "EF SET",
    link: "https://cert.efset.org/ES2ZUq",
    dateRange: "Nov 2023",
  },
]
export const academicBackground = [
  {
    title: t("Technology of Artificial Intelligence"),
    role: "FIAP",
    skills: "Lógica de Programação, Python, R, Data Science, Git, GitHub, ...".split(", "),
    dateRange: "2024 - 2026",
    startTime: "2024",
    endTime: "2026",
  },
  {
    title: "Ensino Médio Integral",
    role: "Elfrida Cristino da Silva",
    dateRange: "2017 - 2019",
    startTime: "2017",
    endTime: "2019",
  },
]
export const organizations = [
  {
    title: "NeoGaia Lab",
    role: t("Software Developer"),
    dateRange: t("Mar 2022 - Present"),
    text: t(
      "Laboratory for exploring new ideas, experiments and possible solutions in software development.",
    ),
    skills: "Node.js, JavaScript, Vue, React, TypeScript, Git, GitHub, Java, Gradle, HTML, CSS, ...".split(", "),
    link: "https://github.com/neogaialab",
  },
];
