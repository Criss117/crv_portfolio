export const HEADER_NAV_ITEMS = [
  {
    name: "Inicio",
    href: "/#home",
    className: "",
  },
  {
    name: "Proyectos",
    href: "/#projects",
    className: "",
  },
  {
    name: "Experiencia",
    href: "/#experience",
    className: "",
  },
  {
    name: "Sobre mi",
    href: "/#about",
    className: "",
  },
  // {
  //   name: "Contacto",
  //   href: "/#contact",
  //   className: "",
  // },
] as const;

export const SECTIONS = {
  hero: {
    id: "home",
    ariaLabel: "Inicio",
  },
  proyects: {
    id: "projects",
    ariaLabel: "Proyectos",
  },
  experience: {
    id: "experience",
    ariaLabel: "Experiencia",
  },
  about: {
    id: "about",
    ariaLabel: "Sobre mi",
  },
} as const;
