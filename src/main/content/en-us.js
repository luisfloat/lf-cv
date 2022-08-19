function xp(name, link, skills, content) {
    return {
        name: name,
        link: link,
        skills: skills,
        content: content,
    };
}

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
            hard1: [ "JavaScript", "NodeJS", "TypeScript", "HTML", "CSS", "VueJS", "Responsive Design", "Web Optimization", "Git", "Linux Basics" ],
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
                xp("OctopoJS, @inforgdev", "https://inforg.dev/octopo-js", " — NodeJS, JavaScript, RollupJS", "Current - CSS preprocessor language stringifier"),
                xp("CoralliaJS, @inforgdev", "https://github.com/inforgdev/corallia-js", " — NodeJS, JavaScript, RollupJS", "Current - Design system token stringifier"),
                xp("LuisFloat, @luisfloat", "https://github.com/luisfloat/luisfloat", " — NodeJS, PugJS, Pug, Markdown", "Current - Static personal README.md generator"),
                xp("SpongiaCSS, @inforgdev", "https://inforg.dev/spongia-css", " — JavaScript, Grunt, SCSS", "Current - Modern CSS resetter/normalizer"),
            ],
        },
    },
};
