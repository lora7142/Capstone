import html from "html-literal";
import axios from "axios";
import * as store from "../store";

export default state => html`
  <section id="report">
    <h2 class="reportHeader">List of Items</h2>
    <table id="reports">
      ${state.items
        .map(item => {
          return `<tr>
          <table class="reportStyle">
            <tr><td>Item Name: </td><td> ${item.name}</td></tr>
            <tr><td>Item Maker: </td><td>${item.maker}</td></tr>
            <tr><td>Item Model: </td><td>${item.model}</td></tr>
            <tr><td>Serial #: </td><td>${item.serialNumber}</td></tr>
            <tr><td>Model #: </td><td>${item.modelNumber}</td></tr>
            <tr><td>Power Type: </td><td>${item.powerType}</td></tr>
            <tr><td>Required Maintenance: </td><td>${item.requiredMaintenance}</td></tr>
            <tr><td>Frequency of Maintenance: </td><td>${item.frequencyOfMaintenance}</td></tr>
            <tr><td>Maintenance Date: </td><td>${item.maintenanceDate}</td></tr>
            <tr><td>Last Maintenance Dates: </td><td>${item.listOfPastMaintenanceDates}</td></tr>
            <tr><td>Last Maintenance Type: </td><td>${item.lastMaintenanceType}</td></tr>
            <tr><td>Parts Replaced: </td><td>${item.partsReplaced}</td></tr>
            <tr><td>Parts Acquired From Business Name: </td><td>${item.partsAcquiredFromBusinessName}</td></tr>
            <tr><td>Parts Acquired From Business URL: </td><td>${item.partsAcquiredFromBusinessURL}</td></tr>
            <tr><td>Item Manual URL: </td><td>${item.manualURL}</td></tr>
            <tr><td>Date Acquired: </td><td>${item.dateAcquired}</td></tr>
            <tr><td>Required Secondary: </td><td>${item.requiredSecondary}</td></tr>
            <tr><td>Secondary Related: </td><td>${item.secondaryRelated}</td></tr>
            <tr><td>Secondary Maker: </td><td>${item.secondaryMaker}</td></tr>
            <tr><td>Secondary Model #: </td><td>${item.secondaryModelNumber}</td></tr>
            <tr><td>Secondary Serial #: </td><td>${item.secondarySerialNumber}</td></tr>
            <tr><td>Secondary Attachments: </td><td>${item.secondaryAttachments}</td></tr>
            <tr><td>Notes: </td><td>${item.notes}</td></tr>
            <tr>
              <td><div class="editButton" data-id="${item._id}" data-name="${item.name}" />Edit Item</div></td>
              <td><div class="deleteButton" data-id="${item._id}" data-name="${item.name}" />Delete Item</div><td>
            </tr>
            </table>
            <tr><td><br><br></td></tr>
            </table>
          </tr>
        `;
        })
        .join("")}
    </table>
  </section>
`;

// document.querySelectorAll(".editButton").forEach(domElement => {
//   domElement.addEventListener("click", async event => {
//     // const { id, name } = event.target.dataset;

// if (confirm(`Are you sure you want to update this item for ${name}?`)) {

// await axios
//   .get(`${process.env.ITEM_API_URL}/items/${id}`)
//   .then(async updateResponse => {
//     if (updateResponse.status === 200) {
//       console.log(`Item ${id} was successfully updated`);
//     }
//     // Update the list of items after updating the item
//     await axios
//       .get(`${process.env.ITEM_API_URL}/items`)
//       .then(response => {
//         store.update.items = response.data;
//         // Reload the existing page, firing the already hook
//         store.global.router.navigate("/report");
//       })
//       .catch(error => {
//         console.error("Error retrieving items", error);

//         store.global.router.navigate("/report");
//       });
//   })
//   .catch(error => {
//     console.error("Error updating item", error);

//     store.global.router.navigate("/report");
//   });
// send user to the update page
// store.global.router.navigate("/update");
// }
//     });
//   });
// }

export function addDeleteButtonHandler() {
  document.querySelectorAll(".deleteButton").forEach(domElement => {
    domElement.addEventListener("click", async event => {
      const { id, name } = event.target.dataset;

      if (confirm(`Are you sure you want to delete this item for ${name}?`)) {
        await axios
          .delete(`${process.env.ITEM_API_URL}/items/${id}`)
          .then(async deleteResponse => {
            if (deleteResponse.status === 200) {
              console.log(`Item ${id} was successfully deleted`);
            }

            // Update the list of items after removing the item
            await axios
              .get(`${process.env.ITEM_API_URL}/items`)
              .then(response => {
                store.report.items = response.data;
                // Reload the existing page, firing the already hook
                store.global.router.navigate("/report");
              })
              .catch(error => {
                console.error("Error retrieving items", error);

                store.global.router.navigate("/report");
              });
          })
          .catch(error => {
            console.error("Error deleting item", error);

            store.global.router.navigate("/report");
          });
      }
    });
  });
}
