export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'DateTator - AUTOMATED SCHEDULING OF COURSES OFFERING USING ADAPTIVE GENETIC ALGORITHM',
    desc: 'A compact implementation of a genetic-algorithm-based class timetable and room allocation generator that evolves schedules to minimize conflicts and satisfy constraints, with a lightweight web interface for viewing and interacting with results.',
    subdesc:
      'Python Flask for the core genetic algorithm and scheduling logic; HTML and CSS for the UI and layout; JavaScript for frontend interactivity and visualization; MySQL for data storage and retrieval.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'Python',
        path: '/assets/python.svg',
      },
      {
        id: 2,
        name: 'Flask',
        path: 'assets/Flask.png',
      },
      {
        id: 3,
        name: 'HTML',
        path: '/assets/HTML5.png',
      },
      {
        id: 4,
        name: 'CSS',
        path: '/assets/CSS3.png',
      },
    ],
  },
  {
    title: 'Social Media Space',
    desc: 'A web-based social media application that provides an interactive, responsive frontend for social networking features (feeds, profiles, posting and interactions).',
    subdesc:
      'It’s implemented with Angular TypeScript for the application logic and interactivity, with HTML for structure and CSS for styling and responsive layouts.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 2,
        name: 'Angular',
        path: 'assets/AngularJS.png',
      },
      {
        id: 3,
        name: 'Firebase',
        path: '/assets/Firebase.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/HTML5.png',
      },
    ],
  },
  {
    title: 'Internship-Management-System',
    desc: 'A lightweight web app for managing the internship lifecycle (managing teams, posting assignments, and submitting tasks)',
    subdesc:
      'PHP (Laravel) with Blade templates for views, CSS for styling, JavaScript for client-side interactions and MySQL for database management',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'PHP',
        path: '/assets/php.svg',
      },
      {
        id: 2,
        name: 'Laravel',
        path: 'assets/Laravel.png',
      },
      {
        id: 3,
        name: 'MySQL',
        path: '/assets/MySQL.png',
      },
      {
        id: 4,
        name: 'HTML',
        path: '/assets/HTML5.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Quanby Solutions Inc.',
    pos: 'Full Stack Developer/ Scrum Master Intern',
    duration: 'Feb - June 2025',
    title: "Developed and maintained responsive web applications using Next.js, TypeScript, and Supabase. Managed development tasks using GitHub Projects and coordinated team sprints under Agile methodology. Implemented frontend optimization and code refactoring, reducing page load times. Conducted thorough testing and debugging for cross-browser and accessibility compliance.",
    icon: '/assets/qbsolinc_logo.jpg',
    animation: 'victory',
  },
  
];