import {AiOutlineHome} from 'react-icons/ai'
import {MdProductionQuantityLimits} from 'react-icons/md'
import {FiUsers} from 'react-icons/fi'
import {BsDiagram3} from 'react-icons/bs'

export const RoutesNav = [
  {
    name: "Home",
    path: "home",
    icon:<AiOutlineHome/>
  },
  {
    name: "Products",
    path: "products",
    icon:<MdProductionQuantityLimits/>
  },
  {
    name: "Users",
    path: "users",
    icon:<FiUsers/>
  },
  {
    name: "Diagrama",
    path: "flow",
    icon:<BsDiagram3/>
  },
];

export const LIMIT = 12;

export const colums = [
  {
    key: `firstName`,
    dataKey: `firstName`,
    title: `First Name`,
    width: 150,
  },
  {
    key: `lastName`,
    dataKey: `lastName`,
    title: `Last Name`,
    width: 150,
  },
  {
    key: `age`,
    dataKey: `age`,
    title: `Age`,
    width: 150,
  },
  {
    key: `username`,
    dataKey: `username`,
    title: `User Name`,
    width: 150,
  },
  {
    key: `ip`,
    dataKey: `ip`,
    title: `Ip`,
    width: 150,
  },
];

export const filterRows=[4,6,3,2,1]
export const dataPanel = [
  {
    id: "inicio",
    title: "Incio",
   
    data: { label: "Inicio", subTitle: "Info de la Pagina" }
   
  },
  {
    id: "about",
    data: { label: "Acerca de", subTitle: "Info de la Pagina" },
    type: "page",
    title:'Acerca de'
  },
  {
    id: "product",
    title: "Productos",
    subTitle: "Info de la Pagina",
    type: "page",
    data: { label: "Productos", subTitle: "Info de la Pagina" }

  },
  {
    id: "shop",
    title: "Tienda",
    subTitle: "Info de la Pagina",
    type: "page",
    data: { label: "Tienda", subTitle: "Info de la Pagina" }

  },
  {
    id: "blog",
    title: "Blogs",
    subTitle: "Info de la Pagina",
    type: "page",
    data: { label: "Blogs", subTitle: "Info de la Pagina" }

  },
  {
    id: "header",
    title: "Header",
    subTitle: "Control interno de la pagina",
    type: "element",
    data: { label: "Header", subTitle: "Info de la Pagina" }

  },
  {
    id: "container",
    title: "Container",
    subTitle: "Control interno de la pagina",
    type: "element",
    data: { label: "Container", subTitle: "Info de la Pagina" }

  },
  {
    id: "content",
    title: "Content",
    subTitle: "Control interno de la pagina",
    type: "element-item",
    data: { label: "Content", subTitle: "Info de la Pagina" }

  },
  {
    id: "footer",
    title: "Footer",
    subTitle: "Control interno de la pagina",
    type: "element",
    data: { label: "Footer", subTitle: "Info de la Pagina" }

  },
  {
    id: "menu",
    title: "Menu",
    subTitle: "Control interno de la pagina",
    type: "element-item",
    data: { label: "Menu", subTitle: "Info de la Pagina" }

  },
];