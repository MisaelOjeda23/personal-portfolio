interface Tags {
    name: string,
    svg: string,
}

interface Projects {
    title: string,
    description: string,
    img: string,
    link: string,
    tags: Tags[]
}

export const projects: Projects[] = [
    {
        title: 'Delicias Web App',
        description: 'Del negocio Delicias Cancún. Una aplicación web capaz de realizar cotizaciones, ordenar banquetes y realizar reservaciones.',
        img: 'delicias.png',
        link: 'https://deliciasapp.netlify.app/',
        tags: [
            { name: 'React', svg: 'svg/react.svg' },
            { name: 'TailwindCSS', svg: 'svg/tailwindcss.svg' },
            { name: '.Net', svg: 'svg/dotnet.svg' },
            { name: 'Typescript', svg: 'svg/typescript.svg' },
            { name: 'Mercado Pago', svg: 'svg/mercado-libre.svg' },
            { name: 'SQL', svg: 'svg/microsoftsqlserver.svg' },
        ]
    },
    {
        title: 'Health Helper',
        description: 'Gestiona tus medicamentos y tratamientos médicos, con la opción de crear recordatorios que te ayuden a seguir tu tratamiento. Explora blogs de doctores y conoce sobre temas de salud.',
        img: 'health.png',
        link: '',
        tags: [
            { name: 'React Native', svg: 'svg/react.svg' },
            { name: 'Nativewind', svg: 'svg/tailwindcss.svg' },
            { name: 'Node/ExpressJS', svg: 'svg/nodejs.svg' },
            { name: 'Typescript', svg: 'svg/typescript.svg' },
            { name: 'Firebase', svg: 'svg/firebase.svg' },
            { name: 'MongoDB', svg: 'svg/mongodb.svg' },
        ]
    },
    {
        title: 'Tasky',
        description: 'Proyecto escolar que nos ayuda a gestionar las tareas, asignando grupos de trabajo y tareas a los alumnos.',
        img: 'tasky.avif',
        link: '',
        tags: [
            { name: 'Vue', svg: 'svg/vue.svg' },
            { name: 'TailwindCSS', svg: 'svg/tailwindcss.svg' },
            { name: 'NestJS', svg: 'svg/nestjs.svg' },
            { name: 'Typescript', svg: 'svg/typescript.svg' },
            { name: 'MongoDB', svg: 'svg/mongodb.svg' },
        ]
    },
    {
        title: 'Zonas Arqueológicas',
        description: 'Explora algunas de las zonas arqueológicas de la Peninsula de Yucatán, conoce un poco de su historia y costos.',
        img: 'zonas.png',
        link: 'https://zonasarqueologicasar.netlify.app/',
        tags: [
            { name: 'HTML', svg: 'svg/html.svg' },
            { name: 'Bootstrap', svg: 'svg/bootstrap.svg' },
        ]
    },
    {
        title: 'Quiz',
        description: 'Retate a ti mismo para probar cuanto sabes de Historia, Programación, Cine, Arte y otras categorias, ¡será divertido!',
        img: 'quiz.png',
        link: 'https://mishadevquiz.netlify.app/',
        tags: [
            { name: 'HTML', svg: 'svg/html.svg' },
            { name: 'Bootstrap', svg: 'svg/bootstrap.svg' },
            { name: 'JavaScript', svg: 'svg/javascript.svg' },
        ]
    },
]