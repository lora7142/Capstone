import html from "html-literal";

export default state => html`
  <section id="report">
    <h1 class="reportHeader">List of Items</h1>
    <h4>Formatting still needs work</h4>
    <table id="reports">
      <tr>
        <th>Item Name</th>
        <th>Item Maker</th>
        <th>Item Model</th>
        <th>Serial #</th>
        <th>Model #</th>
        <th>Power Type</th>
        <th>Last Maint. Type</th>
        <th>Parts Replaced</th>
        <th>Date Acq.</th>
        <th>Sec. Related</th>
        <th>Sec. Maker</th>
        <th>Sec. Model #</th>
        <th>Sec. Ser. #</th>
        <th>Sec. Attachments</th>
        <th>Notes</th>
      </tr>
      ${state.items
        .map(item => {
          return `<tr>
        <td> ${item.itemName}</td>
        <td>${item.itemMaker}</td>
        <td>${item.itemModel}</td>
        <td>${item.serialNumber}</td>
        <td>${item.modelNumber}</td>
        <td>${item.itemPowerType}</td>
        <td>${item.lastMaintenanceType}</td>
        <td>${item.partsReplaced}</td>
        <td>${item.dateAcquired}</td>
        <td>${item.secondaryItemRelated}</td>
        <td>${item.secondaryItemMaker}</td>
        <td>${item.secondaryItemModelNumber}</td>
        <td>${item.secondaryItemSerialNumber}</td>
        <td>${item.secondaryAttachmentsForItem}</td>
        <td>${item.notes}</td>
        </tr>`;
        })
        .join("")}
    </table>
  </section>
`;
