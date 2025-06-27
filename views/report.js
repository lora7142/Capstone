import html from "html-literal";

export default state => html`
  <section id="report">
    <h2>List of Items</h2>
    <table id="reports">
      <tr>
        <th>Item Name</th>
        <tr>Item Model</th>
      </tr>
      ${state.reports
        .map(report => {
          return `<tr>
        <td> ${report.itemName}</td>
        <td>${report.itemModel}</td>
        </tr>`;
        })
        .join("")}
    </table>
    </section>
`;
