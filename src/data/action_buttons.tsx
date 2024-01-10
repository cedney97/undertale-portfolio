import { ActionButtonData } from "./types";

import homeIcon from '../assets/images/home.png'
import aboutIcon from '../assets/images/about.png'
import projectsIcon from '../assets/images/projects.png'
import contactIcon from '../assets/images/contact.png'

import HomeConsole from "../components/consoleDisplays/HomeConsole";
import AboutConsole from "../components/consoleDisplays/AboutConsole";
import ProjectsConsole from "../components/consoleDisplays/ProjectsConsole";
import ContactConsole from "../components/consoleDisplays/ContactConsole";

export const action_buttons: ActionButtonData[] = [
    {
        title: "HOME",
        icon: homeIcon,
        console: <HomeConsole />,
        dialogueText: `Use WASD to move, Z to select, and X to go back. Or use your mouse :)`
    },
    {
        title: "ABOUT",
        icon: aboutIcon,
        console: <AboutConsole />
    },
    {
        title: "PROJECTS",
        icon: projectsIcon,
        console: <ProjectsConsole />
    },
    {
        title: "CONTACT",
        icon: contactIcon,
        console: <ContactConsole />
    }
]