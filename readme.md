# Week 1 - Assignment

Create a Button component that we will be using in our MatchLabs app
(Check image in repo to see a preview of the end result)

The Button component is a customizable "wrapper" that will return a <button> html element.
Based on the props supplied, it should display different css styles.

### 1. The Button will take in 3 customizable values as follows:

- variant: string
value: "primary" or "secondary

- size: string
value "small" or "medium" or "huge"

- children:
value: html elements

### 2. The Button should be a functional component exported in the /components folder, and imported in

In order to succeed you will use a couple of concepts that we learned in the first lab:
- string literals
- import/export
- React functional components
- props

### Additional

In addition, I provided a .css file for the Button. This gets imported in the <Button> component as following:
import styles from Button.module.css

Example of using styles inside your component:
<button className={styles.variant}>

Another additional React feature that you will need is the React props.children prop.
Find out more about it here:
[React props.children](https://reactjs.org/docs/glossary.html#propschildren)
