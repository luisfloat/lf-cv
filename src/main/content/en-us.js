const { xp } = require("./src/main/content/factory.js");

module.exports = {
    head: {
        title: "Luis Float CV (en-us)",
    },
    body: {
        header: {
            title: "Luis Float",
            description: "Web Developer",
        },
        details: "Details",
        contact: {
            address: "Santa Catarina, Brazil",
            name: "Luís Fillipe Emidio",
            phone: "+5547999216685",
            email: "contact@luisfloat.com",
            github: "github.com/luisfloat",
        },
        skills: {
            title: "Skills",
            sep: " | ",
            hard1: [ "JavaScript", "Node.js", "TypeScript", "HTML", "CSS", "Vue.js", "Responsive Design", "Web Optimization", "Git", "Linux Basics" ],
            hard2: [ "Computer Science Basics", "Design Pattern Basics" ],
            soft1: [ "Problem solving", "Communication", "Adaptability", "Creativity", "Speed learning" ],
            soft2: [ "English", "Portuguese" ],
        },
        edu: {
            title: "Education",
            heading: {
                name: "Autodidact",
                desc: " — Resources online",
            },
            headline: [ "Guides", "Articles", "Forums", "Videos", "Books", "Docs" ],
        },
        hobby: {
            title: "Hobby",
            headline: [ "Technology", "Scifi Art", "Linguistics", "Philosophy" ],
        },
        about: {
            title: "About",
            content: "Professional and enthusiastic student with experience in Software Development — first contact with programming years ago with Java, later freelancer as a Web Developer — currently migrating to JavaScript and TypeScript, interested in Web Development, autodidactism and in several personal projects to facilitate development in the area.",
        },
        experience: {
            title: "Experience",
            items: [
                xp("Software Engineer", "Inforg Dev", "Self-employed", "Mar 2022 - Present", "https://inforg.dev", "Engineering experimental software to help other software developers, both systems and applications.", "Node.js | JavaScript | Git | HTML | CSS"),

                xp("Web Developer", "Luis Float", "Freelance", "Jan 2021 - Present", "https://luisfloat.com", "Installation, maintenance, configuration and creation of websites such as landing page and/or e-commerce.", "HTML | CSS | MySQL | WordPress"),
                
                xp("Software Developer", "Luis Float (me)", "Self-employed", "Jan 2020 - Present", "https://luisfloat.com", "Development of personal projects, such as my curriculum generator, my readme, my portfolio, etc.", "Node.js | JavaScript | Grunt | Git | HTML | CSS"),
            ],
        },
    },
};
