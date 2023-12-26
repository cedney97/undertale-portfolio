import { ProjectDataPage } from "./types";

const projectData: ProjectDataPage[] = [
    {
        projects: [
            {
                title: "DBD Budget Randomizer",
                description: "A randomizer for the game Dead by Daylight that allows you to randomize your killer and survivor builds.",
                link: "https://cse204-2023.github.io/10-final-project-cedney97/",
                technologies: ["React", "TypeScript", "CSS", "HTML", "Firebase"]
            },
            {
                title: "Poetic Soundscape",
                description: "Create poems by mix-and-matching lines from others, while generating a unique soundscape based on them!",
                link: "https://github.com/cs330-fall-2023/creative-project-m7-486582",
                technologies: ["React", "TypeScript", "CSS", "HTML", "MongoDB"]
            },
            {
                title: "Rhyme Scheme Calculator",
                description: "My computational linguistics project that takes in a poem and outputs its rhyme scheme in letter form.",
                link: "https://github.com/cedney97/rhyme_scheme_detector",
                technologies: ["Python", "Jupyter Notebook"]
            }
        ],
        page: 0
    },
    {
        projects: [
            {
                title: "Frontier Camp Activity Assignments",
                description: "An algorithmic approach for assigning campers to activity periods at Frontier Camp.",
                link: "https://github.com/cedney97/CamperAssignments",
                technologies: ["Java", "Java Swing (GUI)"]
            },
            {
                title: "Frontier Camp Videos",
                description: "My video editing work for Frontier Camp. Check out Weeks 1, 5 - 8, Timothy, Midsouth, Angel Tree, and Summer Staff videos of 2022!",
                link: "https://vimeo.com/frontiercamp?embedded=true&source=owner_name&owner=28364185",
                technologies: ["Adobe Lightroom", "Final Cut Pro"]
            },
            {
                title: "EDUrain",
                description: "Internship of Summer 2023, an off-campus housing platform that I maintained and redesigned.",
                link: "https://edurain.org",
                technologies: ["React", "TypeScript", "HTML", "CSS", "Firebase"]
            }
        ],
        page: 1
    }
]

export { projectData }