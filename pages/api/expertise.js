const expertise = [
    {
        id: 0,
        title: 'Full Stack Development',
        desc: "Skilled in developing complete web applications using Angular for frontend and Spring Boot for backend. Experienced in integrating RESTful APIs, managing relational (MySQL) and NoSQL (MongoDB) databases, and applying clean architecture principles.",
    },
    {
        id: 1,
        title: 'Agile & UML Modeling',
        desc: "Proficient in Agile methodologies including Scrum. Familiar with UML modeling using tools like StarUML to design and structure complex information systems before development.",
    },
    {
        id: 2,
        title: 'UI/UX Design & Prototyping',
        desc: "Hands-on experience in UI/UX design using Figma and Adobe XD. Able to transform business needs into intuitive user interfaces, gained through academic projects and real use cases.",
    },
    {
        id: 3,
        title: 'Version Control & Collaboration',
        desc: "Strong command of Git and GitHub for version control, issue tracking, and team collaboration. Regularly use Git in both personal and team projects, ensuring code consistency and continuous integration.",
    },
    {
        id: 4,
        title: 'API Integration & Testing',
        desc: "Experienced in integrating and testing APIs using tools like Postman. Able to design, consume, and debug RESTful services efficiently within full stack applications.",
    }
]
export default function handler(req, res) {
    res.status(200).json(expertise)
}
