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
            dialogue: "A perk randomizer for the game Dead By Daylight, but for those who don't want to spend all their money on the game (like me)!"
        },
        {
            title: "Poetic Soundscape",
            dialogue: "A mix-and-match poem creator, paired with musical compositions that play as you add more lines!"
        },
        {
            title: "Rhyme Scheme Calculator",
            dialogue: "A project in Computational Linguistics that finds the rhyme scheme of a given poem, using python linguistics libraries."
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
            dialogue: "A summer project to algorithmically assign campers to activities, catered toward Frontier Camp."
        },
        {
            title: "EDUrain",
            dialogue: "My Front-End internship experience, which included to site redesigns and multiple feature integrations."
        },
        {
            title: "Musical Canvas",
            dialogue: "My award-winning hackathon project, generating a piece of art based on a user-inputted song!"
        },
        {
            title: "Previous Page",
            dialogue: undefined
        }
    ]
]