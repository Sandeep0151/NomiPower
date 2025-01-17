interface MenuItem {
  id: number;
  label: string;
  link: string;
  lastItem?: string;
  hasDropdown?: boolean;
  subMenu?: MenuItem[];
}

const navMenuData: MenuItem[] = [
  {
    id: 1,
    label: "Home",
    link: "/",
    hasDropdown: true,
    subMenu: [
      { id: 7, label: "Home 1", link: "/" },
      { id: 8, label: "Home 2", link: "/home-two" },
    ],
  },
  {
    id: 2,
    hasDropdown: false,
    label: "About",
    link: "/about",
  },
  {
    id: 3,
    label: "Pages",
    link: "#",
    hasDropdown: true,
    subMenu: [
      { id: 9, label: "our projects", link: "/our-projects" },
      { id: 10, label: "projects details", link: "/projects-details" },
      { id: 11, label: "team details", link: "/team-details" },
      { id: 12, label: "pricing plan", link: "/pricing-plan" },
      { id: 13, label: "404 error", link: "/404-error" },
    
    ],
  },
  {
    id: 4,
    hasDropdown: false,
    label: "Services",
    link: "/services",
  },
  {
    id: 5,
    label: "News",
    link: "/",
    hasDropdown: true,
    subMenu: [
      { id: 14, label: "our blog", link: "/our-blog" },
      { id: 15, label: "blog details", link: "/blog-details" },
    ],
  },
  {
    id: 6,
    hasDropdown: false,
    label: "contact",
    link: "/contact",
  },
];

export default navMenuData;
