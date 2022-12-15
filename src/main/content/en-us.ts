import { xp } from "./factory.ts";

export default {
    head: {
        title: "Luis Float CV (en-us)",
    },
    body: {
        header: {
            title: "Luis Float",
            description: "Web Developer",
        },
        footer: {
            links: {
                "E-mail": { value: "contact@luisfloat.com", href: "mailto:contact@luisfloat.com" },
                "GitHub": { value: "github.com/luisfloat", href: "https://github.com/luisfloat" },
                "WhatsApp": { value: "+5547999216685", href: "tel:+5547999216685" },
            },
            poweredBy: "Powered by Vue.js",
        },
        details: "Details",
        contact: {
            address: "Santa Catarina, Brazil",
            name: "Luís Fillipe Emidio",
            phone: "+5547999216685",
            email: "contact@luisfloat.com",
            github: "github.com/luisfloat",
            linkedin: "linkedin.com/in/luisfloat",
        },
        skills: {
            title: "Skills",
            sep: " | ",
            hard1: [ "JavaScript HTML CSS", "Bootstrap", "Stylus/SCSS", "Git", "HTTP", "Vue/React", "TypeScript", "Node.js", "Express", "MongoDB", "Linux" ],
            hard2: [ "Agile", "Web App Audit", "REST", "Design Pattern" ],
            soft1: [ "Problem solving", "Communication", "Adaptability", "Creativity", "Speed learning" ],
            soft2: [ "English B2+", "Portuguese N" ],
        },
        edu: {
            title: "Education",
            items: [
                "- Programming Logic with JavaScript, SENAI/SC, ODL, 2022/2022",
                "- Programming Front-end Basics, SENAI/SC, ODL, 2022/2022",
                "- Programming Back-end Basics, SENAI/SC, ODL, 2022/2022",
                "- Cloud Computing, SENAI/SC, ODL, 2022/2022",
                "- User Experience - Digital Interfaces, SENAI/SC, ODL, 2022/2022",
                "- Technical English Notions, SENAI/SC, ODL, 2022/2022",
            ],
            footerText: "- Software development, free online resources",
        },
        hobby: {
            title: "Interests",
            headline: [ "Technology", "Scifi", "Linguistics", "Philosophy" ],
        },
        about: {
            title: "About",
            text: "I am a full stack web developer with proficiency in the JavaScript ecosystem. Having the ability to learn quickly and being self-taught, I always keep up to date with the latest technologies. In addition, I have the ability to organize myself individually and also as a team to solve the most diverse problems.",
        },
        experience: {
            title: "Experience",
            items: [
                xp("Software Engineer", "Inforg Dev", "Self-employed", "Mar 2022 - Present", "https://inforg.dev", "Engineering experimental software to help other software developers, both systems and applications.", "Node.js | JavaScript | Git | HTML | CSS | ..."),
                xp("Web Developer", "Luis Float", "Freelance", "Jan 2021 - Present", "https://luisfloat.com", "Installation, maintenance, configuration and creation of websites such as landing page and/or e-commerce.", "HTML | CSS | MySQL | WordPress | Woo | ..."),
                xp("Software Developer", "Luis Float (me)", "Self-employed", "Jan 2020 - Present", "https://luisfloat.com", "Development of personal projects, such as my curriculum generator, my readme, my portfolio, etc.", "Vue | React | Bootstrap | Nest.js | Git | ..."),
            ],
        },
    },
};
