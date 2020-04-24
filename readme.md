# Week3 assignment

In this assignment we create a form which will be used on the register a candidate, and to edit an existing candidate.
Please check the root folder and inside the `/lab-resources` folder you will find 2 images showcasing a preview of the final work.

The form will have to accept an object as a `inputs` prop. From this object, the form will have to build its own input fields.
You can find the example object in the mocks.js file.

The form should be a separate component called `<CandidateForm>` which will reside in a `Account` page that we must create as well. Make sure to include the apropriate `CandidateForm.module.css`

For each input of the form, we should have the possibility to display a default value, or a placeholder. The reason for this is that in our app we need to display the inputs with the default value on the "Edit account" page, while on the "Create candidate" page we will display the inputs that have a placeholder value.

The form will need to have a submit button, that when clicked, will pass all the data of the form, to the parent component, which in our case is the `Account` page.

As a final step, in the `Account` page `console.log()` the received values of the form.
