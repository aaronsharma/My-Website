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
  name: 'Aaron Sharma.',
  subtitle: 'A Law Graduate, now studying MSc Computer Science',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'aaron.jpg',
  paragraphOne:
    'I am currently a MSc Computer Science Student at the University of Bristol. I graduated from University of Leicester with a Upper Honors in Law',
  paragraphTwo:
    'I have a keen interest in Financial instruments; and using Statistical and Graphical Machine Learning methods, to identify undervalued assets. I am also interested in Health-Tech, and finding new and innovative ways to help improve modern standards of living',
  paragraphThree:
    'Please find attatched my Law notes from college and university below, feel free to use them ',
  resume: 'https://drive.google.com/file/d/1y7jfnRcrMSIk_DmAtdFNTLQj2ubSqDtp/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'policepower.png',
    title: ' Police Powers Notes',
    info:
      ' Section 1 of PACE gives the police the right to stop & search people & vehicles in public.',
    info2:
      ' To stop & search under PACE a police officer must have reasonable grounds for suspecting that the person is in possession of stolen goods or prohibited articles    ',

    url: 'https://tic-tac-toe-f09e8.web.app/',
    repo: 'https://github.com/aaronsharma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'policepower1.png',
    title: 'Police Powers pt 2 ',
    info: 'Police officer must give his name and station, if this does not happen it is unlawful.',
    info2: ' Police can only request suspect removes outer clothes- coat, jacket and gloves.',
    url: '',
    repo: 'https://github.com/aaronsharma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'policepower3.png',
    title: 'Criminal Appeals',
    info:
      'Appeal Procedure route from each court differs, depending on the reason for appealing and crime',
    info2: '',
    url: '',
    repo: 'https://github.com/aaronsharma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'criminalcourt.png',
    title: 'Criminal Court',
    info: ' The seriousness of the offence decides which court the case is trialed.',
    info2: ' ',
    url: '',
    repo: 'https://github.com/aaronsharma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'criminalcourt1.png',
    title: 'Criminal Court pt 2',
    info: ' Offence can be either : Indictable, Triable-either-Way or Summary ',
    info2: ' ',
    url: '',
    repo: 'https://github.com/aaronsharma', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jury.png',
    title: 'Juries',
    info: ' Juries are subject to the Court and seriousness of the case ',
    info2: ' ',
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
      url: 'https://mobile.twitter.com/AaronSh81923948',
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
