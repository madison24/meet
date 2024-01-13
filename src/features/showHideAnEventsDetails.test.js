import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, waitFor, within } from "@testing-library/react";
import Event from "../components/Event";
import { getEvents } from "../api";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");

defineFeature(feature, (test) => {
  // 1

  test("An event element is collapsed by default.", ({ given, when, then }) => {
    let AppComponent;

    given("the user is viewing the main page", () => {
      AppComponent = render(<App />);
    });

    when("no action is taken by the user", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("event details are hidden by default", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventDetails = AppDOM.querySelector(".details");
      expect(eventDetails).not.toBeInTheDocument();
    });
  });

  // 2
  test("User can expand an event to see details.", ({ given, when, then }) => {
    let events;
    let EventComponent;

    given("user is looking at an event", async () => {
      events = await getEvents();
      EventComponent = render(<Event event={events[0]} />);
      expect(
        EventComponent.container.querySelector(".details")
      ).not.toBeInTheDocument();
    });

    when("user clicks “See details” on the event", async () => {
      const seeDetails = EventComponent.queryByText("show details");
      const user = userEvent.setup();

      await user.click(seeDetails);
    });

    then("user sees details about the event clicked", () => {
      expect(
        EventComponent.container.querySelector(".details")
      ).toBeInTheDocument();
      expect(EventComponent.queryByText("hide details")).toBeInTheDocument();
    });
  });

  //  3
  test("User can collapse an event to hide details.", ({
    given,
    when,
    then,
  }) => {
    let EventComponent;
    let events;

    given("user can see details of an event", async () => {
      events = await getEvents();
      EventComponent = render(<Event event={events[0]} />);
      const user = userEvent.setup();

      await user.click(EventComponent.queryByText("show details"));
      expect(
        EventComponent.container.querySelector(".details")
      ).toBeInTheDocument();
    });

    when("user clicks “Hide details” on the event", async () => {
      const hideDetails = EventComponent.queryByText("hide details");
      const user = userEvent.setup();

      await user.click(hideDetails);
    });

    then("user can no longer see the event details", () => {
      expect(
        EventComponent.container.querySelector(".details")
      ).not.toBeInTheDocument();
      expect(
        EventComponent.queryByText("hide details")
      ).not.toBeInTheDocument();
    });
  });
});
