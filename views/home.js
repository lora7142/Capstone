import html from "html-literal";
import links from "../store/links.js";
import lawnmower from "url:../assets/img/pexels-clickerhappy-589.jpg";

export default state => {
  const temp = state.weather.temp;
  let tempMessage = "";

  if (temp >= 85) {
    tempMessage =
      "It's quite hot today! Stay hydrated if you're heading outside.";
  } else if (temp >= 65) {
    tempMessage = "Perfect weather for some lawn and garden work!";
  } else if (temp >= 45) {
    tempMessage = "A bit chilly, but still manageable for outdoor activities.";
  } else {
    tempMessage =
      "Too cold to be working outside. Maybe organize your tools indoors!";
  }

  return html`
    <section id="home">
      <h2>Home Inventory Management - Lawn and Garden Edition</h2>
      <h3>
        The weather in ${state.weather.city} is ${state.weather.description}.
        Temperature is ${Math.round(state.weather.temp)}&deg;F, and it feels
        like ${Math.round(state.weather.feelsLike)}&deg;F.
      </h3>
      <h4 class="indexH4">${tempMessage}</h4>
      <img class="mainImage" src="${lawnmower}" alt="lawnmower" />
      <h3 class="indexH3">What would you like to go?</h3>
      <table class="tableButtons">
        <tr class="flex-container">
          <td class="button">
            <a href="${links[1].text}" title="${links[1].url}"
              >${links[1].text}</a
            >
          </td>
          <td class="button">
            <a href="${links[2].text}" title="${links[2].url}"
              >${links[2].text}</a
            >
          </td>
          <td class="button">
            <a href="${links[3].text}" title="${links[3].url}"
              >${links[3].text}</a
            >
          </td>
          <td class="button">
            <a href="${links[4].text}" title="${links[4].url}"
              >${links[4].text}</a
            >
          </td>
        </tr>
      </table>
    </section>
  `;
};
