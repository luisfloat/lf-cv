import { formatPhone } from "../helpers/formatPhone";
import { SimpleContentType } from "./types";

export { f } from "./factory.ts";
export const langsAvailable = [ "enUs", "ptBr" ];

export const content: SimpleContentType = (tl, f, lang) => {
    const contact = {
        address: f("Santa Catarina, Brazil", "Santa Catarina, Brasil"),
        name: "Luís Fillipe Emidio",
        phone: "+5547999216685",
        email: f("contact@luisfloat.com", "contato@luisfloat.com"),
        github: "github.com/luisfloat",
        linkedin: "linkedin.com/in/luisfloat",
        website: "luisfloat.com",
    };

    return {
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
            title: f("Details", "Detalhes"),
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
            sep: " | ",
            hard1: [ "JavaScript HTML CSS", "Bootstrap", "Stylus/SCSS", "Git", "HTTP", "Vue/React", "TypeScript", "Node.js", "Express", "MongoDB", "Linux" ],
            hard2: [ "Agile", "Web App Audit", "REST", "Design Pattern" ],
            soft1: tl({
                enUs: [ "Problem solving", "Communication", "Adaptability", "Creativity", "Speed learning" ],
                ptBr: [ "Resolução de problemas", "Comunicação", "Adaptabilidade", "Criatividade", "Aprendizagem rápida" ],
            }),
            soft2: tl({
                enUs: [ "English B2+", "Portuguese N" ],
                ptBr: [ "Inglês B2+", "Português N" ]
            }),
        },
        edu: {
            title: f("Education", "Educação"),
            items: tl({
                enUs: [
                    "- Programming Logic with JavaScript, SENAI/SC, ODL, 2022/2022",
                    "- Programming Front-end Basics, SENAI/SC, ODL, 2022/2022",
                    "- Programming Back-end Basics, SENAI/SC, ODL, 2022/2022",
                    "- Cloud Computing, SENAI/SC, ODL, 2022/2022",
                    "- User Experience - Digital Interfaces, SENAI/SC, ODL, 2022/2022",
                    "- Technical English Notions, SENAI/SC, ODL, 2022/2022"
                ],
                ptBr: [
                    "- Lógica de Programação com JavaScript, SENAI/SC, EAD, 2022/2022",
                    "- Programação Básica em Front-End, SENAI/SC, EAD, 2022/2022",
                    "- Programação Básica em Back-End, SENAI/SC, EAD, 2022/2022",
                    "- Computação em Nuvem, SENAI/SC, EAD, 2022/2022",
                    "- User Experience - Interfaces Digitais, SENAI/SC, EAD, 2022/2022",
                    "- Noções de Inglês Técnico, SENAI/SC, EAD, 2022/2022",
                ],
            }),
            footerText: tl({
                enUs: "- Software development, free online resources",
                ptBr: "- Desenvolvimento de Software, recursos gratuitos online",
            }),
        },
        hobby: {
            title: f("Interests", "Interesses"),
            headline: tl({
                enUs: [ "Technology", "Scifi", "Linguistics", "Philosophy" ],
                ptBr: [ "Tecnologia", "Scifi", "Linguística", "Filosofia" ],
            }),
        },
        about: {
            title: f("About", "Sobre"),
            text: tl({
                enUs: "I am a full stack web developer with proficiency in the JavaScript ecosystem. Having the ability to learn quickly and being self-taught, I always keep up to date with the latest technologies. In addition, I have the ability to organize myself individually and also as a team to solve the most diverse problems.",
                ptBr: "Sou um desenvolvedor web full stack com proficiência no ecosistema JavaScript. Tendo a capacidade de aprender rapidamente e sendo autodidata, mantenho-me sempre atualizado com as mais recentes tecnologias. Além disso, tenho a habilidade de me organizar individualmente e também em equipe para solucionar os mais diversos problemas."
            }),
        },
        experience: {
            title: f("Experience", "Experiência"),
            items: [
                {
                    role: f("Software Engineer", "Engenheiro de Software"),
                    company: "Inforg Dev",
                    employmentType: f("Self-employed", "Autônomo"),
                    date: f("Mar 2022 - Present", "Mar 2022 - Presente"),
                    link: "https://inforg.dev",
                    description: tl({
                        enUs: "Engineering experimental software to help other software developers, both systems and applications.",
                        ptBr: "Fazendo softwares experimentais para ajudar outros desenvolvedores de software, tanto de sistemas quanto de aplicações, desenvolvendo bibliotecas, utilitários e mais.",
                    }),
                    skills: "Node.js | JavaScript | Git | HTML | CSS | ...",
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
                    skills: "HTML | CSS | MySQL | WordPress | Woo | ...",
                },
                {
                    role: f("Software Developer", "Desenvolvedor de Software"),
                    company: f("Luis Float (me)", "Luis Float (me)"),
                    employmentType: f("Self-employed", "Autônomo"),
                    date: f("Jan 2020 - Present", "Jan 2020 - Presente"),
                    link: "https://luisfloat.com",
                    description: tl({
                        enUs: "Development of personal projects, such as my curriculum generator, my readme, my portfolio, etc.",
                        ptBr: "Desenvolvimento de projetos pessoais, como meu gerador de currículo, meu readme, meu portfólio, etc.",
                    }),
                    skills: "Vue | React | Bootstrap | Nest.js | Git | ...",
                },
            ],
        },
    },
    };
};