const { xp } = require("./src/main/content/factory.js");

module.exports = {
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
        },
        skills: {
            title: "Habilidades",
            sep: " | ",
            hard1: [ "JavaScript", "Node.js", "TypeScript", "HTML", "CSS", "Vue.js", "Design Responsivo", "Otimização de Website", "Git", "Básico de Linux" ],
            hard2: [ "Básico de Ciência da Computação", "Básico de Design Pattern" ],
            soft1: [ "Resolução de problemas", "Comunicação", "Adaptabilidade", "Criatividade", "Aprendizagem rápida" ],
            soft2: [ "Inglês", "Português" ],
        },
        edu: {
            title: "Educação",
            heading: {
                name: "Autodidata",
                desc: " — Recursos online",
            },
            headline: [ "Guias", "Artigos", "Fóruns", "Videos", "Livros", "Docs" ],
        },
        hobby: {
            title: "Hobby",
            headline: [ "Tecnologia", "Arte Scifi", "Linguística", "Filosofia" ],
        },
        about: {
            title: "Sobre",
            content: "Estudante profissional e entusiasta com experiência em Desenvolvimento de Software — primeiro contato com programação anos atrás com Java, posteriormente freelancer como Desenvolvedor Web — atualmente migrando para JavaScript e interessado em Desenvolvimento Web, autodidatismo e em diversos projetos pessoais para facilitar o desenvolvimento na área.",
        },
        experience: {
            title: "Experiência",
            items: [
                xp("Engenheiro de Software", "Inforg Dev", "Autônomo", "Mar 2022 - Presente", "https://inforg.dev", "Fazendo softwares experimentais para ajudar outros desenvolvedores de software, tanto de sistemas quanto de aplicações, desenvolvendo bibliotecas, utilitários e mais.", "Node.js | JavaScript | Git | HTML | CSS"),

                xp("Desenvolvedor Web", "Luis Float", "Freelance", "Jan 2021 - Presente", "https://luisfloat.com", "Instalação, manutenção, configuração e criação de sites como landing page e/ou e-commerce.", "HTML | CSS | MySQL | WordPress"),
                
                xp("Desenvolvedor de Software", "Luis Float (me)", "Autônomo", "Jan 2020 - Presente", "https://luisfloat.com", "Desenvolvimento de projetos pessoais, como meu gerador de currículo, meu readme, meu portfólio, etc.", "Node.js | JavaScript | Grunt | Git | HTML | CSS"),
            ],
        },
    },
};
