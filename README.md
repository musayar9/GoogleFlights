## Flight Filtering Application

This application is designed in a responsive layout suitable for both web and mobile screens, and is a React-based application where users can filter flight information according to specific criteria.

## Technologies Used

- **React** (v18.3.1) - For building the user interface
- **Material UI** (v6.4.2) - UI components for design
- **Axios** (v1.7.9) -  HTTP client for data fetching
- **Day.js** (v1.11.13) - Date and time formatting
- **React-Leaflet** (v4.2.1) & **Leaflet** (v1.9.4) - Map integration
- **React Loader Spinner** (v6.1.6) -  Loading indicators
- **@emotion/react & @emotion/styled** (v11.14.0) - CSS-in-JS styling
- **@mui/icons-material** (v6.4.2) - Material UI icons

## Data Sources

This application uses RapidAPI to fetch flight and airport information:

- **Flight Information:** [Scraper API](https://rapidapi.com/scraperapi-scraperapi-default/api/scraper-api/)
- **Airport Information:** [Flights Scraper API](https://rapidapi.com/fluggs-api/api/flights-scraper/)



## Environment Variables (.env)

You can store API keys and other sensitive information in a .env file like this:

```env
VITE_API_KEY=your_api_key_here
```

## Installation and Setup

Clone the project to your local environment:

```sh
git clone https://github.com/musayar9/GoogleFlights.git
cd GoogleFlights
```

Install dependencies:

```sh
npm install
```

Start the application:

```sh
npm start
```
### Usage


When you first open the application, a user-friendly flight filtering area will greet you. Through this section, you can set your flight preferences and quickly find the most suitable options:

**Flight Type:**  You can choose whether you want a one-way or round-trip flight.

**Number of Passengers:** You can filter available tickets based on the number of travelers.

**Cabin Class: :** Choose from options such as Economy, Premium Economy, Business, or First Class.

**Departure and Arrival Locations:** Select where you are traveling from and to, and set the relevant airports.

**Date Selection:** Choose dates that match your flight type to filter available flights.

Once the filters are set, the system will list the most suitable flights for you, saving you time.


