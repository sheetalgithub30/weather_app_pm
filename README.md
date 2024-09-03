# 📌 Project Overview: Weather App

## 📌<span style="color:#29c4f6"> LIVE VIEW

###   [https://weather-app-pm.vercel.app/](https://weather-app-pm.vercel.app/)


## 📌 <span style="color:#29c4f6">SNAPSHOTS

<div style="width:900px ;">

1.  ![Screenshot 1](<./src/assets/ss1.png>)
</div>

<div style="width:900px ;">

2.  ![Screenshot 2](<./src/assets/ss2.png>)
</div>

<div style="width:900px ;">

3.  ![Screenshot 3](<./src/assets/ss3.png>)
</div>

<div style="width:900px ;">

4.  ![Screenshot 4](<./src/assets/ss4.png>)
</div>



## 📌<span style="color:#29c4f6"> Tech Stack:
 1. React: For building the user interface.
 2. React Icons: For incorporating icons like search and delete.
 3. Tailwind CSS: For styling the components.
 4. Fetch API: For making HTTP requests to retrieve weather data.

## 📌<span style="color:#29c4f6"> Features:
1. City List: Displays a list of cities with their weather data.
2. Fetch Weather Data: Fetches weather data for a city when the “Get Weather” button is clicked.
3. Search Functionality: Allows users to search for a city and highlight it.
4. Dynamic Styling: Changes the border color of the city based on whether its weather data has been fetched.
   

## 📌<span style="color:#29c4f6"> Working:

1. State Management:
citydata: Stores the list of cities and their status.
data: Stores the fetched weather data.
cityName: Stores the name of the city for which weather data is being fetched.
search: Stores the search input value.
2. Fetching Data:
The fetchData function is called whenever cityName changes. It fetches weather data from the API and updates the data state.
3. Get Weather:
The getWeather function finds the first city that hasn’t been fetched yet, sets it as cityName, and updates its status to true.
4. Search and Highlight:
The setBackground function highlights the city that matches the search input by setting its search property to true.
5. Timeout for Search Highlight:
A useEffect hook with a timeout is used to reset the search highlight after 3 seconds.


## 📌<span style="color:#29c4f6"> Installation:

1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies using npm install.
4. Start the development server using npm run dev.
5. Access the app in your browser at http://localhost:3000.

This project integrates of various React features and external APIs to create a functional and interactive application.