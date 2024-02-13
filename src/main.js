import { createApp } from "vue";
import App from "./App.vue";

/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faUser,
  faHeart,
  faBagShopping,
} from "@fortawesome/free-solid-svg-icons";
import {
  faSquareTwitter,
  faSquareFacebook,
  faInstagram,
  faSquarePinterest,
  faSquareYoutube,
} from "@fortawesome/free-brands-svg-icons";

/* add icons to the library */
library.add(
  faUser,
  faHeart,
  faBagShopping,
  faSquareTwitter,
  faSquareFacebook,
  faInstagram,
  faSquarePinterest,
  faSquareYoutube
);

const app = createApp(App);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
