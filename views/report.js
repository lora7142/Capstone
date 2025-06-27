import html from "html-literal";

export default state => html`
  <section id="report">
    <h1 class="reportHeader">List of Items</h1>
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
      ${state.reports
        .map(report => {
          return `<tr>
        <td> ${report.itemName}</td>
        <td>${report.itemMaker}</td>
        <td>${report.itemModel}</td>
        <td>${report.serialNumber}</td>
        <td>${report.modelNumber}</td>
        <td>${report.itemPowerType}</td>
        <td>${report.lastMaintenanceType}</td>
        <td>${report.partsReplaced}</td>
        <td>${report.dateAcquired}</td>
        <td>${report.secondaryItemRelated}</td>
        <td>${report.secondaryItemMaker}</td>
        <td>${report.secondaryItemModelNumber}</td>
        <td>${report.secondaryItemSerialNumber}</td>
        <td>${report.secondaryAttachmentsForItem}</td>
        <td>${report.notes}</td>
        </tr>`;
        })
        .join("")}
    </table>
  </section>
`;
