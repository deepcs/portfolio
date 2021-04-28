import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chandeep', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my website.The aim of this website is to create a platform to interact and divcuss the new tech trends available in market', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Chandeep',
  subtitle: 'IT Analyst',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'SPA',
    info: '',
    info2: '',
    url: 'https://chandeep.netlify.app/',
    repo: 'https://github.com/deepcs/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Webzone',
    info: '',
    info2: '',
    url: 'https://web-zone.netlify.app/',
    repo: 'https://github.com/deepcs/_webzone', // if no repo, the button will not show up
  }
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'chandeep.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/chandeep89',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/chandeep-singh-33ba1733/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/deepcs',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
