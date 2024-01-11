import { ConsoleChoiceData } from "./types";

export const about_choices: ConsoleChoiceData[] = [
    {
        title: "Student",
        dialogue: "I'm a student at Washington University in St. Louis, majoring in Computer Science and minors in Music and Linguistics."
    },
    {
        title: "Programmer",
        dialogue: "I have experience in Front- and Back-End Development, Mobile App Development, as well as other Object-Oriented and Functional programming languages."
    },
    {
        title: "Musician",
        dialogue: "I have passions in piano, guitar, and songwriting, which has been cultivated by being an acappella music director and pit director!"
    }
]

export const projects_choices: ConsoleChoiceData[][] = [
    // Page 1
    [
        {
            title: "DBD Budget Randomizer",
            dialogue: "A perk randomizer for the game Dead By Daylight, but for those who don't want to spend all their money on the game (like me)!",
            link: "https://cse204-2023.github.io/10-final-project-cedney97/",
            repo: "https://github.com/cse204-2023/10-final-project-cedney97",
            technologies: ["React", "TypeScript", "CSS", "HTML", "Firebase"]
        },
        {
            title: "Poetic Soundscape",
            dialogue: "A mix-and-match poem creator, paired with musical compositions that play as you add more lines!",
            repo: "https://github.com/cs330-fall-2023/creative-project-m7-486582",
            technologies: ["React", "TypeScript", "CSS", "HTML", "MongoDB"]
        },
        {
            title: "Rhyme Scheme Calculator",
            dialogue: "A project in Computational Linguistics that finds the rhyme scheme of a given poem, using python linguistics libraries.",
            link: "https://github.com/cedney97/rhyme_scheme_detector",
            technologies: ["Python", "Jupyter Notebooks"]
        },
        {
            title: "Next Page",
            dialogue: undefined
        }
    ],
    // Page 2
    [
        {
            title: "Frontier Camp Activity Assignments",
            dialogue: "A summer project to algorithmically assign campers to activities, catered towards Frontier Camp.",
            link: "https://github.com/cedney97/CamperAssignments",
            technologies: ["Java", "Java Swing (GUI)"]
        },
        {
            title: "EDUrain",
            dialogue: "My Software Engineering internship experience, which included Front-End work with two site redesigns and multiple feature integrations.",
            link: "https://edurain.org",
            technologies: ["React", "TypeScript", "HTML", "CSS", "Firebase"]
        },
        {
            title: "Musical Canvas",
            dialogue: "My award-winning hackathon project, generating a piece of art based on a user-inputted song!",
            repo: "https://github.com/cedney97/musical-art",
            link: "https://cedney97.github.io/musical-art/",
            technologies: ["HTML", "CSS", "JavaScript"]
        },
        {
            title: "Previous Page",
            dialogue: undefined
        }
    ]
]