import html from "html-literal";

export default state => html`
  <section id="home">
    <h2>Weather API goes here</h2>
    <h3>
      The weather in ${state.weather.city} is ${state.weather.description}.
      Temperature is ${state.weather.temp}&deg;F, and it feels like
      ${state.weather.feelsLike}&deg;F.
    </h3>
    <h4 class="indexH4">Today looks like a great day to be outside!</h4>
    <h3 class="indexH3">What would you like to do?</h3>
    <table class="tableButtons">
      <tr class="flex-container">
        <!-- need to figure out the code for buttons to go to different sections -->
        <td><button>Add</button></td>
        <td><button>Update/Delete</button></td>
        <td><button>Report/Search</button></td>
        <td><button>About</button></td>
        <td><button>Contact</button></td>
      </tr>
    </table>
  </section>
`;
