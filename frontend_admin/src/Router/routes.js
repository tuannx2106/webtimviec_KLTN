// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import LocationOn from "@material-ui/icons/LocationOn";
import DashboardPage from "../views/PageAdmin/Dashboard/Dashboard";
import JobPageContainer from "../views/PageAdmin/JobPage/Container";
import UsersPageContainer from "../views/PageAdmin/UserPage/Container";
import RecruiterPageContainer from "../views/PageAdmin/RecruiterPage/Container";
import ProfessionPageContainer from "../views/PageAdmin/ProfessionPage/Container";
import CityPageContainer from "../views/PageAdmin/CityPage/Container";
import SkillPageContainer from "../views/PageAdmin/SkillPage/Container";
import * as PATH from "./url";

const dashboardRoutes = [
  {
    path: PATH.DASHBOARD_URL,
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: PATH.USER_PAGE_URL,
    name: "Người dùng",
    icon: Person,
    component: UsersPageContainer,
    layout: "/admin"
  },
  {
    path: PATH.JOB_PAGE_URL,
    name: "Công việc",
    icon: "content_paste",
    component: JobPageContainer,
    layout: "/admin"
  },
  {
    path: PATH.RECRUITER_PAGE_URL,
    name: "Nhà tuyển dụng",
    icon: "content_paste",
    component: RecruiterPageContainer,
    layout: "/admin"
  },
  {
    path: PATH.PROFESSION_PAGE_URL,
    name: "Ngành nghề",
    icon: "content_paste",
    component: ProfessionPageContainer,
    layout: "/admin"
  },
  {
    path: PATH.CITY_PAGE_URL,
    name: "Thành phố",
    icon: LocationOn,
    component: CityPageContainer,
    layout: "/admin"
  },
  {
    path: PATH.SKILL_PAGE_URL,
    name: "Kỹ năng",
    icon: "content_paste",
    component: SkillPageContainer,
    layout: "/admin"
  }
];

export default dashboardRoutes;
