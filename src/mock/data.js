import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Aaron Sharma', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: "Hello, I'm ",
  name: 'Aaron Sharma',
  subtitle: 'A MSc Computer Science Student',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'aaron.jpg',
  paragraphOne: 'I am currently a MSc Computer Science Student at the University of Bristol. I graduated from University of Leicester with a Upper Honors in Law',
  paragraphTwo: 'I have a keen interest in Financial instruments; and using Statistical and Graphical Machine Learning methods, to identify undervalued assets',
  paragraphThree: 'I am also interested in Health-Tech, and finding new and innovative ways to help improve modern standards of living',
  resume: 'https://drive.google.com/file/d/1y7jfnRcrMSIk_DmAtdFNTLQj2ubSqDtp/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpeg',
    title: ' Single Page Web Application',
    info: 'Tic-Tac-Toe Beginner Angular Web App',
    info2: '',
    url: 'https://tic-tac-toe-f09e8.web.app/',
    repo: 'https://github.com/aaronsharma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project1.jpeg',
    title: 'Financial-Tech App ',
    info: '...',
    info2: '',
    url: '',
    repo: 'https://github.com/aaronsharma', // if no repo, the button will not show up
  },
  
];

// CONTACT DATA
export const contactData = {
  cta: 'To get in touch please contact me below',
  btn: 'Email',
  email: 'aaronsharma98@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com',
    },
    {
      id: nanoid(),
      name: 'facebook',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aaron-sharma-126329177/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/aaronsharma',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
