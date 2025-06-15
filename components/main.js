import html from "html-literal";
import * as views from "../views";

export default state =>
  html`
    <div>${views[state.view](state)}</div>
  `;
