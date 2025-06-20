import html from "html-literal";

export default () => html`
  <section id="add">
    <h1>Add</h1>
    <!-- need to configure the POST to DB when I learn more about DBs -->
    <!-- Will look something like this: <form id="order" method="POST" action="https://sc-pizza-api.onrender.com/pizzas/form"> -->
    <form id="add" method="POST">
      <div>
        <h3>Main Item Information</h3>
      </div>
      <div class="mainItem">
        <div>
          <label for="itemName">Item Name:</label>
          <input type="text" name="itemName" id="itemName" required />
        </div>
        <div>
          <label for="itemMaker">Item Maker:</label>
          <input type="text" name="itemMaker" id="itemMaker" required />
        </div>
        <div>
          <label for="itemModel">Item Model:</label>
          <input type="text" name="itemModel" id="itemModel" required />
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
          <label for="itemPowerType">Item Power Type:</label>
          <select name="itemPowerType" id="itemPowerType" required>
            <option value=""></option>
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
            value="optin"
            id="requiredMaintenance"
            unchecked
          />
          <label for="requiredMaintenance">Required Maintenance</label>
        </div>
        <div id="requiredMaintenanceHidden">
          <div>
            <label for="frequencyOfMaintenance"
              >Frequency of Maintenance:</label
            >
            <select name="frequencyOfMaintenance" id="frequencyOfMaintenance">
              <option value=""></option>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Every 3 Months">Every 3 Months</option>
              <option value="Every 4 Months">Every 3 Months</option>
              <option value="Every 6 Months">Every 3 Months</option>
              <option value="Yearly">Yearly</option>
              <option value="Other">Other</option>
            </select>
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
          <label for="LastMaintenanceType">Last Maintenance Type:</label>
          <select name="LastMaintenanceType" id="LastMaintenanceType" multiple>
            <option value=""></option>
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
          <select name="partsReplaced" id="partsReplaced" multiple>
            <option value=""></option>
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
          <label for="itemManualURL">Item Manual URL:</label>
          <input type="text" name="itemManualURL" id="itemManualURL" />
        </div>
        <div>
          <label for="dateAcquired">Date Acquired:</label>
          <input type="date" id="dateAcquired" name="trip-start" />
        </div>
      </div>
      <div>
        <h3>Secondary Item Information</h3>
      </div>
      <div id="SecondaryItemHidden">
        <div>
          <input
            type="checkbox"
            name="requiredSecondaryItem"
            value="optin"
            id="requiredSecondaryItem"
            unchecked
          />
          <label for="requiredSecondaryItem">Required Secondary Item</label>
        </div>
        <div class="secondaryItem">
          <div>
            <label for="secondaryItemRelated">Secondary Item Related:</label>
            <input
              type="text"
              name="secondaryItemRelated"
              id="secondaryItemRelated"
            />
          </div>
          <div>
            <label for="secondaryItemMaker">Secondary Item Maker:</label>
            <input
              type="text"
              name="secondaryItemMaker"
              id="secondaryItemMaker"
            />
          </div>
          <div>
            <label for="secondaryItemModelNumber"
              >Secondary Item Model Number:</label
            >
            <input
              type="text"
              name="SecondaryItemModelNumber"
              id="secondaryItemModelNumber"
            />
          </div>
          <div>
            <label for="secondaryItemSerialNumber"
              >Secondary Item Serial Number:</label
            >
            <input
              type="text"
              name="secondaryItemSerialNumber"
              id="secondaryItemSerialNumber"
            />
          </div>
          <div>
            <label for="secondaryAttachmentsForItem"
              >Secondary Attachments for Item:</label
            >
            <textarea
              name="secondaryAttachmentsForItem"
              id="secondaryAttachmentsForItem"
              cols="30"
              rows="5"
            ></textarea>
          </div>
        </div>
        <div>
          <label for="notes">Notes:</label>
          <textarea name="notes" id="notes" cols="30" rows="5"></textarea>
        </div>
      </div>
      <div>
        <input type="submit" class="submit" value="Submit" />
      </div>
    </form>
  </section>
`;
