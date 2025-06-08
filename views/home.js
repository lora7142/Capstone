import html from "html-literal";
export default () => html`
  <section id="home">
    <h2>Weather API goes here</h2>
    <h4 class="indexH4">Today looks like a great day to be outside!</h4>
    <h3 class="indexH3">What would you like to do?</h3>
    <table class="tableButtons">
      <tr class="flex-container">
        <!-- need to figure out the code for buttons to go to different sections -->
        <td><button onclick="goToAddPage()">Add</button></td>
        <td><button onclick="goToUpdateDeletePage()">Update/Delete</button></td>
        <td><button onclick="goToReportPage()">Report/Search</button></td>
        <td><button onclick="goToAboutPage()">About</button></td>
        <td><button onclick="goToContactPage()">Contact</button></td>
      </tr>
    </table>
  </section>
`;
