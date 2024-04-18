import YsText from "./text/index.vue";
import "./style.css";
import "./antd.less";

export { YsText };

export default {
  install(app) {
    app.component("YsText", YsText);
  },
};
