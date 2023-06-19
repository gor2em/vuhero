import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { OhVueIcon, addIcons } from "oh-vue-icons";
import {
  MdSpacedashboardOutlined,
  MdHomeworkOutlined,
  HiFolder,
  HiLink,
  CoCog,
  MdKeyboarddoublearrowleftRound,
  MdKeyboarddoublearrowrightRound,
  RiArrowDownSLine,
} from "oh-vue-icons/icons";
addIcons(
  MdSpacedashboardOutlined,
  MdHomeworkOutlined,
  HiFolder,
  HiLink,
  CoCog,
  MdKeyboarddoublearrowleftRound,
  MdKeyboarddoublearrowrightRound,
  RiArrowDownSLine
);

const app = createApp(App);

app.component("Icon", OhVueIcon);
app.mount("#app");
