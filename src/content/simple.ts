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
            hard1: [ "JavaScript", "React", "React Hooks", "Context API", "Vue", "HTTP", "TypeScript", "HTML", "CSS", "Bootstrap", "Vite", "Stylus", "Sass", "Git", "GitHub", "Node.js" ],
            hard2: tl({
                enUs: [ "Programming Logic", "Agile Methodologies", "Responsive Design", "Consumption of RESTful APIs", "Design Patterns" ],
                ptBr: [ "Lógica de Programação", "Metodologias Ágeis", "Design Responsivo", "Consumo de RESTful APIs", "Design Patterns" ],
            }),
            soft1: tl({
                enUs: [ "Problem solving", "Communication", "Adaptability", "Creativity", "Speed learning" ],
                ptBr: [ "Resolução de problemas", "Comunicação", "Adaptabilidade", "Criatividade", "Aprendizagem rápida" ],
            }),
            soft2: tl({
                enUs: [ "English B2+", "Portuguese" ],
                ptBr: [ "Inglês B2+", "Português" ]
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
                enUs: [ "Future", "Scifi", "Linguistics", "Philosophy" ],
                ptBr: [ "Futuro", "Scifi", "Linguística", "Filosofia" ],
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
                    date: "Fev 2023 - Jun 2023",
                    link: "https://www.beesix.com.br/",
                    description: tl({
                        enUs: "Providing software development services such as bug fixes, code refactoring and new feature implementation, including creation of a user account page and a module for editing and PDF generation.",
                        ptBr: "Fornecimento serviços de desenvolvimento de software, como correções de bugs, refatoração de código e implementação de novas funcionalidades, incluindo criação de uma página de conta de usuário e um módulo para edição e geração de PDF.",
                    }),
                    skills: "JavaScript | Git | React | HTML | styled-components | Node.js | Express | ...",
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
                    skills: "JavaScript | React | Node.js | Express | WordPress | HTML | CSS | MySQL | Vite | ...",
                },
                {
                    role: f("Software Developer", "Desenvolvedor de Software"),
                    company: "Inforg",
                    employmentType: f("Self-employed", "Autônomo"),
                    date: f("Mar 2022 - Feb 2023", "Mar 2022 - Fev 2023"),
                    link: "https://inforg.dev",
                    description: tl({
                        enUs: "Engineering experimental software to help other software developers, both systems and applications.",
                        ptBr: "Desenvolvendo ideias, experimentos e possíveis soluções no desenvolvimento de software, incluindo bibliotecas, utilitários e muito mais.",
                    }),
                    skills: "Node.js | JavaScript | Git | HTML | CSS | ...",
                },
                {
                    role: f("Software Developer", "Desenvolvedor de Software"),
                    company: f("Luis Float (me)", "Luis Float (me)"),
                    employmentType: f("Self-employed", "Autônomo"),
                    date: f("Jan 2020 - Present", "Jan 2020 - Presente"),
                    link: "https://luisfloat.com",
                    description: tl({
                        enUs: "Development of personal projects, such as website, curriculum generator, portfolio, and more.",
                        ptBr: "Desenvolvimento de projetos pessoais, como site, gerador de currículo, portfólio, entre outros.",
                    }),
                    skills: "JavaScript | Vue | React | Bootstrap | Nest.js | Git | ...",
                },
            ],
        },
    },
    };
};