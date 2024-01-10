export type ActionButtonData = {
    title: string
    icon: string
    console: React.ReactNode
    dialogueText?: string
}

export type ProjectData = {
    title: string
    description: string
    link: string
    technologies: string[]
}

export type ProjectDataPage = {
    projects: ProjectData[]
    page: number
}

export type ConsoleChoiceData = {
    title: string
    description: string
}