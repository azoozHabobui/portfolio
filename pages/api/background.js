const background = [
    {
        eduCards: [
            {
                id: 0,
                title: 'Bachelors Degree',
                degree: 'IT Technologies – Information Systems Development (DSI)',
                detail: 'Completed a 3-year Bachelors program in IT Technologies, specializing in Information Systems Development (DSI).',
                year: '2023-2025'
            },
            {
                id: 1,
                title: 'Baccalaureate',
                degree: 'Technique',
                detail: "Completed the Technical Baccalaureate with a focus on computer science and technology subjects.",
                year: '2021-2022'
            },
        ]
    },
    {
        expCards: [
            {
             id: 0,
             title: 'Zeenovi',
             role: 'Développeur Full Stack – Stagiaire PFE',
             url: 'https://zeenovi.com/',
             desc: "Conception et développement d’une plateforme sociale interne avec gestion des utilisateurs, contenus multimédias, chatbot et dashboard, en Angular, Spring Boot et MySQL.",
             year: 'Fév 2025 - Mai 2025',
             location: 'Tunis, Tunisie'
            },
             {
            id: 1,
            title: 'Tunisie Telecom',
            role: 'Support Technique – Stagiaire',
            url: 'https://www.tunisietelecom.tn/',
            desc: 'Observation et interventions techniques au sein du service de support technique.',
            year: 'Jan 2023 - Feb 2023',
            location: 'Béja, Tunisie'
            },
            {
             id: 2,
             title: 'Banque BIAT',
             role: 'Support Technique – Stagiaire',
             url: 'https://www.biat.com.tn/',
             desc: 'Participation à des tâches de maintenance et de support technique dans une agence bancaire.',
             year: 'Jan 2024 - Feb 2024',
             location: 'Béja, Tunisie'
  },

        ]
    }
]


export default function handler(req, res) {
    res.status(200).json(background)
}
