const portfolio = [
    {
        id: 0,
        projectName: "Shift UP",
        url: "https://github.com/azoozHabobui/SHiftUp",
        image: "projects/Shift.png",
        projectDetail: "Design and development of a social platform for companies, aiming to improve internal communication. The platform features user and profile management, multimedia content sharing, chatbot integration, and a professional dashboard for real-time monitoring of activities and interactions. It also includes API integration, MySQL Workbench database management, and full-stack development using Angular and Spring Boot.",
        technologiesUsed: [
            {
                tech: "Angular"
            },
            {
                tech: "Bootstrap"
            },
            {
                tech: "Spring Boot"
            },
            {
                tech: "MySQL Workbench"
            },
            {
                tech: "REST API"
            },
        ]
    },

    {
    id: 0,
    projectName: "Easy Mall",
    url: "https://github.com/azoozHabobui/EsayMall",
    image: "projects/EasyMall.png",
    projectDetail: "Development of an e-commerce platform focused on selling iPhones online. The platform allows users to browse products, manage their accounts, and complete secure purchases. It features a product catalog, shopping cart, order management, and responsive design. Built using Angular for the frontend and Spring Boot for the backend, with a MySQL database and Bootstrap for UI components.",
    technologiesUsed: [
        {
            tech: "Angular"
        },
        {
            tech: "Bootstrap"
        },
        {
            tech: "Spring Boot"
        },
        {
            tech: "MySQL"
        }
    ]
}

    
]
export default function handler(req, res) {
    res.status(200).json(portfolio)
}
