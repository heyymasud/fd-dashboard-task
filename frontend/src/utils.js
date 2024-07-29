import {LuBox, LuMessageSquare, LuUser, LuCalendar} from "react-icons/lu";
import {TbUsers} from "react-icons/tb";
import {FaSuitcase} from "react-icons/fa";

const utils = {
  SIDEBAR_LINKS: [
    { id: 1, path: "/", name: "Dashboard", icon: LuBox },
    { id: 2, path: "/", name: "Members (soon)", icon: TbUsers },
    { id: 3, path: "/", name: "Messages (soon)", icon: LuMessageSquare },
    { id: 4, path: "/", name: "Projects (soon)", icon: FaSuitcase },
    { id: 5, path: "/", name: "Clients (soon)", icon: LuUser },
    { id: 6, path: "/", name: "Work Plan (soon)", icon: LuCalendar },
  ],
};

export default utils;
