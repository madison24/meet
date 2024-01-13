Feature: Show/Hide Event Details

Scenario: An event element is collapsed by default. 
    Given the user is viewing the main page
    When no action is taken by the user
    Then event details are hidden by default

 Scenario: User can expand an event to see details.
    Given user is looking at an event
    When user clicks “See details” on the event
    Then user sees details about the event clicked

 Scenario: User can collapse an event to hide details.
    Given user can see details of an event
    When user clicks “Hide details” on the event
    Then user can no longer see the event details

