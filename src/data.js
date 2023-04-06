//  icons
import {
  FiLinkedin,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';


// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/postgres.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/prisma.png';



// navigation
export const navigation = [
  {
    name: 'home',
    href: 'home',
  },
  {
    name: 'about',
    href: 'about',
  },
  {
    name: 'portfolio',
    href: 'portfolio',
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: 'https://www.linkedin.com/in/esteban-velasquez-martinez/',
  },
  // {
  //   icon: <FiInstagram />,
  //   href: '',
  // },
  {
    icon: <FiGithub />,
    href: 'https://github.com/jestebanvelasquez',
  },
  // {
  //   icon: <FiDribbble />,
  //   href: '',
  // },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  {
    img: BehanceBrandIcon,
    href: '',
  },
  {
    img: DribbbleBrandIcon,
    href: '',
  },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1680739525/Captura_de_Pantalla_2023-04-05_a_la_s_7.04.52_p.m._jqpnc0.png',
    name: 'Events App',
    category: 'web development',
    url:'https://events-app-eta.vercel.app/artist/home',
    description:'App que permite conectar a un usuario con un show artistico, donde el usuario podrá crear una cuenta y loggearse para contratar los servicios de diferentes shows artisticos de la ciudad, implementando un sistema de pago. Ademas el artista podrá al igual registrarse y crear los eventos que ofrecera en la app, se contará con un panel de administracion que servira para darle el manejo a decuado y seguimiento a la ejecucion de la app',
    tecnology: ['React', 'TailwindCss', 'NodeJs', 'Express', 'Prisma', 'JWToken', 'PostgreSql']
  },
  {
    id: '2',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1680739697/Captura_de_Pantalla_2023-04-05_a_la_s_7.07.40_p.m._rxshf7.png',
    name: 'Medic App',
    category: 'web development',
    url:'https://medic-app-pf.vercel.app/',
    description:` App que permite conectar pacientes con medicos de la zona, donde el paciente puede conocer la agenda del medico, reservar una cita, pagar y generar un recibo con el cual se le notificará al medico elegido.
    La app cuenta con panel de paciente, medico y admin, donde podran modificar sus perfiles y ver la actividad en la pagina. `,
    tecnology: ['React', 'TailwindCss', 'NodeJs', 'Express', 'MongoDB', 'JWToken']

  },
  {
    id: '3',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1680739324/Captura_de_Pantalla_2023-04-05_a_la_s_5.36.11_p.m._xurkle.png',
    name: 'Blog App',
    category: 'web development',
    url:'https://posts-client.vercel.app/',
    description:`Registrandote en la App  permite crear articulos de diferentes temas, filtrarlos y administralos. `,
    tecnology: ['React', 'Sass', 'NodeJs', 'Express', 'MongoDb', 'JWToken']

  },
  // {
  //   id: '4',
  //   image: 'https://res.cloudinary.com/esteban3232/image/upload/v1665175873/eventApp/Captura_de_Pantalla_2022-08-17_a_la_s_1.09.04_a._m_b1ga3c.jpg',
  //   name: 'Movies App',
  //   category: 'web development',
  //   url:'https://github.com/jestebanvelasquez/Peliculas',
  //   description:`La idea general fué desarrollar una aplicacion conectada a una api externa, en la cual se puedan ver buscar peliculas por titulo disponibles junto con información relevante de las mismas utilizando la api externa https://api.thedogapi.com/ y a partir de ella poder, entre otras cosas:
  //   Buscar peliculas por nombre
  //   Ver el detalle de la pelicula
  //   Agregar a favoritos`,
  //   tecnology: ['React', 'Css']

  // },
  {
    id: '5',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1680739998/Captura_de_Pantalla_2023-04-05_a_la_s_7.13.00_p.m._o5z7z8.png',
    name: 'Ecommerce App',
    category: 'web development',
    url:'https://ecommerce-furniture-mauve.vercel.app',
    description:`Diseño Css de un ecommerce de muebles`,
    tecnology: ['React', 'Css']

  },
  {
    id: '6',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1680740147/Captura_de_Pantalla_2023-04-05_a_la_s_7.15.27_p.m._g4bmzy.png',
    name: 'Earphones App',
    category: 'web development',
    url:'https://tech-pro-kappa.vercel.app',
    description:`Landing page de venta de audifonos`,
    tecnology: ['React','Css']

  },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiPenTool />,
    name: 'Branding',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
  {
    icon: <FiTag />,
    name: 'SEO',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  },
];


// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Tienes alguna Pregunta?',
    subtitle: 'Enviame un email a :.',
    description: 'jestebanvelasquez22@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Ubicación',
    subtitle: 'Medellín, Colombia',
    // description: 'Serving clients worldwide',
  },
];
