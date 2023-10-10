
# [Inventory Management](https://inventory-management-by-amlan.vercel.app/)

## [Replit](https://replit.com/@theweird0ne/Inventory-Management) (Inventory Management API)
This repository contains the code for a web application designed to help users to track their inventory, sales report, revenue generated, sales records etc.

## Features
1. Dashboard: Displays a summary of sales & inventory metrics, including total revenue earned, total inventory left, number of sales occured.
2. Inventory : Allows users to add, edit and remove items from inventory.
3. Sales: Allows users to add new sale records and view transaction history.

## API Endpoints
The application also exposes the following API endpoints:

1. /api/items
- GET: Fetches a list of items available in the inventory.
- POST: Adds a new item to the inventory.
2./api/items/:id
- DELETE: Removes an item from the inventory by it's unique ID.
- POST : Update the items details available in the inventory.
2. /api/sales
- GET: Fetches a sales records.
- POST: Adds a new sale record.

## Getting Started
To get started with the Inventory Management web application, you can clone this repository and install the dependencies:
```
https://github.com/theweird0ne/inventory-management.git
cd inventory-management
npm install
```
Then, you can start the development server:

```
npm start
```
The application will be running at http://localhost:3000

Contributing
Contributions are welcome! Please read the contribution guidelines: CONTRIBUTING.md for more information.

License
The Inventory Management web application is licensed under the MIT License.
