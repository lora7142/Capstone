import { header, nav, main, footer, buttons } from "./components";
import * as store from "./store";
import Navigo from "navigo";
import { camelCase } from "lodash";
import axios from "axios";
import { addUpdateButtonHandler } from "./views/report";
import { addDeleteButtonHandler } from "./views/report";

const router = new Navigo("/");

function render(state = store.home) {
  document.querySelector("#root").innerHTML = `
  ${header(state)}
    ${nav(store.links)}
    ${main(state)}
    ${footer()}
    `;

    router.updatePageLinks();
}

    function submitConfirm() {
      alert("The record has been added");
    }

router.hooks({
  // We pass in the `done` function to the before hook handler to allow the function to tell Navigo we are finished with the before hook.
  // The `match` parameter is the data that is passed from Navigo to the before hook handler with details about the route being accessed.
  // https://github.com/krasimir/navigo/blob/master/DOCUMENTATION.md#match
  before: (done, match) => {
    console.info("Before hook executing");
    // We need to know what view we are on to know what data to fetch
    const view = match?.data?.view ? camelCase(match.data.view) : "home";
    // Add a switch case statement to handle multiple routes
    switch (view) {
      // Add a case for each view that needs data from an API
    // New Case for the Home View
    case "home":
      axios
        // Get request to retrieve the current weather data using the API key and providing a city name
        .get(
          `https://api.openweathermap.org/data/2.5/weather?appid=${process.env.OPEN_WEATHER_MAP_API_KEY}&units=imperial&q=st%20louis`
        )
        .then(response => {
          // Create an object to be stored in the Home state from the response
          store.home.weather = {
            city: response.data.name,
            temp: response.data.main.temp,
            feelsLike: response.data.main.feels_like,
            description: response.data.weather[0].main
          };
          done();
      })
      .catch((err) => {
        console.log(err);
        done();
      });
      break;
      case "report":
              // New Axios get request utilizing already made environment variable
              axios
                .get(`${process.env.ITEM_API_URL}/items`)
                .then(response => {
                  // We need to store the response to the state, in the next step but in the meantime let's see what it looks like so that we know what to store from the response.
                  console.log("response", response);
                  store.report.items = response.data;
                  done();
                })
                .catch((error) => {
                  console.log("It puked", error);
                  done();
                });
                break;
      default:
        // We must call done for all views so we include default for the views that don't have cases above.
        done();
        // break is not needed since it is the last condition, if you move default higher in the stack then you should add the break statement.
    }
  },
  already: async (match) => {
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    render(store[view]);

    if (view === 'report') {
      addDeleteButtonHandler();
      addUpdateButtonHandler();
    }
  },
  after: async (match) => {
    console.log("After hook executing");
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    // only run on page that has form on it
    // create additional if statement for each view that uses a form. possibly target it by form id
    if (view === "add") {
    // Add an event handler for the submit button on the form
      document.querySelector("form").addEventListener("submit", event => {
        event.preventDefault();

        // Get the form elements
        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        // Create a request body object to send to the API - list of form fields
        const requestData = {
          name: inputList.name.value,
          maker: inputList.maker.value,
          model: inputList.model.value,
          serialNumber: inputList.serialNumber.value,
          modelNumber: inputList.modelNumber.value,
          powerType: inputList.powerType.value,
          requiredMaintenance: inputList.requiredMaintenance.value,
          frequencyOfMaintenance: inputList.frequencyOfMaintenance.value,
          maintenanceDate:  inputList.maintenanceDate.value,
          listOfPastMaintenanceDates: inputList.listOfPastMaintenanceDates.value,
          lastMaintenanceType: inputList.lastMaintenanceType.value,
          partsReplaced: inputList.partsReplaced.value,
          partsAcquiredFromBusinessName: inputList.partsAcquiredFromBusinessName.value,
          partsAcquiredFromBusinessURL: inputList.partsAcquiredFromBusinessURL.value,
          manualURL: inputList.manualURL.value,
          dateAcquired: inputList.dateAcquired.value,
          requiredSecondary: inputList.requiredSecondary.value,
          secondaryRelated: inputList.secondaryRelated.value,
          secondaryMaker: inputList.secondaryMaker.value,
          secondaryModelNumber: inputList.secondaryModelNumber.value,
          secondarySerialNumber: inputList.secondarySerialNumber.value,
          secondaryAttachments: inputList.secondaryAttachments.value,
          notes: inputList.notes.value
        };

        // Log the request body to the console
        console.log("Request Body", requestData);

    axios
      // Make a POST request to the API to create a new item
      .post(`${process.env.ITEM_API_URL}/items`, requestData)
      .then(response => {
      //  Then push the new item onto the Item state items attribute, so it can be displayed in the item list
        store.report.items.push(response.data);
        // navigate back to the add page
        router.navigate("/add");
      })
      // If there is an error log it to the console
      .catch(error => {
        console.log("It puked", error);
      });
    })

    // event listener to show/hide requires maintenance
    // document.addEventListener('DOMContentLoaded', function() {
      const toggleRequiredMaintenance = document.getElementById('requiredMaintenance');
      const requiredMaintenanceFieldsVisibility = document.getElementById('requiredMaintenanceToggle');

      toggleRequiredMaintenance.addEventListener('change', function() {
        if (this.checked) {
          requiredMaintenanceFieldsVisibility.style.display = 'block';
          console.log("clicked");
        }
        else {
          requiredMaintenanceFieldsVisibility.style.display = 'none';
        }
      });
    // });

    // event listener to show/hide second item section
    // document.addEventListener('DOMContentLoaded', function() {
      const toggleRequiredSecondary = document.getElementById('requiredSecondary');
      const requiredSecondaryItemVisibility = document.getElementById('secondaryItemToggle');

      toggleRequiredSecondary.addEventListener('change', function() {
      if(this.checked) {
        requiredSecondaryItemVisibility.style.display = 'block';
      }
      else {
        requiredSecondaryItemVisibility.style.display = 'none';
      }
      });
    // });


    // event listener to show submit success message
    // document.addEventListener("submit", submitConfirm);
    // document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('add');
      const successMessage = document.getElementById('successMessage');

      form.addEventListener('submit', function(event) {
        event.preventDefault();

      successMessage.style.display = 'block';
    //   setTimeout(function() {
    //     successMessage.style.display = 'none';
    // }, 3000); // 3000 milliseconds = 3 seconds
      });
    // });
  }

  if (view === "update") {
    // Add an event handler for the update button on the form
      document.querySelector("form").addEventListener("update", event => {
        event.preventDefault();

        // Get the form elements
        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        axios
        // Create a GET request to the API to get the item info
        get(`${process.env.ITEM_API_URL}/items`)
          .then(response => {
            store.update.items = response.data;
            // Reload the existing page, firing the already hook
            // store.global.router.navigate("/update");


          //  Get the form elements
        const inputList = event.target.elements;
        console.log("Input Element List", inputList);

        // Create a request body object to send to the API - list of form fields
        const requestData = {
          name: inputList.name.value,
          maker: inputList.maker.value,
          model: inputList.model.value,
          serialNumber: inputList.serialNumber.value,
          modelNumber: inputList.modelNumber.value,
          powerType: inputList.powerType.value,
          requiredMaintenance: inputList.requiredMaintenance.value,
          frequencyOfMaintenance: inputList.frequencyOfMaintenance.value,
          maintenanceDate:  inputList.maintenanceDate.value,
          listOfPastMaintenanceDates: inputList.listOfPastMaintenanceDates.value,
          lastMaintenanceType: inputList.lastMaintenanceType.value,
          partsReplaced: inputList.partsReplaced.value,
          partsAcquiredFromBusinessName: inputList.partsAcquiredFromBusinessName.value,
          partsAcquiredFromBusinessURL: inputList.partsAcquiredFromBusinessURL.value,
          manualURL: inputList.manualURL.value,
          dateAcquired: inputList.dateAcquired.value,
          requiredSecondary: inputList.requiredSecondary.value,
          secondaryRelated: inputList.secondaryRelated.value,
          secondaryMaker: inputList.secondaryMaker.value,
          secondaryModelNumber: inputList.secondaryModelNumber.value,
          secondarySerialNumber: inputList.secondarySerialNumber.value,
          secondaryAttachments: inputList.secondaryAttachments.value,
          notes: inputList.notes.value
        };

        // Log the request body to the console
        console.log("Request Body", requestData);
          })
          .catch(error => {
            console.error("Error retrieving items", error);

            store.global.router.navigate("/report");
          });

        // Log the request body to the console
        console.log("Request Body", requestData);

        // populate the update form with retrieved data

    })

    // event listener to show/hide requires maintenance
    // document.addEventListener('DOMContentLoaded', function() {
      const toggleRequiredMaintenance = document.getElementById('requiredMaintenanceUpdate');
      const requiredMaintenanceFieldsVisibility = document.getElementById('requiredMaintenanceToggleUpdate');

      toggleRequiredMaintenance.addEventListener('change', function() {
        if (this.checked) {
          requiredMaintenanceFieldsVisibility.style.display = 'block';
          console.log("clicked");
        }
        else {
          requiredMaintenanceFieldsVisibility.style.display = 'none';
        }
      });
    // });

    // event listener to show/hide second item section
    // document.addEventListener('DOMContentLoaded', function() {
      const toggleRequiredSecondary = document.getElementById('requiredSecondary');
      const requiredSecondaryItemVisibility = document.getElementById('secondaryItemToggle');

      toggleRequiredSecondary.addEventListener('change', function() {
      if(this.checked) {
        requiredSecondaryItemVisibility.style.display = 'block';
      }
      else {
        requiredSecondaryItemVisibility.style.display = 'none';
      }
      });
    // });


    // event listener to show submit success message
    // document.addEventListener("submit", submitConfirm);
    // document.addEventListener('DOMContentLoaded', function() {
      const form = document.getElementById('update');
      const successMessage = document.getElementById('successMessage');

      form.addEventListener('update', function(event) {
        event.preventDefault();

      axios
      // Make a PUT request to the API to update the item
      .put(`${process.env.ITEM_API_URL}/items`, requestData)
      .then(response => {
      //  Then push the updated item onto the Item state items attribute, so it can be displayed in the item list
        store.report.items.push(response.data);
        // navigate to the report page to view change has been made
        router.navigate("/report");
      })
      // If there is an error log it to the console
      .catch(error => {
        console.log("It puked", error);
      });
      successMessage.style.display = 'block';
    //   setTimeout(function() {
    //     successMessage.style.display = 'none';
    // }, 3000); // 3000 milliseconds = 3 seconds
      });
    // });
  }

      router.updatePageLinks();

    if (view === "report") {
      addDeleteButtonHandler();
      addUpdateButtonHandler();
    }

    // add menu toggle to bars icon in nav bar
    document.querySelector(".fa-bars").addEventListener("click", () => {
        document.querySelector("nav > ul").classList.toggle("hidden--mobile");
    });
  }
});

router.on({
  "/": () => render(),
  // The :view slot will match any single URL segment that appears directly after the domain name and a slash
  '/:view': function(match) {
    console.info("Route handler executing");
    // If URL is '/about-me':
    // match.data.view will be 'about-me'
    // Using Lodash's camelCase to convert kebab-case to camelCase:
    // 'about-me' becomes 'aboutMe'
    const view = match?.data?.view ? camelCase(match.data.view) : "home";

    // If the store import/object has a key named after the view
    if (view in store) {
      // Then the invoke the render function using the view state, using the view name
      render(store[view]);
    } else {
      // If the store
      render(store.viewNotFound);
      console.log(`View ${view} not defined`);
    }
  }
}).resolve(); // fires Navigo off
