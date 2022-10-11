//  icons
import {
  FiLinkedin,
  FiInstagram,
  FiGithub,
  FiDribbble,
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

// projects images
import Project1 from './assets/img/projects/p1.webp';
import Project2 from './assets/img/projects/p2.webp';
import Project3 from './assets/img/projects/p3.webp';
import Project4 from './assets/img/projects/p4.webp';
import Project5 from './assets/img/projects/p5.webp';
import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/postgres.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/prisma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

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
  // {
  //   name: 'services',
  //   href: 'services',
  // },
  // {
  //   name: 'testimonials',
  //   href: 'testimonials',
  // },
  {
    name: 'contact',
    href: 'contact',
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
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1665173976/eventApp/Captura_de_Pantalla_2022-10-06_a_la_s_12.06.06_a._m._aiks54.png',
    name: 'Events App',
    category: 'web development',
    url:'https://github.com/jestebanvelasquez/ArtisUp',
    description:'La idea general es desarrollar una app que permita conectar a un usuario con un show artistico, donde el usuario podrá crear una cuenta y loggearse para contratar los servicios de diferentes shows artisticos de la ciudad, implementando un sistema de pago. Ademas el artista podrá al igual registrarse y crear los eventos que ofrecera en la app, se contará con un panel de administracion que servira para darle el manejo a decuado y seguimiento a la ejecucion de la app'
  },
  {
    id: '2',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1665175892/eventApp/Captura_de_Pantalla_2022-09-27_a_la_s_8.23.35_p._m._fu2gv9.png',
    name: 'Medic App',
    category: 'web development',
    url:'https://medic-app-pf.vercel.app/',
    description:`Se desarrollo una app que permite conectar pacientes con medicos de la zona, donde el paciente puede conocer la agenda del medico, reservar una cita, pagar y generar un recibo con el cual se le notificará al medico elegido.
    La app cuenta con panel de paciente, medico y admin, donde podran modificar sus perfiles y ver la actividad en la pagina. Tambien cuenta con un panel administrativo, en el cual se puede verificar la actividad de casa usuario, medico y nuevos administradores. Segun su actividad y comportamiento se podrá banear a cualquier usuario, restringiendo su acceso a la app. al igual llevar a cabo la administracion de la pagina, sus servicios generados, pagados y toda su actividad financiera.`
  },
  {
    id: '3',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1665175883/eventApp/Captura_de_Pantalla_2022-08-17_a_la_s_1.19.03_a._m._ivozqj.png',
    name: 'Videogames App',
    category: 'web development',
    url:'https://github.com/jestebanvelasquez/Videogames',
    description:`La idea general fué desarrollar una aplicacion con una base de datos en la cual se puedan ver los distintos videojuegos disponibles junto con información relevante de los mismos utilizando la api externa [rawg](https://rawg.io/apidocs) y a partir de ella poder, entre otras cosas:
    Buscar videjuegos
    Filtrarlos / Ordenarlos
    Agregar nuevos videojuegos
    Eliminar videojuegos`
  },
  {
    id: '4',
    image: 'https://res.cloudinary.com/esteban3232/image/upload/v1665175873/eventApp/Captura_de_Pantalla_2022-08-17_a_la_s_1.09.04_a._m_b1ga3c.jpg',
    name: 'Movies App',
    category: 'web development',
    url:'https://github.com/jestebanvelasquez/Peliculas',
    description:`La idea general fué desarrollar una aplicacion conectada a una api externa, en la cual se puedan ver buscar peliculas por titulo disponibles junto con información relevante de las mismas utilizando la api externa https://api.thedogapi.com/ y a partir de ella poder, entre otras cosas:
    Buscar peliculas por nombre
    Ver el detalle de la pelicula
    Agregar a favoritos`
  },
  // {
  //   id: '5',
  //   image: Project5,
  //   name: 'project name 5',
  //   category: 'web development',
  // },
  // {
  //   id: '6',
  //   image: Project6,
  //   name: 'project name 6',
  //   category: 'web development',
  // },
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

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage2,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
  },
  {
    authorImg: TestiImage3,
    authorText:
      'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
    authorName: 'Olivia Doe',
    authorPosition: 'Head of Design, Google',
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
