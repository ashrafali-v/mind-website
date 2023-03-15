# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `Plugins used`

react-svg - To create svg's as components , so that it cxan use more handy

### `Deployment`

Deployed in AWS amplify and code is accessing from github master repository for the continues integration and continues deployment

### `Why search?`

I have chosen to create a search functionality for the page,

I believe it is one of the most helping functionality when ever we visit web pages with multiple folds down to scroll.

How I solved the search?

- I have created a object array for all the data inside the website.
- The object conatins an id and a value, id used as element id and value is the string itself inside the element
- When ever a search enter, get the key and pass it inside the loop of the array.
- used javascript includes method on each string inside the loop to check the key is present or not.
- To make sure the search is case in sensitive, make both string and key to lower case by using toLowerCase() method of Javascript.
- Once a mach found push the id in to a temp array.
- loop thorugh temp array and used document.getElementById().style property of Javascript to apply a background color(yellow).
- Then scroll the page to the first match in the page by using javascript scrollIntoView() method
- Done

### `To run the project`

1.npm i
2.npm run start

### `To test the project`

1.npm run test

- Test is written by using jest with react testing library,
- Have wrote one test case to check the page rendered correctly.
- Have wrote another test case for the search is calling with expected keyword
