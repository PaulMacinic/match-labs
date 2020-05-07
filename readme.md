# Week5 exercise I

On our /Account page we would like to have a Select input, that allows us to choose multiple technologies that are of interest for a candidate.

The select input should be pre-populated with technologies from a server endpoint that contains all the technologies created by the companies in the MatchLabs app. At the moment the endpoint is:
https://match-labs-api.herokuapp.com/api/technologies

When a candidate selects the technology options he wants and clicks "Submit", we should call the /editCandidate endpoint.
This endpoint should update the user with the selected technlogies and the rest of the information in the form.

In order not to reinvent the wheel, we will use a NPM package for our select that is called react-select.
Instructions regarding the usage can be found here:
https://react-select.com

In order to install this package in our project please navigate in your terminal to the root folder and run:

- npm i react-select

That should install it and add it to the package.json file located in your root folder.
