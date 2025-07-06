import html from "html-literal";
import select from "../components";
import options from "../store";

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
          <select name="powerType" id="powerType" required size="1">
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
            unchecked
          />
          <label for="requiredMaintenance">Required Maintenance</label>
        </div>
        <div id="requiredMaintenanceToggle">
          <div>
            <label for="frequencyOfMaintenance"
              >Frequency of Maintenance:</label
            >
            <select
              name="frequencyOfMaintenance"
              id="frequencyOfMaintenance"
              size="1"
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
            ${select(
              "frequencyOfMaintenance",
              "frequencyOfMaintenance",
              options.frequencyOfMaintenanceVals
            )}
          </div>
          <div>
            <label for="maintenanceDate">Maintenance Date:</label>
            <input type="date" id="maintenanceDate" name="trip-start" />
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
          >
            <option value="None">None</option>
            <option value="Battery">Battery</option>
            <option value="Belt">Belt</option>
            <option value="Chain">Chain</option>
            <option value="Filter">Filter</option>
            <option value="Fuel Line">Fuel Line</option>
            <option value="Gasket">Gasket</option>
            <option value="Oil Change">Oil Change</option>
            <option value="Primer Bulb">Primer Bulb</option>
            <option value="Spark Plug Change">Spark Plug Change</option>
            <option value="Seal">Seal</option>
            <option value="Starter Motor">Starter Motor</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label for="partsReplaced">Parts Replaced:</label>
          <select name="partsReplaced" id="partsReplaced" multiple size="4">
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
            <textarea
              name="secondaryAttachments"
              id="secondaryAttachments"
              cols="40"
              rows="1"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="notes">
        <label for="notes">Notes:</label>
        <textarea name="notes" id="notes" cols="40" rows="1"></textarea>
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
