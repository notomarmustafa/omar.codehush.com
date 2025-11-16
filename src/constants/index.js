const navLinks = [
  { name: "navWork", link: "#work" },
  { name: "navExperience", link: "#experience" },
  { name: "navSkills", link: "#skills" },
  { name: "navTestimonials", link: "#testimonials" },
  { name: "navSocials", link: "https://beacons.ai/omarmustafa" },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 5, suffix: "+", label: "Years of Experience" },
  { value: 900, suffix: "+", label: "Total Contributions" },
  { value: 10, suffix: "+", label: "Completed Projects" },
  { value: 850, suffix: "+", label: "Reputation" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/codehush.png",
  },
  {
    imgPath: "/images/logos/enduryx.png",
  },
  {
    imgPath: "/images/logos/viris.png",
  },
  {
    imgPath: "/images/logos/nilepainting.png",
  },
  {
    imgPath: "/images/logos/alphatoomega.png",
  },
  {
    imgPath: "/images/logos/perfectplantfarm.png",
  },
  {
    imgPath: "/images/logos/opiumnetworks.png",
  },
];

const abilities = [
  {
    imgPath: "/images/other/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/other/person.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/other/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "exp_review_1",
    imgPath: "/images/work/codehush.png",
    logoPath: "/images/work/ch-icon.png",
    title: "exp_title_1",
    date: "January 2020 - Present",
    responsibilities: [
      "exp_1_r1",
      "exp_1_r2",
      "exp_1_r3"
    ]
  },
  {
    review: "exp_review_2",
    imgPath: "/images/work/perfectplantfarm.png",
    logoPath: "/images/work/perfectplantfarm-icon.png",
    title: "exp_title_2",
    date: "February 2023 - July 2023",
    responsibilities: [
      "exp_2_r1",
      "exp_2_r2",
      "exp_2_r3"
    ]
  },
  {
    review: "exp_review_3",
    imgPath: "/images/work/opiumnetworks.png",
    logoPath: "/images/work/opiumnetworks-icon.png",
    title: "exp_title_3",
    date: "July 2025 - Present",
    responsibilities: [
      "exp_3_r1",
      "exp_3_r2",
      "exp_3_r3"
    ]
  }
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/work/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/work/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/work/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Omar. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/clients/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Omar was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/clients/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Omar was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Omar's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Omar is the ideal partner.",
    imgPath: "/images/clients/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Omar was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/clients/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Omar's expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/clients/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Omar was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/clients/client6.png",
  },
];

const socialImgs = [
  {
    name: "linkedin",
    imgPath: "/images/socials/linkedin.png",
    url: "https://www.linkedin.com/in/notomarmustafa/",
  },
  {
    name: "github",
    imgPath: "/images/socials/github.png",
    url: "https://github.com/notomarmustafa",
  },
  {
    name: "x",
    imgPath: "/images/socials/x.png",
    url: "https://x.com/notomarmustafa",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
