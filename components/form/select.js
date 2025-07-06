import html from "html-literal";

export default (name, id, options, multiple = false, selected = []) => {
  const isMultiple = multiple ? "multiple" : "";
  const optionsHTML = options
    .map(option => {
      const isSelected = selected.includes(option) ? "selected" : "";
      return html`
        <option value="${option}" ${isSelected}>${option}</option>
      `;
    })
    .join("");

  return html`
    <select name="${name}" id="${id}" ${isMultiple} size="4">
      ${optionsHTML}
    </select>
  `;
};
