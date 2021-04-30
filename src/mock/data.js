import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Chandeep Singh', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Web development Data analysis Teradata, Tableau, MERN Stack, Python, Photoshop, Software Requirements, Software Testing IT Solutions SDLC, Requirement Analysis, Architect/Design, Development, Testing, Implementation, Maintenance server/client applications Git, React, Redux, Ionic, ASP.NET Core, ASP.NET MVC, UML, TypeScript, MS TEST, REST Services, JQuery, Bootstrap, AJAX, JSON, Agile, TDD, Entity Framework, Design Pattern and architecture, XML, WSDL, HTML, Oracle 10, SQL Server 8/12/14, MongoDB, Visual Studio, ATOM.', // e.g: Welcome to my website
  keywords : `SQL, Javascript, Developer, Technology`
};

// HERO DATA
export const heroData = {
  title: 'Developer',
  name: 'Chandeep Singh',
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
    img: 'project1.jpg' ,
    title: 'SPA',
    info: 'Founded in 2003, FASpa is Canada’s premier online spa marketplace. ',
    info2: 'This platform uses power of wordpress and All-in-Migration plugin alomh with PHP,SQL, and LAMP server',
    url: 'https://retail.altervista.org',
    repo: 'https://github.com/deepcs/portfolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project2.jpg',
    title: 'Webzone',
    info: 'Webzone is an ecommerce paltform designed to cater the current need of the people. In this coviid crisis, it is hihgly required to build apps to help people and businesses',
    info2: 'It uses React, Hooks, Node, Mongo and firefox',
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
