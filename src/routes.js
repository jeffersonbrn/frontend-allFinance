import Index from "views/Index.js";
import Profile from "views/pages/Profile.js";
import Maps from "views/pages/Maps.js";
import Register from "views/pages/Register.js";
import Login from "views/pages/Login.js";
import Tables from "views/pages/Tables.js";
import Icons from "views/pages/Icons.js";
import ConfirmEmail from "./views/pages/ConfirmEmail";
import EditProfile from "./views/pages/EditProfile";
import UsersTable from "./views/pages/UsersTable";
import ResetPassword from "./views/pages/ResetPassword";
import ConfirmPassword from "./views/pages/ConfirmPassword";
import ResetPasswordSuccess from "./views/pages/ResetPasswordSuccess";
import userList from "./views/pages/Users/UserList";
import UserCreate from "./views/pages/Users/UsersCreate/UserCreate";
import AccountantList from "./views/pages/Accoutants/AccountantList";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Index,
    layout: "/admin",
    api: false,
  },
  {
    path: "/icons",
    name: "Icons",
    icon: "ni ni-planet text-blue",
    component: Icons,
    layout: "/admin",
    api: false,
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "ni ni-pin-3 text-orange",
    component: Maps,
    layout: "/admin",
    api: false,
  },
  {
    path: "/user-profile",
    name: "Usuários",
    icon: "ni ni-single-02 text-yellow",
    component: userList,
    layout: "/admin",
    api: true,
  },
  {
    path: "/user-profile-created",
    name: "Usuários",
    icon: "ni ni-single-02 text-yellow",
    component: UserCreate,
    layout: "/admin",
    /* api: true, */
  },
  {
    path: "/accountant-profile",
    name: "Contadores",
    icon: "ni ni-briefcase-24 text-red",
    component: AccountantList,
    layout: "/admin",
    api: true,
  },
  {
    path: "/accountant-profile-created",
    name: "Contadores",
    icon: "ni ni-briefcase-24 text-red",
    component: AccountantList,
    layout: "/admin",
    api: false,
  },
  {
    path: "/tables",
    name: "Tables",
    icon: "ni ni-bullet-list-67 text-red",
    component: Tables,
    layout: "/admin",
    api: false,
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth",
    api: true,
  },
  {
    path: "/register",
    name: "Register",
    icon: "ni ni-circle-08 text-pink",
    component: Register,
    layout: "/auth",
    api: true,
  },
  {
    path: "/confirm-email/:id",
    name: "Confirm Email",
    icon: "ni ni-check-bold text-green",
    component: ConfirmEmail,
    layout: "/auth",
    api: true,
  },
  {
    path: "/edit-profile",
    name: "Edit Profile",
    icon: "ni ni-ruler-pencil text-info",
    component: EditProfile,
    layout: "/admin",
    api: false,
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-folder-17 text-pink",
    component: UsersTable,
    layout: "/admin",
    api: false,
  },
  {
    path: "/reset-password",
    name: "Reset Password",
    icon: "ni ni-folder-17 text-pink",
    component: ResetPassword,
    layout: "/auth",
    api: true,
  },
  {
    path: "/confirm-password/:id",
    name: "Confirm Password",
    icon: "ni ni-folder-17 text-pink",
    component: ConfirmPassword,
    layout: "/auth",
    api: true,
  },
  {
    path: "/reset-success",
    name: "Password Reset Confirmed",
    icon: "ni ni-folder-17 text-pink",
    component: ResetPasswordSuccess,
    layout: "/auth",
    api: false,
  },
];
export default routes;
