import html from "html-literal";

export default state => html`
  <section id="report">
    <h2>Report Section to Come</h2>
  </section>
  <table id="reports">
    <tr>
      <th>Item Name</th>
      <tr>Item Model</th>
    </tr>
    ${state.reports.map(report => {
      return `<tr>
      <td> ${report.itemName}</td>
      <td>${report.itemModel}</td>
      </tr>`;
    })}
  </table>
`;
