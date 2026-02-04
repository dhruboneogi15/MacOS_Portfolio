const navLinks = [
    {
        id: 1,
        name: "Projects",
        type: "finder",
    },
    {
        id: 3,
        name: "Contact",
        type: "contact",
    },
    {
        id: 4,
        name: "Resume",
        type: "resume",
    },
];

const navIcons = [
    {
        id: 1,
        img: "/icons/wifi.svg",
    },
    {
        id: 2,
        img: "/icons/search.svg",
    },
    {
        id: 3,
        img: "/icons/user.svg",
    },
    {
        id: 4,
        img: "/icons/mode.svg",
    },
];

const dockApps = [
    {
        id: "finder",
        name: "Portfolio", // was "Finder"
        icon: "finder.png",
        canOpen: true,
    },
    {
        id: "safari",
        name: "Competitive programming",
        icon: "safari.png",
        canOpen: true,
    },
    {
        id: "photos",
        name: "Gallery", // was "Photos"
        icon: "photos.png",
        canOpen: true,
    },
    {
        id: "contact",
        name: "Contact", // or "Get in touch"
        icon: "contact.png",
        canOpen: true,
    },
    {
        id: "terminal",
        name: "Skills", // was "Terminal"
        icon: "terminal.png",
        canOpen: true,
    },
    {
        id: "trash",
        name: "Archive", // was "Trash"
        icon: "trash.png",
        canOpen: false,
    },
];

const codingProfiles = [
    {
        id: 1,
        date: "Sep 24, 2023",
        title:
            "Codeforces profile",
        image: "/images/codeforces.png",
        link: "https://codeforces.com/profile/controlling_conflict#",
    },
    {
        id: 2,
        date: "Feb 19, 2022",
        title: "Leetcode profile",
        image: "/images/leetcode.png",
        link: "https://leetcode.com/u/dhruboneogi10/",
    },
    {
        id: 3,
        date: "Jan 3, 2026",
        title: "Atcoder profile",
        image: "/images/atcoder.png",
        link: "https://atcoder.jp/users/GrindForMaster",
    },
];

const techStack = [
    {
        category: "Frontend",
        items: ["React.js", "HTML", "Javascript"],
    },
    {
        category: "Programming Languages",
        items: ["C", "C++", "Python"],
    },
    {
        category: "Styling",
        items: ["Tailwind CSS", "CSS"],
    },
    {
        category: "Backend",
        items: ["Java", "Spring Boot", "Node.js", "Express"],
    },
    {
        category: "Database",
        items: ["MongoDB", "SQL"],
    },
    {
        category: "Dev Tools",
        items: ["Git", "GitHub", "Docker", "Kubernetes"],
    },
];

const socials = [
    {
        id: 1,
        text: "Github",
        icon: "/icons/github.svg",
        bg: "#f4656b",
        link: "https://github.com/dhruboneogi15",
    },
    {
        id: 2,
        text: "Codeforces Grind",
        icon: "/icons/codeforces.svg",
        bg: "#4bcb63",
        link: "https://codeforces.com/profile/kemon_acho",
    },
    {
        id: 3,
        text: "Gmail",
        icon: "/icons/gmail.svg",
        bg: "#ff866b",
        link: "https://mail.google.com/mail/?view=cm&fs=1&to=dhruboneogi10@gmail.com",
    },
    {
        id: 4,
        text: "LinkedIn",
        icon: "/icons/linkedin.svg",
        bg: "#05b6f6",
        link: "https://www.linkedin.com/in/neogi-dhrubajyoti/",
    },
];

const photosLinks = [
    {
        id: 1,
        icon: "/icons/gicon1.svg",
        title: "Library",
    },
    {
        id: 2,
        icon: "/icons/gicon2.svg",
        title: "Memories",
    },
    {
        id: 3,
        icon: "/icons/file.svg",
        title: "Places",
    },
    {
        id: 4,
        icon: "/icons/gicon4.svg",
        title: "People",
    },
    {
        id: 5,
        icon: "/icons/gicon5.svg",
        title: "Favorites",
    },
];

const gallery = [
    {
        id: 1,
        img: "/images/gal1.png",
    },
    {
        id: 2,
        img: "/images/gal2.png",
    },
    {
        id: 3,
        img: "/images/gal3.png",
    },
    {
        id: 4,
        img: "/images/gal4.png",
    },
];

export {
    navLinks,
    navIcons,
    dockApps,
    codingProfiles,
    techStack,
    socials,
    photosLinks,
    gallery,
};

const WORK_LOCATION = {
    id: 1,
    type: "work",
    name: "Work",
    icon: "/icons/work.svg",
    kind: "folder",
    children: [
        // ▶ Project 1
        {
            id: 5,
            name: "Express Tracker Application",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-5", // icon position inside Finder
            windowPosition: "top-[5vh] left-5", // optional: Finder window position
            children: [
                {
                    id: 1,
                    name: "Expense-Tracker Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "A full-stack Expense Tracker application built with Spring Boot, MySQL, and JavaScript." ,
                        "Users can register, log in, add transactions, and view dynamic reports for expenses, income, and balances.",
                        "RESTful APIs are used for authentication and transaction management.",
                        "Static HTML pages with CSS for styling and Javascript functionality are used along with responsive forms."
                    ],
                },
                {
                    id: 2,
                    name: "express-tracker-2.png",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-20",
                    imageUrl: "/images/project-1-2.png",
                },
                {
                    id: 4,
                    name: "express-tracker.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-1.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },

        // ▶ Project 2
        {
            id: 6,
            name: "ResuMate",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-52 right-80",
            windowPosition: "top-[20vh] left-7",
            children: [
                {
                    id: 1,
                    name: "ResuMate Project.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 right-10",
                    description: [
                        "AI Resume Analyzer is a smart tool that helps you perfect your resume with instant feedback.",
                        "Instead of guessing what recruiters want, you get AI-powered insights on keywords, formatting, and overall impact.",
                        "Think of it like having a career coach—pointing out strengths, fixing weaknesses, and boosting your chances of landing interviews.",
                        "It's built with React Router, Typescript and Puter, so it runs fast, looks professional, and works seamlessly on any device.",
                    ],
                },
                {
                    id: 2,
                    name: "ResuMate.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-20 left-20",
                    imageUrl: "/images/project-2-2.png",
                },
                {
                    id: 4,
                    name: "ResuMate.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 left-80",
                    imageUrl: "/images/project-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 left-5",
                },
            ],
        },

        // ▶ Project 3
        {
            id: 7,
            name: "Amazon Clone",
            icon: "/images/folder.png",
            kind: "folder",
            position: "top-10 left-80",
            windowPosition: "top-[33vh] left-7",
            children: [
                {
                    id: 1,
                    name: "Amazon Clone.txt",
                    icon: "/images/txt.png",
                    kind: "file",
                    fileType: "txt",
                    position: "top-5 left-10",
                    description: [
                        "Amazon clone delivers a clean, responsive user interface for browsing products and categories effortlessly.",
                        "We can place orders, remove them, and also track our order in real time.",
                        "The shopping cart and checkout flows are designed for smooth, intuitive user interactions.",
                        "It is built with Javascript and features dynamic product listings, real-time search and filtering, and responsive product detail pages",
                    ],
                },
                {
                    id: 2,
                    name: "amazon_clone.com",
                    icon: "/images/safari.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-10 right-20",
                    imageUrl: "/images/project-3.png"
                },
                {
                    id: 4,
                    name: "amazon_clone.png",
                    icon: "/images/image.png",
                    kind: "file",
                    fileType: "img",
                    position: "top-52 right-80",
                    imageUrl: "/images/project-3-2.png",
                },
                {
                    id: 5,
                    name: "Design.fig",
                    icon: "/images/plain.png",
                    kind: "file",
                    fileType: "fig",
                    href: "https://google.com",
                    position: "top-60 right-20",
                },
            ],
        },
    ],
};

const ABOUT_LOCATION = {
    id: 2,
    type: "about",
    name: "About me",
    icon: "/icons/info.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-5",
            imageUrl: "/images/dhrubajyoti.jpg",
        },
        {
            id: 2,
            name: "casual-me.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-28 right-72",
            imageUrl: "/images/gal1.png",
        },
        {
            id: 3,
            name: "about-me.txt",
            icon: "/images/txt.png",
            kind: "file",
            fileType: "txt",
            position: "top-60 left-5",
            subtitle: "Meet the Developer Behind the Code",
            image: "/images/dhrubajyoti.jpg",
            description: [
                "Hey! I’m Dhrubajyoti 👋, a web developer who enjoys building sleek, interactive websites that actually work well.",
                "I’m a passionate software developer with a strong interest in building clean, user-friendly web applications.",
                "I like solving problems, learning new tools, and improving my code every day",
                "I’m always excited to take on new challenges and grow as a developer.",
            ],
        },
    ],
};

const RESUME_LOCATION = {
    id: 3,
    type: "resume",
    name: "Resume",
    icon: "/icons/file.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "Resume.pdf",
            icon: "/images/pdf.png",
            kind: "file",
            fileType: "pdf",
            // you can add `href` if you want to open a hosted resume
            // href: "/your/resume/path.pdf",
        },
    ],
};

const TRASH_LOCATION = {
    id: 4,
    type: "trash",
    name: "Trash",
    icon: "/icons/trash.svg",
    kind: "folder",
    children: [
        {
            id: 1,
            name: "trash1.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-10 left-10",
            imageUrl: "/images/trash-1.png",
        },
        {
            id: 2,
            name: "trash2.png",
            icon: "/images/image.png",
            kind: "file",
            fileType: "img",
            position: "top-40 left-80",
            imageUrl: "/images/trash-2.png",
        },
    ],
};

export const locations = {
    work: WORK_LOCATION,
    about: ABOUT_LOCATION,
    resume: RESUME_LOCATION,
    trash: TRASH_LOCATION,
};

const INITIAL_Z_INDEX = 1000;

const WINDOW_CONFIG = {
    finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    contact: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
};

export { INITIAL_Z_INDEX, WINDOW_CONFIG };