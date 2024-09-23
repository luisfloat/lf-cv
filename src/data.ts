import { t } from "./lib/i18n";

export function getContact() {
  return [
    {
      title: t("Phone"),
      href: "tel:5547999216685",
      label: "47 99921-6685",
    },
    {
      title: "Email",
      href: "mailto:luisfuturist@gmail.com",
      label: "luisfuturist@gmail.com",
    },
    {
      title: "Website",
      href: "https://luisfuturist.com",
      label: "luisfuturist.com",
    },
    {
      title: "GitHub",
      href: "https://github.com/luisfuturist/",
      label: "github.com/luisfuturist",
    },
    {
      title: "LinkedIn",
      href: "https://linkedin.com/in/luisfuturist/",
      label: "linkedin.com/in/luisfuturist",
    },
  ]
}

export function getCourses() {
  return [
    {
      title: t("Technology of Artificial Intelligence"),
      org: "FIAP",
      startTime: "2024",
      endTime: "2026",
    },
    {
      title: t("Programming Logic with JavaScript"),
      org: "SENAI/SC",
      startTime: "2022",
      endTime: "2022",
    },
    {
      title: t("Programming Front-end Basics"),
      org: "SENAI/SC",
      startTime: "2022",
      endTime: "2022",
    },
    {
      title: t("Programming Back-end Basics"),
      org: "SENAI/SC",
      startTime: "2022",
      endTime: "2022",
    },
    {
      title: t("Cloud Computing"),
      org: "SENAI/SC",
      startTime: "2022",
      endTime: "2022",
    },
    {
      title: t("User Experience - Digital Interfaces"),
      org: "SENAI/SC",
      startTime: "2022",
      endTime: "2022",
    },
    {
      title: t("Technical English Notions"),
      org: "SENAI/SC",
      startTime: "2022",
      endTime: "2022",
    },
  ];
}

export function getOrganizations() {
  return [
    {
      title: "NeoGaia Lab",
      role: t("Software Developer"),
      dateRange: t("Mar 2022 - Present"),
      text: t(
        "Laboratory for exploring new ideas, experiments and possible solutions in software development.",
      ),
      skills: "Node.js, JavaScript, Vue, React, TypeScript, Git, HTML, CSS, ...".split(", "),
      link: "https://github.com/neogaialab",
    },
  ];
}

export function getExperience() {
  return [
    {
      title: t("With - Aulas de Inglês"),
      link: "https://with.luisfuturist.com",
      role: t("Full Stack Developer & Teaching - Self-employed"),
      dateRange: t("Sep 2023 - Present"),
      text: t(
        "An intuitive website to promote my online English teaching for adults, incorporating key features such as pricing details, contact information and more.",
      ),
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
      link: "https://bee-six.com/",
      role: t("Full Stack Developer - Full-time"),
      dateRange: t("Feb 2023 - Jun 2023"),
      text: t("Providing software development services such as bug fixes, code refactoring and new feature implementation, including creation of a user account page and a module for editing and PDF generation."),
      skills: "React.js, HTML, styled-components, Git, Node.js, Express, ...".split(", "),
    },
  ];
}

export function getProjects() {
  return [
    {
      title: t("Strigi - CLI command assistant powered by GenAI"),
      role: t("Software Developer"),
      dateRange: t("Apr 2024 - Present"),
      text: t(
        "An experimental CLI tool leveraging GenAI to generate and explain commands based on natural language prompts.",
      ),
      skills:
        "TypeScript, Bun, Node.js, Gemini, Git, ...".split(", "),
      link: "https://neogaialab.github.io/strigi/overview/introduction.html",
    },
  ];
}
