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

 



