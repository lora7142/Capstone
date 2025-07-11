import html from "html-literal";
import { formSelect } from "../components";
import { options } from "../store";

export default () => html`
  <section id="add">
    <h2>Add</h2>
    <!-- Will look something like this: <form id="order" method="POST" action="https://sc-pizza-api.onrender.com/pizzas/form"> -->
    <form id="add" method="POST">
      <div>
        <h3>Main Item Information</h3>
      </div>
      <div class="mainItem">
        <div><b>* Required</b></div>
        <div></div>
        <div>
          <label for="name">Item Name*:</label>
          <input type="text" name="name" id="name" required />
        </div>
        <div>
          <label for="maker">Item Maker*:</label>
          <input type="text" name="maker" id="maker" required />
        </div>
        <div>
          <label for="model">Item Model*:</label>
          <input type="text" name="model" id="model" required />
        </div>
        <div>
          <label for="serialNumber">Serial Number:</label>
          <input type="text" name="serialNumber" id="serialNumber" />
        </div>
        <div>
          <label for="modelNumber">Model Number:</label>
          <input type="text" name="modelNumber" id="modelNumber" />
        </div>
        <div>
          <label for="powerType">Item Power Type*:</label>
          ${formSelect("powerType", "powerType", options.powerTypeVals)}
        </div>
        <div>
          <input
            type="checkbox"
            name="requiredMaintenance"
            id="requiredMaintenance"
            unchecked
          />
          <label for="requiredMaintenance">Required Maintenance</label>
        </div>
        <div id="requiredMaintenanceToggle">
          <div>
            <label for="frequencyOfMaintenance"
              >Frequency of Maintenance:</label
            >
            ${formSelect(
              "frequencyOfMaintenance",
              "frequencyOfMaintenance",
              options.frequencyOfMaintenanceVals
            )}
          </div>
          <div>
            <label for="maintenanceDate">Maintenance Date:</label>
            <input type="date" id="maintenanceDate" name="maintenanceDate" />
          </div>
          <div>
            <label for="listOfPastMaintenanceDates"
              >List of Past Maintenance Dates:</label
            >
            <input
              name="listOfPastMaintenanceDates"
              id="listOfPastMaintenanceDates"
            ></>
          </div>
        </div>
        <div>
          <label for="lastMaintenanceType">Last Maintenance Type:</label>
          ${formSelect(
            "lastMaintenanceType",
            "lastMaintenanceType",
            options.lastMaintenanceTypeVals,
            true
          )}
        </div>
        <div>
          <label for="partsReplaced">Parts Replaced:</label>
          ${formSelect(
            "partsReplaced",
            "partsReplaced",
            options.partsReplacedVals,
            true
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
          />
        </div>
        <div>
          <label for="manualURL">Item Manual URL:</label>
          <input type="text" name="manualURL" id="manualURL" />
        </div>
        <div>
          <label for="dateAcquired">Date Acquired:</label>
          <input type="date" id="dateAcquired" name="dateAcquired" />
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
          unchecked
        />
        <label for="requiredSecondary">Required Secondary Item</label>
      </div>
      <div id="secondaryItemToggle">
        <div class="secondaryItem">
          <div>
            <label for="secondaryRelated">Secondary Item Related:</label>
            <input type="text" name="secondaryRelated" id="secondaryRelated" />
          </div>
          <div>
            <label for="secondaryMaker">Secondary Item Maker:</label>
            <input type="text" name="secondaryMaker" id="secondaryMaker" />
          </div>
          <div>
            <label for="secondaryModelNumber"
              >Secondary Item Model Number:</label
            >
            <input
              type="text"
              name="SecondaryModelNumber"
              id="secondaryModelNumber"
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
            />
          </div>
          <div>
            <label for="secondaryAttachments"
              >Secondary Attachments for Item:</label
            >
            <input type="text"
              name="secondaryAttachments"
              id="secondaryAttachments"
            ></>
          </div>
        </div>
      </div>
      <div class="notes">
        <label for="notes">Notes:</label>
        <input name="notes" id="notes"></>
      </div>
      <div>
        <input type="submit" class="submit" value="Submit Item" />
      </div>
      <div id="successMessage">
        Your item has been successfully entered!
      </div>
    </form>
  </section>
`;
