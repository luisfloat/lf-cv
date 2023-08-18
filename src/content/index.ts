import { formatPhone } from "../utils/format";
import { useParams } from "react-router-dom";

export const langsAvailable = ["en-us", "pt-br"] as const;

export type ILocale = typeof langsAvailable[number];

export const useContent = () => {
    const { locale } = useParams();

    function tl({ enUs, ptBr }) {
        if (locale === "en-us") return enUs;
        else if (locale === "pt-br") return ptBr;
        return "";
    }
    
    function f(enUs, ptBr) {
        return tl({ enUs, ptBr });
    }

    if(!langsAvailable.includes(locale as ILocale)) {
        return { content: null , locale };
    }

    const contact = {
        address: f("Santa Catarina, Brazil", "Santa Catarina, Brasil"),
        name: "Luís Fillipe Emidio",
        phone: "+5547999216685",
        email: f("contact@luisfloat.com", "contato@luisfloat.com"),
        github: "github.com/luisfloat",
        linkedin: "linkedin.com/in/luisfloat",
        website: "luisfloat.com",
    };

    const content = {
        head: {
            title: f("Luis Float CV (en-us)", "Luis Float CV (pt-br)"),
        },
        body: {
            nav: {
                print: f("Print", "Imprimir"),
            },
            contact,
            header: {
                title: "Luis Float",
                description: f("Web Developer", "Desenvolvedor Web"),
            },
            footer: {
                links: {
                    "E-mail": { value: contact.email, href: `mailto:${contact.email}` },
                    "GitHub": { value: "github.com/luisfloat", href: "https://github.com/luisfloat" },
                    "Website": { value: contact.website, href: `https://${contact.website}` },
                },
                generation: {
                    text: f("Generated on ", "Gerado em "),
                    timeFormat: f("MMMM Do, YYYY hh:mm:ss a", "MM/DD/YYYY HH:mm:ss"),
                },
            },
            details: {
                title: f("Personal Info", "Dados Pessoais"),
                links: [
                    { type: "data", label: contact.address },
                    { type: "data", label: contact.name },
                    { type: "phone", domain: contact.phone, label: formatPhone(contact.phone) },
                    { type: "email", domain: contact.email, label: contact.email },
                    { type: "website", domain: contact.linkedin, label: contact.linkedin },
                    { type: "website", domain: contact.website, label: contact.website },
                ],
            },
            skills: {
                title: f("Skills", "Habilidades"),
                hard1: ["JavaScript", "React", "React Hooks", "Context API", "HTTP", "TypeScript", "HTML", "CSS", "Bootstrap", "Vite", "Sass", "Git", "GitHub", "Node.js"],
                hard2: tl({
                    enUs: ["Programming Logic", "Agile Methodologies", "Responsive Design", "Consumption of APIs", "Design Patterns"],
                    ptBr: ["Lógica de Programação", "Metodologias Ágeis", "Design Responsivo", "Consumo de APIs", "Design Patterns"],
                }),
                soft1: tl({
                    enUs: ["Problem solving", "Adaptability", "Creativity", "Speed learning"],
                    ptBr: ["Resolução de problemas", "Adaptabilidade", "Criatividade", "Aprendizagem rápida"],
                }),
                soft2: tl({
                    enUs: ["English Intermediate", "Native Portuguese"],
                    ptBr: ["Inglês Intermediário", "Português Nativo"]
                }),
            },
            education: {
                title: f("Education", "Educação"),
                items: [
                    { title: f("Programming Logic with JavaScript", "Lógica de Programação com JavaScript"), org: "SENAI/SC", startTime: "2022", endTime: "2022" },
                    { title: f("Programming Front-end Basics", "Programação Básica em Front-End"), org: "SENAI/SC", startTime: "2022", endTime: "2022" },
                    { title: f("Programming Back-end Basics", "Programação Básica em Back-End"), org: "SENAI/SC", startTime: "2022", endTime: "2022" },
                    { title: f("Cloud Computing", "Computação em Nuvem"), org: "SENAI/SC", startTime: "2022", endTime: "2022" },
                    { title: f("User Experience - Digital Interfaces", "User Experience - Interfaces Digitais"), org: "SENAI/SC", startTime: "2022", endTime: "2022" },
                    { title: f("Technical English Notions", "Noções de Inglês Técnico"), org: "SENAI/SC", startTime: "2022", endTime: "2022" },
                ],
            },
            organizations: {
                title: f("Organizations", "Organizações"),
                items: [
                    {
                        role: f("Software Developer", "Desenvolvedor de Software"),
                        name: "Inforg",
                        date: f("Mar 2022 - Present", "Mar 2022 - Present"),
                        link: "https://inforg.dev",
                        description: tl({
                            enUs: "Laboratory for exploring new ideas, experiments and possible solutions in software development.",
                            ptBr: "Laboratório para exploração de novas ideias, experimentos e possíveis soluções em desenvolvimento de software.",
                        }),
                        skills: "Node.js · JavaScript · Vue · TS · Git · HTML · CSS · ...",
                    },
                ]
            },
            interests: {
                title: f("Interests", "Interesses"),
                headline: tl({
                    enUs: ["Game Development", "Sci-fi", "Philosophy" ],
                    ptBr: ["Desenvolvimento de Jogos", "Ficção Científica", "Filosofia"],
                }),
            },
            about: {
                title: f("About", "Sobre"),
                text: tl({
                    enUs: "I'm a self-taught web developer proficient in the JavaScript ecosystem. I have a genuine passion for continuous learning and staying up to date with the latest technology. In addition, I have a deep fascination with the future and the infinite possibilities for innovation it brings.",
                    ptBr: "Sou um desenvolvedor web autodidata proficiente no ecossistema JavaScript. Tenho uma paixão genuína pelo aprendizado contínuo e por me manter atualizado com as tecnologias mais recentes. Além disso, tenho um profundo fascínio pelo futuro e pelas infinitas possibilidades de inovação que ele traz."
                }),
            },
            experience: {
                title: f("Experience", "Experiência"),
                items: [
                    {
                        role: f("Software Developer", "Desenvolvedor de Software"),
                        company: "BeeSix Soluções",
                        employmentType: "Full-time",
                        date: f("Feb 2023 - Jun 2023", "Fev 2023 - Jun 2023"),
                        link: "https://www.beesix.com.br/",
                        description: tl({
                            enUs: "Providing software development services such as bug fixes, code refactoring and new feature implementation, including creation of a user account page and a module for editing and PDF generation.",
                            ptBr: "Fornecimento serviços de desenvolvimento de software, como correções de bugs, refatoração de código e implementação de novas funcionalidades, incluindo criação de uma página de conta de usuário e um módulo para edição e geração de PDF.",
                        }),
                        skills: "JavaScript · Git · React · HTML · styled-components · Node.js · Express · ...",
                    },
                    {
                        role: f("Web Developer", "Desenvolvedor Web"),
                        company: "Luis Float",
                        employmentType: "Freelance",
                        date: f("Jan 2021 - Present", "Jan 2021 - Presente"),
                        link: "https://luisfloat.com",
                        description: tl({
                            enUs: "Installation, maintenance, configuration and creation of websites such as landing page and/or e-commerce.",
                            ptBr: "Instalação, manutenção, configuração e criação de sites como landing page e/ou e-commerce.",
                        }),
                        skills: "JavaScript · React · Node.js · Express · WordPress · HTML · CSS · MySQL · Vite · ...",
                    },
                ],
            },
            projects: {
                title: f("Projects", "Projetos"),
                items: [],
            },
        },
    };

    return { locale, content };
};