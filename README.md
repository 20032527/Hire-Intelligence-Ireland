# Hire Intelligence Ireland - Tech Gadget Rental App

The Hire Intelligence Ireland is a simple and efficient system designed to help users rent technology devices such as laptops, cameras, tablets, and more. This application focuses on making short-term gadget rentals easy to manage for both administrators and customers. The app allows an administrator to manage a catalogue of gadgets such as adding new devices, updating information, changing availability, or removing old items. Customers can browse the available gadgets, book a rental, and later view their own rental history. The system is built to be straightforward, user-friendly, and suitable for both personal learning projects and small rental operations.

# Key Features

## Gadget Management (Admin Role)
Admins have full control over the gadget inventory.
### Add new gadgets (e.g., laptop, camera)
### Update gadget details such as name, price and availability
### Delete gadgets that are no longer offered
### View all gadgets 

## Gadget Browsing and Renting (Customer Role)
Customers using the system can:
### Browse the full list of available gadgets with details like price and features
### Rent a device for a selected period
### View their personal rental history, including past and ongoing rentals

# System Architecture

The MERN stack, which gives each component of the system a distinct function, is used in the construction of Hire Intelligence Ireland.
## Client (React.js)
The React frontend gives customers and the admin an easy interface to use.
All interactions with the backend happen through Axios, and React Router handles the page navigation.

## Server  (Node.js + Express.js)
The backend provides APIs for gadget management, rentals, and user login.
It handles all the main logic - checking availability, updating records, and making sure requests are processed safely.

### Database (MongoDB + Mongoose)
MongoDB stores everything: user accounts, gadgets, and rental history. Mongoose helps define clean and organised data models.

## Additional Features
User login is secured with JWT.
	
# Run application (command):
cd server
npm run prod

## Run Test
cd server
npm test

# References:https://www.udemy.com/share/10205m3@zaKYsBfJsgVYTpK_OLRPtVqu6KYrHXPJCIUyuMazy-TI8bX-yVXqz65FjkuiELDNMQ==/
https://www.w3schools.com/react/react_router.asp
https://www.w3schools.com/react/react_usecontext.asp
https://www.w3schools.com/react/react_forms.asp
https://www.w3schools.com/nodejs/nodejs_api_auth.asp
https://www.w3schools.com/nodejs/nodejs_express.asp
https://www.w3schools.com/mongodb/mongodb_nodejs_connect_database.php
https://www.w3schools.com/mongodb/mongodb_query_operators.php
https://www.tutorialspoint.com/jest/jest-react-testing.htm
https://www.digitalocean.com/community/tutorials/nodejs-jwt-expressjs


