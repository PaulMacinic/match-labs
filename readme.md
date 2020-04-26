# Week4 exercise3

### PART I

The form on the Account page is at the moment taking in static data from mocks.js.

We would like pass dynamic data to it so that the form can build itself based on the type of account that is currenlty logged in.
The data should come from the user object stored in the Context.

### PART II

At the moment, on submit, the `Account` form just logs the values.

Create a new request function that sends the data to the `edit candidate endpoint`.
The endpoint for the editCandidate is:
`https://match-labs-api.herokuapp.com/api/candidates/:id`

Make sure the method you are using is `PUT`.

When clicking on `Submit`, the Account form should send the data to the API and edit the current user.
