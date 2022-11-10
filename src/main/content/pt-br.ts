import { xp } from "./factory.ts";

export default {
    head: {
        title: "Luis Float CV (pt-br)",
    },
    body: {
        header: {
            title: "Luis Float",
            description: "Desenvolvedor Web",
        },
        details: "Detalhes",
        contact: {
            address: "Santa Catarina, Brasil",
            name: "Luís Fillipe Emidio",
            phone: "+5547999216685",
            email: "contato@luisfloat.com",
            github: "github.com/luisfloat",
            linkedin: "linkedin.com/in/luisfloat",
        },
        skills: {
            title: "Habilidades",
            sep: " | ",
            hard1: [ "JavaScript HTML CSS", "Node.js", "TypeScript", "Bootstrap", "SCSS", "Git", "HTTP(S)", "Vue", "React", "Vite", "Linux" ],
            hard2: [ "Agile", "Web App Audit", "REST", "Design Patterns" ],
            soft1: [ "Resolução de problemas", "Comunicação", "Adaptabilidade", "Criatividade", "Aprendizagem rápida" ],
            soft2: [ "Inglês", "Português" ],
        },
        edu: {
            title: "Educação",
            items: [
                "- Lógica de Programação com JavaScript, SENAI/SC, EAD, 2022/2022",
                "- Programação Básica em Front-End, SENAI/SC, EAD, 2022/2022",
                "- Programação Básica em Back-End, SENAI/SC, EAD, 2022/2022",
                "- Computação em Nuvem, SENAI/SC, EAD, 2022/2022",
                "- User Experience - Interfaces Digitais, SENAI/SC, EAD, 2022/2022",
            ],
            footerText: "- Desenvolvimento de Software, recursos gratuitos online",
        },
        hobby: {
            title: "Interesses",
            headline: [ "Tecnologia", "Scifi", "Linguística", "Filosofia" ],
        },
        about: {
            title: "Sobre",
            text: "Sou um Desenvolvedor Web com proficiência em bibliotecas, frameworks e práticas modernas. Tendo a capacidade de aprender rapidamente e sendo autodidata, mantenho-me sempre atualizado com as mais recentes tecnologias. Além disso, tenho a habilidade de me organizar individualmente e também em equipe para solucionar os mais diversos problemas.",
        },
        experience: {
            title: "Experiência",
            items: [
                xp("Engenheiro de Software", "Inforg Dev", "Autônomo", "Mar 2022 - Presente", "https://inforg.dev", "Fazendo softwares experimentais para ajudar outros desenvolvedores de software, tanto de sistemas quanto de aplicações, desenvolvendo bibliotecas, utilitários e mais.", "Node.js | JavaScript | Git | HTML | CSS | ..."),

                xp("Desenvolvedor Web", "Luis Float", "Freelance", "Jan 2021 - Presente", "https://luisfloat.com", "Instalação, manutenção, configuração e criação de sites como landing page e/ou e-commerce.", "HTML | CSS | MySQL | WordPress | Woo | ..."),
                
                xp("Desenvolvedor de Software", "Luis Float (me)", "Autônomo", "Jan 2020 - Presente", "https://luisfloat.com", "Desenvolvimento de projetos pessoais, como meu gerador de currículo, meu readme, meu portfólio, etc.", "Node.js | JavaScript | Git | HTML | CSS | ..."),
            ],
        },
    },
};