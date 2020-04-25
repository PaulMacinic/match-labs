# Week4 exercise1

Develop a way for a user to log out. When logging out we should notify the API, as well as our client.

The API endpoint for logging out is below. Make sure to use the DELETE method when making the request.
https://match-labs-api.herokuapp.com/api/users/sign_out

The suggested way of doing this exercise is by creating a /logout route.
When navigating to the /login route, the page mounts, and then you will clear the localstorage and make the apropriate request to the API.

When logging out, you should be navigated to the /login page.

In order to test this functionality just navigate to the /logout page.
