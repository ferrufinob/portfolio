import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: '',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1kRSSL1c7RL1J8-xXVe-TpJXkN8Szvj48/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Bookmarkd.png',
    title: 'Bookmarkd',
    info: 'A Pinterest inspired Single Page Application that allows users to create boards and pins.',
    info2: 'Utilizes ReactJS, Rails API, Redux, Styled Components and JWT Authentication',
    url: 'https://www.youtube.com/watch?v=Sfp5V6rF3bw',
    repo: 'https://github.com/ferrufinob/Bookmarkd_Frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'StudyNook.png',
    title: 'StudyNook',
    info: 'A Flash Card Single Page Application that allows users to create flashcards for provided categories.',
    info2: 'Built with Vanilla JavaScript(AJAX), OOJS, Rails API, HTML, and CSS',
    url: 'https://www.youtube.com/watch?v=PU-2arRZUd0',
    repo: 'https://github.com/ferrufinob/StudyNook-frontend', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Chocoholic.png',
    title: 'Chocoholic',
    info: 'A Chocolate sharing application for chocolate lovers. Users can create posts and share details on chocolates they have tried and leave reviews. ',
    info2: 'Utilizes Authentication with BCrypt and Google OAuth, Rails, Ruby, SQL, HTML, and CSS',
    url: 'https://www.youtube.com/watch?v=bfDzksT0hW4',
    repo: 'https://github.com/ferrufinob/Chocoholic', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'medium',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
