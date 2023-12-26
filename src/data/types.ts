export type ActionButtonData = {
    title: string
    icon: string
    console: React.ReactNode
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