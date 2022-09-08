# Part of Speech

This app is an interactive activity that helps the students practice categorizing a set of words according to their part of speech.

This app was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

 
This app deployed on [Heroku](https://part-of-speetch.herokuapp.com).

## I Used

* React.js, ContextApi, node.js, TypeScript, and Express.js
* Axios, react-toastify, and styled-components

## To run the app, go to the terminal:

1- Clone The repo
   * `git clone https://github.com/MahmoudEasa/part-of-speech.git`

2- Go to the server directory
   * `cd part-of-speech/server`
   * `npm install`

3- Run the server
   * `npm start or yarn start`

4- In a new terminal Go to the client directory
   * `cd part-of-speech/client`
   * `npm install`
   
5- Run the client
   * `npm start or yarn start`

## To ues the app:
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### The Express App (server side) has:

`words endpoint:` provides an endpoint that returns a list of 10 objects selected randomly from the "wordsList". The array includes at least 1 adjective, 1 adverb, 1 noun, and 1 verb.

`rank endpoint:` provides an endpoint that takes the final score in the request body, and responds back with the rank% rounded to the nearest hundredth.



### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
