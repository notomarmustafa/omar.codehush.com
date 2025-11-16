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
    title: "ability_quality_focus",
    desc: "ability_quality_focus_desc",
  },
  {
    imgPath: "/images/other/person.png",
    title: "ability_reliable_communication",
    desc: "ability_reliable_communication_desc",
  },
  {
    imgPath: "/images/other/time.png",
    title: "ability_on_time_delivery",
    desc: "ability_on_time_delivery_desc",
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
    name: "testimonial_name_1",
    mentions: "@estherhoward",
    review: "testimonial_review_1",
    imgPath: "/images/clients/client1.png",
  },
  {
    name: "testimonial_name_2",
    mentions: "@wadewarren",
    review: "testimonial_review_2",
    imgPath: "/images/clients/client3.png",
  },
  {
    name: "testimonial_name_3",
    mentions: "@guyhawkins",
    review: "testimonial_review_3",
    imgPath: "/images/clients/client2.png",
  },
  {
    name: "testimonial_name_4",
    mentions: "@marvinmckinney",
    review: "testimonial_review_4",
    imgPath: "/images/clients/client5.png",
  },
  {
    name: "testimonial_name_5",
    mentions: "@floydmiles",
    review: "testimonial_review_5",
    imgPath: "/images/clients/client4.png",
  },
  {
    name: "testimonial_name_6",
    mentions: "@albertflores",
    review: "testimonial_review_6",
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
