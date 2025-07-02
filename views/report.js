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
            <tr><td>Item Name: </td><td> ${item.itemName}</td></tr>
            <tr><td>Item Maker: </td><td>${item.itemMaker}</td></tr>
            <tr><td>Item Model: </td><td>${item.itemModel}</td></tr>
            <tr><td>Serial #: </td><td>${item.serialNumber}</td></tr>
            <tr><td>Model #: </td><td>${item.modelNumber}</td></tr>
            <tr><td>Power Type: </td><td>${item.itemPowerType}</td></tr>
            <tr><td>Last Maintenance Type: </td><td>${item.lastMaintenanceType}</td></tr>
            <tr><td>Parts Replaced: </td><td>${item.partsReplaced}</td></tr>
            <tr><td>Date Acquired: </td><td>${item.dateAcquired}</td></tr>
            <tr><td>Secondary Related: </td><td>${item.secondaryItemRelated}</td></tr>
            <tr><td>Secondary Maker: </td><td>${item.secondaryItemMaker}</td></tr>
            <tr><td>Secondary Model #: </td><td>${item.secondaryItemModelNumber}</td></tr>
            <tr><td>Secondary Serial #: </td><td>${item.secondaryItemSerialNumber}</td></tr>
            <tr><td>Secondary Attachments: </td><td>${item.secondaryAttachmentsForItem}</td></tr>
            <tr><td>Notes: </td><td>${item.notes}</td></tr>
            <tr>
              <td><div class="updateButton" data-id="${item._id}" data-name="${item.itemName}"/>Update Item</div></td>
              <td><div class="deleteButton" data-id="${item._id}" data-name="${item.itemName}" />Delete Item</div><td>
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

export function addDeleteButtonHandler() {
  document.querySelectorAll(".deleteButton").forEach(domElement => {
    domElement.addEventListener("click", async event => {
      const { id, name } = event.target.dataset;

      if (confirm(`Are you sure you want to delete this item for ${name}`)) {
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
                // Reload the existing page, thus firing the already hook
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
