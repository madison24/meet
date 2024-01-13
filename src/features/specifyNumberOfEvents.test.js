import { loadFeature, defineFeature } from "jest-cucumber";
import { render, waitFor, within } from "@testing-library/react";
import App from "../App";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  // 1

  test("When user hasn’t specified a number, 32 events are shown by default.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("user opens page of events", () => {
      AppComponent = render(<App />);
    });

    when("user hasn't changed the number of events shown", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      expect(EventListDOM).toBeInTheDocument();
    });

    then("user sees 32 events on the page", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");

      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });

  // 2
  test("User can change the number of events displayed.", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("user opens page of events", () => {
      AppComponent = render(<App />);
    });

    when(
      "user selects number of events to be shown from a dropdown menu",
      async () => {
        const AppDom = AppComponent.container.firstChild;
        const NumberOfEventsComponent =
          AppDom.querySelector("#number-of-events");
        const textbox = within(NumberOfEventsComponent).queryByRole("textbox");
        const user = userEvent.setup();

        await user.type(textbox, "{backspace}{backspace}10");
        expect(textbox).toHaveValue("10");
      }
    );

    then("user sees specified number of events", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole("listitem");
      expect(allRenderedEventItems.length).toEqual(10);
    });
  });
});
