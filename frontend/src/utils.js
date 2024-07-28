import {LuBox, LuMessageSquare, LuUser, LuCalendar} from "react-icons/lu";
import {TbUsers} from "react-icons/tb";
import {FaSuitcase} from "react-icons/fa";

const utils = {
  SIDEBAR_LINKS: [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/", name: "Members", icon: TbUsers },
    { id: 3, path: "/", name: "Messages", icon: LuMessageSquare },
    { id: 4, path: "/", name: "Projects", icon: FaSuitcase },
    { id: 5, path: "/", name: "Clients", icon: LuUser },
    { id: 6, path: "/", name: "Work Plan", icon: LuCalendar },
  ],
};

export default utils;
