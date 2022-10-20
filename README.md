# info-drop

This App allows users to create New Rumors by having them fill a form and making a call to store it in the API.

# Setup
* run `yarn` to install dependencies.
* and `yarn start` to start the application.

# Tech used
* I used `react-hook-form` to handle the form's validation, errors handling and events.
* For navigating between the pages I decided to use the `Button` components provided. I did this to make use of their `onClick` functionality to fire the events I needed to update the state and imported `react-router-dom` to handle navigation.
* In order to maintain the state throughout the pages I went for React's Provider and created a CustomContext with React's `createContext`.

# Given more time:
* I would have added more tests to the functionality of the form and mocked the state to verify certain scenarios. Also to the store's functions.
* Design didn't call for it but an error page or message when the api call failed would be a nicer user experience.

