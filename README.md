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



