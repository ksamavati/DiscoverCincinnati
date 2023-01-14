# Discover Cincinnati

http://discovercinci.com

As the final capstone project at Kable Academy, I was tasked with creating a tourism website in React for the city of Cincinnati with a Node API and a database. The frontend client is built on modern React 18.2 in Babel JavaScript using only functional components with hooks and local React state management, and routing is handled with react-router-dom.

Features an interactive Map page that integrates react-google-maps which parses locations from our database and drops pins at their coordinates that link to their associated pages in the app. Locations pages are generated dynamically using data from our backend API, and real-time reviews and up-to-date business data are populated from calls to the Google Places API.

Used OpenAI's DaVinci model to generate original business descriptions and other page content, as well as parse data into JSON format for our backend.

Video content edited in Adobe Premiere Pro 2022, image content in Adobe Photoshop 2022.

Assets sourced from:

- BoxIcons
- RemixIcon
- BootstrapMade

## Getting Started

- Create a database on MongoDB
- Create a Google Maps API key
- Make sure Node Package Manager is installed
- Create a file called `.env` in the root directory and copy `.env.example` contents into it, and populate your API key(s) and MongoDB URI.
- Run `npm i` in the project root directory to install dependencies.

## Run development build

- Start backend with `npm start`, leave this terminal running.
- Open a new terminal tab/window and start frontend with `npm run dev`.
- App should now be hosted at http://localhost:3000/

## Run production build

- Generate production build with `npm run build`
- Start backend with `npm start`
- App should now be hosted at http://localhost:5000/
