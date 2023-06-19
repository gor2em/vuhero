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
import router from "./router";
import pinia from "./stores";
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
app.use(router);
app.use(pinia);
app.mount("#app");
