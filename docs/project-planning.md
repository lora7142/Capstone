- Write a Definition Statement
  - I want to build an application that is an inventory management tool to keep track of equipment used in the lawn and garden. It will also track if main parts are replaced (ie, engine), maintenance, parts replaced,  attachments, manuals, and parts dealers. This application will be designed to work on desktop and mobile displays.
- Define your Audience
  - Who is using my application
        Anyone that wants to keep track of resources at their home would use this application.
- Outline the content of the application
  - What do I want on each page?  (text / pics / images / navigation)
        The home page will have choices to add, update, delete, or query an item. Each additional page will expand on those navigation items with a form to add, update/delete, or query for a particular item based on the selection from the main page. The pages will be geared more to data and less images/pictures. I would like to include a weather API that gives the current weather conditions to show the user if it's a good day to use the items in the database, even if they might only be repairing/maintaining one. It will also include an About Me and Contact Us page.
  - What do I want the functionality of each page to be?
      -The Home page will have the weather API at the bottom. Above that it will show buttons so the user can select what function they would like to do, like add, update/delete, query and report on equipment.
      -Page 2 will be a form to allow the user to enter in all of the information for a piece of equipment and save it to the database.
      -Page 3 will use an autofill feature for the user to enter the equipment that they would like to update or delete. After the equipment has been populated from the database, it will display in an editable form to allow the user to update/delete information or the item.
      -Page 4 will have a form like the add page, so the user can autofill the information from the database and run a report on the item. It will pull up the item information in a non-editable form for the user to view.
      -Page 5 will show the About Us and Contact Us information.
  - What is the purpose of my application?
        It keeps track of any equipment that runs on gas, battery, or electric and lives in the shed or is used in the garden or for the lawn. It will be categorized as lawn and garden in the database (behind the scenes) to allow for future expansion to cover items in the house and garage. It will contain all item information like purchase date, model, make, serial number, model number, maintenance frequency, last time maintenance was performed, what type of parts were replaced, when and from where the parts were acquired, etc.
  - What business problem or real world problem am I going to be solving?
        This will hook up to a database and allow a user to add, update, delete, or query an item and show a report. This type of application can be repurposed to most anything that requires a database to store, parse, add, and delete data.
  - Define the attributes of your website
    - Color Palette - #0D0A0B #F3EFF5 #72B01D #507C13
    - Images - No images will be included but buttons will allow the user to pick the page that they want to go to as far as adding, updating, deleting, or searching for an item.
    - Fonts - Roboto - Clean and simple
    - Logos - No logos as this isn't a company site
    - Navigation - The top nav bar for all pages will include links to add, update/delete, search/report for an item, and contact and about us page.
- Create and provide link to [User Story Map](https://app.mural.co/template/c5cae3de-aeb4-487f-86da-35aa333d11f6/9ee833d5-2629-40ea-a239-6308d3a60980) in Mural
  -Link to my Mural Storyboard: https://app.mural.co/t/savvyfsuserstorymapcapstone0433/m/savvyfsuserstorymapcapstone0433/1746728379279/7dd67e2e90cee2882a4da91875e3b88ce1fa097b?sender=ua9ad939836e3a44a06793332
- Research the following:
  - List Applications Researched: (links to websites / applications)
    -https://www.sortly.com/
    -https://www.getencircle.com/
    -https://theblueplum.com/mac/homeinventory/
    -https://nestegg.cloud/
    -https://maddysoft.com/mystuff/index.php
    -https://apps.apple.com/us/app/inventory-manager/id1246752474?mt=12
    -https://mementodatabase.com/
    -https://undermyroof.app/
    -https://ninesliving.com/nines-household-management-app/
    -https://gocodes.com/mobile-asset-tracking/?srsltid=AfmBOorOqCAKsCba7EIdjfVa70BEZtOD9K_tSZkj4XDr8ZD5hTTfASGW
  - List what you like about each site:
    -https://theblueplum.com/mac/homeinventory/
      -Has multiple location option
      -color-coded custom tags
      -photo and receipt upload capability
      -Item depreciation
      -Charts
      -Journals
      -Reports
      -Event Scheduling
      -Insurance and Claims
      -Packing List
      -Estate Planning
      -Drag and Drop images or documents from Finder or Apple photos
    -https://www.sortly.com/
      -Ability to upload existing inventory
      -Organize by location and type
      -Custom fields
      -Barcode and QR Code scanner
      -Alert when low stock
      -Reporting on history
      -Reports export as PDF or CSV
    -https://www.getencircle.com/
      -Ability to add photos, videos and notes
      -Ability to sketch 2D floor plans and measurements
    -https://nestegg.cloud/
      -Pre-populated item selection and ability to look up based on barcodes
      -Intuitive
      -Easily works across many devices and OSs
      -Available in 32 languages
      -Contact information
      -Barcode scanning
    -https://maddysoft.com/mystuff/index.php
      -No subscriptions
      -Open asset management for various collections of items
      -Autofill and bulk editing
      -Ability to import existing data using .csv, .xlsx, or .ods files
      -user defined actions to keep track of events like donating, lending, selling, using, or repairing items
      -Ability to add file attachments
      -Set up alarms for warranty reminders
      -Share data with others
      -Customizable list
      -Ability to apply colors to categories, actions, or individual items to make them stand out
      -See a summary of the item list you are viewing. See counts, totals, averages, minimum, and maximum values
      -Protect access to your data with a passcode
    -https://apps.apple.com/us/app/inventory-manager/id1246752474?mt=12
      -Stores all personal data directly on user's Mac
      -Ability to save product manuals, receipts, warranty information, purchase date, maintenance logs, repair information and other important product details
    -https://mementodatabase.com/
      -Customizable data views
      -Ability to design own data structure
      -Works with Google Sheets and Docs
      -Can utilize camera, barcode scanning, and GPS for enhanced data collection
      -Available offline also
      -Can be used for business use for inventory management, CRM, project management, asset tracking, HR management, and production planning
      -Can be used for personal use for task management, collection cataloging, home inventory, health tracking, event planning and travel planning
      -Customizable with JavaScript
    -https://undermyroof.app/
      -Stores warranty information, photos, receipts, and serial numbers
      -Includes home info like assessment history, square footage, and photos
      -Ability to attach user manuals, mortgage/rental agreements, and receipts
      -Ability to store renovation information like contractor information, cost, before and after photos, individual parts and supplies used
      -Ability to create schedules for maintenance and repair histories
    -https://ninesliving.com/nines-household-management-app/
      -Log anything that happens on property
      -Add task to to-do list
      -Get notifications about completed tasks
    -https://gocodes.com/mobile-asset-tracking/?srsltid=AfmBOorOqCAKsCba7EIdjfVa70BEZtOD9K_tSZkj4XDr8ZD5hTTfASGW
      -user friendly
      -Automated location tracking
      -Works with QR Codes, RFID, GPS, and BLE
  - List what you do not like about each site:
    -https://theblueplum.com/mac/homeinventory/
      -Overload of information to navigate in dashboard
    -https://www.sortly.com/
      -Geared toward small business and not home
    -https://www.getencircle.com/
      -Geared toward home restoration to be used by field techs, project managers, estimators, and office admins, not for every day home
    -https://nestegg.cloud/
      -Geared toward business stock management, not home
        -Industries it is for are retail, healthcare, logistics, and IT
      -https://maddysoft.com/mystuff/index.php
        -Limited number of items can be entered
        -Must purchase upgrades for what would be considered basic functionality
    -https://apps.apple.com/us/app/inventory-manager/id1246752474?mt=12
      -Geared only toward Mac OS
    -https://mementodatabase.com/
      -Free pan only includes 100 mb cloud storage
    -https://undermyroof.app/
      -Geared toward Mac OS
      -Yearly subscription requirement
    -https://ninesliving.com/nines-household-management-app/
      -Limited capability but seems easy to navigate
    -https://gocodes.com/mobile-asset-tracking/?srsltid=AfmBOorOqCAKsCba7EIdjfVa70BEZtOD9K_tSZkj4XDr8ZD5hTTfASGW
      -Requires pricy subscription plan
      -Geared toward mobile phone
      -Limited capability
  - How my application will be different: My application will be streamlined to exactly what I need to keep track of equipment at home in the lawn and garden area. It will allow me to customize the application specifically to my needs and add fields to the code as needed. I need to keep track of equipment, parts, attachments, and maintenance.
- Create wireframes and provide link for each page (minimum of 4-5 pages) including Home, About Me, Contact Us and 1-2 other pages demonstrating the specific functionality of your capstone's purpose
	-https://xd.adobe.com/view/44482dfc-c4f5-4920-b9de-3734478aaaec-111b/
- Create and provide link to User Flow Diagram
  -The link for the User Flow Diagram is https://github.com/lora7142/Capstone/blob/master/docs/Lora%20Capstone.drawio
- Create and provide link to [SWOT Analysis](https://docs.google.com/document/d/1K5ix6TZr2l2LnPKNnVj8PRzfkQoVlEwFBbynrA5aj44/edit?usp=sharing)
	-The link for SWOT is https://docs.google.com/document/d/1Mxv2-mblEAZgH6VybPjYUe0iyeVr3dPghP7wbvc4n2A/edit?usp=sharing

List of vars:
Item name
item maker
item model
serial number
model number
Item power type
	gas
	electric
	battery
additional item related
additional item maker
additional item model number
additional item serial number
additional attachments for item
required maintenance
frequency of maintenance
	yearly
	every 6 months
	every 4 months
	every 3 months
	monthly
	weekly
maintenance date
list of maintenance dates
last maintenance type
	oil change
	spark plug change
	filter
	primer bulb
	fuel line
	chain
	belt
	gasket
	seal
	starter motor
	battery
parts replaced
	spark plug
	oil filter
	air filter
	fuel filter
	primer bulb
	fuel line
	chain
	belt
	gasket
	seal
	starter motor
	battery
	recoil starter cord
	blade
	tires
	light bulb
parts aquired from  business name
parts aquired from business URL
item manual URL
Date aquired
Notes
