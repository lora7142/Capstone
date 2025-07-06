import html from "html-literal";
import formSelect from "../components";
import * as store from "../store";

export default state => {
  console.log(store.options);
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
            <select
              name="powerType"
              id="powerType"
              required
              size="1"
              value=${state.items.powerType}
            >
              <option value="Battery">Battery</option>
              <option value="Electric">Electric</option>
              <option value="Gas">Gas</option>
              <option value="Other">Other</option>
            </select>
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
              <select
                name="frequencyOfMaintenance"
                id="frequencyOfMaintenance"
                size="1"
                value=${state.items.frequencyOfMaintenance}
              >
                <option value="None">None</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
                <option value="Every 3 Months">Every 3 Months</option>
                <option value="Every 4 Months">Every 4 Months</option>
                <option value="Every 6 Months">Every 6 Months</option>
                <option value="Yearly">Yearly</option>
                <option value="Other">Other</option>
              </select>
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
              <textarea
                name="listOfPastMaintenanceDates"
                id="listOfPastMaintenanceDates"
                cols="30"
                rows="5"
                value=${state.items.listOfPastMaintenanceDates}
              ></textarea>
            </div>
          </div>
          <div>
            <label for="lastMaintenanceType">Last Maintenance Type:</label>
            <select
              name="lastMaintenanceType"
              id="lastMaintenanceType"
              multiple
              size="4"
              value=${state.items.lastMaintenanceType}
            >
            </select>
            ${formSelect(
              "lastMaintenanceType",
              "lastMaintenanceType",
              store.options.lastMaintenanceTypeVals,
              true,
              state.items.lastMaintenanceType
            )}
          </div>
          <div>
            <label for="partsReplaced">Parts Replaced:</label>
            <select
              name="partsReplaced"
              id="partsReplaced"
              multiple
              size="4"
              value=${state.items.partsReplaced}
            >
              <option value="None">None</option>
              <option value="Air Filter">Air Filter</option>
              <option value="Battery">Battery</option>
              <option value="Belt">Belt</option>
              <option value="Blade">Blade</option>
              <option value="Chain">Chain</option>
              <option value="Fuel Filter">Fuel Filter</option>
              <option value="Fuel Line">Fuel Line</option>
              <option value="Gasket">Gasket</option>
              <option value="Light Bulb">Light Bulb</option>
              <option value="Oil Filter">Oil Filter</option>
              <option value="Primer Bulb">Primer Bulb</option>
              <option value="Recoil Starter Cord">Recoil Starter Cord</option>
              <option value="Spark Plug">Spark Plug</option>
              <option value="Seal">Seal</option>
              <option value="Starter Motor">Starter Motor</option>
              <option value="Tires">Tires</option>
              <option value="Other">Other</option>
            </select>
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
            name="requiredSecondaryUpdate"
            id="requiredSecondaryUpdate"
            value=${state.items.requiredSecondaryUpdate}
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
              <textarea
                name="secondaryAttachments"
                id="secondaryAttachments"
                cols="40"
                rows="1"
                value="${state.items.secondaryAttachments}"
              ></textarea>
            </div>
          </div>
        </div>
        <div class="notes">
          <label for="notes">Notes:</label>
          <textarea
            name="notes"
            id="notes"
            cols="40"
            rows="1"
            value="${state.items.notes}"
          ></textarea>
        </div>
        <div>
          <input type="update" class="updateButton" value="Update Item" />
        </div>
        <div id="successMessage">
          Your item has been successfully updated!
        </div>
      </form>
    </section>
  `;
};
