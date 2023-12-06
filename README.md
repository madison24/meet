# Objective
A serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Google Calendar API to fetch upcoming events.

1. Who — The users of the Meet app. 
2. What — A progressive web app with the ability to work offline and a serverless backend
developed using a TDD technique.
3. When — Users of this app will be able to use it whenever they want to view upcoming events
for a specific city. 
4. Where — The server, in this case, is a serverless function hosted by a cloud provider (e.g.,
AWS). The application itself is also hosted online to make it shareable and installable. It can
be used even when the user is offline. As it’s responsive, it displays well on any device.
5. Why — Serverless is the next generation of cloud infrastructure, PWA provides great user
experience and performance.

# Features
## Feature 1: Filter Events By City
As a user, I should be able to filter events by city, so that I can see a list of events taking place in that city.
- Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.
    - Given - user hasn’t searched for any city
    - When - the user opens the app
    - Then - the user should see a list of upcoming events
- Scenario 2: User should see a list of suggestions when they search for a city.
    - Given - the main page is open
    - When - user starts typing in the city textbox
    - Then - the user should receive a list of cities (suggestions) that match what they’ve typed
- Scenario 3: User can select a city from the suggested list.
    - Given - user was typing “Berlin” in the city textbox AND the list of suggested cities is showing
    - When - the user selects a city (e.g., “Berlin, Germany”) from the list
    - Then - their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city

## Feature 2: Show/Hide Event Details
As a user, I should be able to show/hide an events details, so that I can learn more about the event taking place.
- Scenario 1: An event element is collapsed by default.
    - Given - user is viewing list of events
    - When - no action is taken by the user
    - Then - event details are hidden by default
 - Scenario 2: User can expand an event to see details
    - Given - user is looking at an event
    - When - user clicks "See details" on the event
    - Then - user sees details about the event clicked
 - Scenario 3: User can collapse an event to hide details
    - Given - user can see details of an event
    - When - user clicks "hide details" on the event
    - Then - user can longer see the event details

## Feature 3: Specify Number of Events
As a user, I should be able to specify the number of events displayed, so that I can view more or less events available.
- Scenario 1: When user hasn’t specified a number, 32 events are shown by default.
    - Given - user opens page of events
    - When - user hasn't changed the number of events shown 
    - Then - user sees 32 events on the page
 - Scenario 2: User can change the number of events displayed.
    - Given - user opens page of events
    - When - user selects number of events to be shown from a dropdown menu
    - Then - user sees specified number of events

## Feature 4: Use the App When Offline
As a user, I should be able to use the app offline, so that I can use that app when I have no internet.
- Scenario 1: Show cached data when there’s no internet connection.
    - Given - user is not connected to the internet
    - When - user opens app
    - Then - user can view data that was last saved
 - Scenario 2: Show error when user changes search settings (city, number of events).
    - Given - user is not connected to the internet
    - When - user changes search settings
    - Then - error message appears stating internet connection is needed to perform function

## Feature 5: Add an App Shortcut to the Home Screen
As the user, I should be able to add an app shortcut to the Home Screen, so that I can have easier access to the app.
- Scenario 1:  User can install the meet app as a shortcut on their device home screen
    - Given - user is on the app
    - When - user selects the option to add app shortcut to device homescreen
    - Then - app shortcut is available on the users homescreen
 
## Feature 6: Display Charts Visualizing Event Details
As the user, I should be able to view a chart of the number of upcoming events happening in my city, so that I can get an idea of what there is to do in my city.
- Scenario 1: Show a chart with the number of upcoming events in each city.
    - Given - user is on main events page
    - When - user selects overview of upcoming events in city
    - Then - user sees chart showing upcoming events 




