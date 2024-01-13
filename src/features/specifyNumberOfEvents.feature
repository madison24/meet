Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 events are shown by default. 
    Given user opens page of events
    When user hasn't changed the number of events shown
    Then user sees 32 events on the page

 Scenario: User can change the number of events displayed.
    Given user opens page of events
    When user selects number of events to be shown from a dropdown menu
    Then user sees specified number of events

