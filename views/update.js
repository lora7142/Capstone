import html from "html-literal";
import { formSelect } from "../components";
import { options } from "../store";
import * as store from "../store";

export default state => {
  console.log("options", options);
  console.log("form select:", formSelect);
  return html`
    <section id="update">
      <h2 class="updateHeader">Update</h2>
      <form id="update">
        <div>
          <h3>Main Item Information</h3>
        </div>
        <div class="mainItem">
          <div><b>* Required</b></div>
          <div></div>
          <div>
            <label for="name">Item Name*:</label>
            <input
              type="text"
              name="name"
              id="name"
              value="${state.items.name}"
              required
            />
          </div>
          <div>
            <label for="maker">Item Maker*:</label>
            <input
              type="text"
              name="maker"
              id="maker"
              value="${state.items.maker}"
              required
            />
          </div>
          <div>
            <label for="model">Item Model*:</label>
            <input
              type="text"
              name="model"
              id="model"
              value="${state.items.model}"
              required
            />
          </div>
          <div>
            <label for="serialNumber">Serial Number:</label>
            <input
              type="text"
              name="serialNumber"
              id="serialNumber"
              value=${state.items.serialNumber}
            />
          </div>
          <div>
            <label for="modelNumber">Model Number:</label>
            <input
              type="text"
              name="modelNumber"
              id="modelNumber"
              value=${state.items.modelNumber}
            />
          </div>
          <div>
            <label for="powerType">Item Power Type*:</label>
            ${formSelect(
              "powerType",
              "powerType",
              options.powerTypeVals,
              false,
              state.items.powerType
            )}
          </div>
          <div>
            <input
              type="checkbox"
              name="requiredMaintenance"
              id="requiredMaintenance"
              value=${state.items.requiredMaintenance}
            />
            <label for="requiredMaintenance">Required Maintenance</label>
          </div>
          <div id="requiredMaintenanceToggleUpdate">
            <div>
              <label for="frequencyOfMaintenance"
                >Frequency of Maintenance:</label
              >
              ${formSelect(
                "frequencyOfMaintenance",
                "frequencyOfMaintenance",
                options.frequencyOfMaintenanceVals,
                false,
                state.items.frequencyOfMaintenance
              )}
            </div>
            <div>
              <label for="maintenanceDate">Maintenance Date:</label>
              <input
                type="date"
                id="maintenanceDate"
                name="trip-start"
                value=${state.items.maintenanceDate}
              />
            </div>
            <div>
              <label for="listOfPastMaintenanceDates"
                >List of Past Maintenance Dates:</label
              >
              <input
                name="listOfPastMaintenanceDates"
                id="listOfPastMaintenanceDates"
                value=${state.items.listOfPastMaintenanceDates}
              ></>
            </div>
          </div>
          <div>
            <label for="lastMaintenanceType">Last Maintenance Type:</label>
            ${formSelect(
              "lastMaintenanceType",
              "lastMaintenanceType",
              options.lastMaintenanceTypeVals,
              true,
              state.items.lastMaintenanceType
            )}
          </div>
          <div>
            <label for="partsReplaced">Parts Replaced:</label>
            ${formSelect(
              "partsReplaced",
              "partsReplaced",
              options.partsReplacedVals,
              true,
              state.items.partsReplaced
            )}
          </div>
          <div>
            <label for="partsAcquiredFromBusinessName"
              >Parts Acquired From Business Name:</label
            >
            <input
              type="text"
              name="partsAcquiredFromBusinessName"
              id="partsAcquiredFromBusinessName"
              value="${state.items.partsAcquiredFromBusinessName}"
            />
          </div>
          <div>
            <label for="partsAcquiredFromBusinessURL"
              >Parts Acquired From Business URL:</label
            >
            <input
              type="text"
              name="partsAcquiredFromBusinessURL"
              id="partsAcquiredFromBusinessURL"
              value=${state.items.partsAcquiredFromBusinessURL}
            />
          </div>
          <div>
            <label for="manualURL">Item Manual URL:</label>
            <input
              type="text"
              name="manualURL"
              id="manualURL"
              value=${state.items.manualURL}
            />
          </div>
          <div>
            <label for="dateAcquired">Date Acquired:</label>
            <input
              type="date"
              id="dateAcquired"
              name="dateAcquired"
              value=${state.items.dateAcquired}
            />
          </div>
        </div>
        <div>
          <h3>Secondary Item Information</h3>
        </div>
        <div>
          <input
            type="checkbox"
            name="requiredSecondary"
            id="requiredSecondary"
            value=${state.items.requiredSecondary}
          />
          <label for="requiredSecondary">Required Secondary Item</label>
        </div>
        <div id="secondaryItemToggleUpdate">
          <div class="secondaryItem">
            <div>
              <label for="secondaryRelated">Secondary Item Related:</label>
              <input
                type="text"
                name="secondaryRelated"
                id="secondaryRelated"
                value="${state.items.secondaryRelated}"
              />
            </div>
            <div>
              <label for="secondaryMaker">Secondary Item Maker:</label>
              <input
                type="text"
                name="secondaryMaker"
                id="secondaryMaker"
                value="${state.items.secondaryMaker}"
              />
            </div>
            <div>
              <label for="secondaryModelNumber"
                >Secondary Item Model Number:</label
              >
              <input
                type="text"
                name="SecondaryModelNumber"
                id="secondaryModelNumber"
                value=${state.items.secondaryModelNumber}
              />
            </div>
            <div>
              <label for="secondarySerialNumber"
                >Secondary Item Serial Number:</label
              >
              <input
                type="text"
                name="secondarySerialNumber"
                id="secondarySerialNumber"
                value=${state.items.secondarySerialNumber}
              />
            </div>
            <div>
              <label for="secondaryAttachments"
                >Secondary Attachments for Item:</label
              >
              <input type="text"
                name="secondaryAttachments"
                id="secondaryAttachments"
                value="${state.items.secondaryAttachments}"
              ></>
            </div>
          </div>
        </div>
        <div class="notes">
          <label for="notes">Notes:</label>
          <input
            name="notes"
            id="notes"
            value="${state.items.notes}"
          ></>
        </div>
        <div>
          <input type="submit" class="updateButton" value="Update Item" />
        </div>
        <div id="successMessage">
          Your item has been successfully updated!
        </div>
      </form>
    </section>
  `;
};
