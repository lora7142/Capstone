import html from "html-literal";

export default item => {
  console.log("in navItem", item);
  return html`
    <li>
      <a href="${item.url}" data-navigo>${item.text}</a>
    </li>
  `;
};
