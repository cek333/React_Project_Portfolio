import querySelectorQuizImg from '../assets/images/quiz_multiplechoice_large_thumbnail.png';
import weatherDashboardImg from '../assets/images/wapp_large_thumbnail.png';
import jobRrImg from '../assets/images/jobRr_small_thumbnail.png';
import eatDaBurgerImg from '../assets/images/eat-da-burger_thumbnail.png';
import recipeShareImg from '../assets/images/recipe_share.png';
import fitnessTrackerImg from '../assets/images/fitness_tracker.png';

const projectList = [
  {
    title: 'querySelector Quiz',
    description: 'A multiple choice quiz constructed using HTML, Bootstrap, Javascript, and localStorage.',
    github: 'https://github.com/cek333/querySelector_Quiz',
    deployed: 'https://cek333.github.io/querySelector_Quiz/',
    img: querySelectorQuizImg
  },
  {
    title: 'Weather Dashboard',
    description: 'A weather app built using HTML, CSS, Javascript, Bootstrap, and localStorage. (Weather data courtesy the OpenWeather API.)',
    github: 'https://github.com/cek333/Weather_Dashboard',
    deployed: 'https://cek333.github.io/Weather_Dashboard/',
    img: weatherDashboardImg
  },
  {
    title: 'job.Rr',
    description: 'A group project utilizing third-party APIs to find jobs and related books based on a user\'s search query. The site was built using HTML, CSS, Bootstrap, jQuery, the Adzuna API, the Open Library API, and localStorage.',
    github: 'https://github.com/cek333/job.Rr',
    deployed: 'https://vicscherman.github.io/project1/',
    img: jobRrImg
  },
  {
    title: 'Eat-Da-Burger',
    description: 'A whimsical app that keeps track of eaten and uneaten burgers! It\'s a full-stack application created using Node, Express, Handlebars, MySQL, HTML, Bootstrap, and Javascript.',
    github: 'https://github.com/cek333/Eat-Da-Burger',
    deployed: 'https://radiant-basin-63106.herokuapp.com/',
    img: eatDaBurgerImg
  },
  {
    title: 'Recipe Share',
    description: 'A group project built to allow users to search for and save recipes. It\'s a full-stack application constructed using Node, Express, MySQL, HTML, Bootstrap, and jQuery.',
    github: 'https://github.com/npcoding25/Project-2',
    deployed: 'https://recipe-share-team-one.herokuapp.com/',
    img: recipeShareImg
  },
  {
    title: 'Fitness Tracker',
    description: 'This app allows users to document their fitness regime and chart their progres. For this app I implemented the back-end functionality using Node, Express, Mongoose, and MongoDB.',
    github: 'https://github.com/cek333/Fitness_Tracker',
    deployed: 'https://fitness-tracker-63575.herokuapp.com/',
    img: fitnessTrackerImg
  }
];

export default projectList;