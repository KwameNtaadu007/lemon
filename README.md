# Little Lemon Reserve-a-Table Web App

## Overview

This Capstone project involves creating a React web application for reserving tables at a restaurant. It encompasses various stages, including project setup, version control with Git, user experience (UX) and user interface (UI) planning, wireframing, and design using Figma. The project emphasizes semantic HTML5 tags for structuring the code.

## Project Description

The "Little Lemon Reserve-a-Table" web app aims to provide users with a simple and efficient way to book tables at a restaurant. The app features a user-friendly form that allows users to select a reservation date and time, specify the number of guests, and provide information about the occasion. The submitted data is validated and then sent to a backend database using an API. Upon successful reservation, users receive a confirmation that includes their table number.

## Key Features

1. **FetchAPI:** Implements functionality to fetch reservation data from the backend.
2. **SubmitAPI:** Sends form data to the backend database and retrieves the assigned table number.
3. **InitializeTimes:** Defines a function that generates an array of available time slots from 17:00 to 22:00.
4. **Testing:** Includes a test script to verify the functionality of the Reserve-a-Table form.

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

- `npm start`: Runs the app in development mode at [http://localhost:3000](http://localhost:3000).
- `npx json-server --watch api/db.json --port 8000`: Starts a JSON server for fetching and performing CRUD operations on the `db.json` file at [http://localhost:8000](http://localhost:8000).
- `npm test`: Launches the test runner in interactive watch mode.

## Usage

To start using the "Little Lemon Reserve-a-Table" web app:

1. Run `npm start` to start the development server.
2. Run `npx json-server --watch api/db.json --port 8000` in a separate terminal to launch the JSON server.
3. Access the app at [http://localhost:3000](http://localhost:3000) in your web browser.

## Project Structure

- **src:** Contains the source code for the React application.
- **api:** Includes the database (`db.json`) and API-related files.
- **tests:** Houses test scripts for verifying application functionality.

