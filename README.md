# NetflixGPT using React, GPT API , Google Firebase, TailWindCSS
## Step 1: Getting Started with Create React App
  npx create-react-app netflix-gpt
  In the project directory, you can run: npm start or npm run start
  Runs the app in the development mode.
  Open http://localhost:3000 to view it in your browser.

## Step 2: Install tailwind for create react app
   https://tailwindcss.com/docs/guides/create-react-app

## Step 3: Install React Router DOM
    npm i -D react-router-dom

## Step 4: Built Sign In/ Sign Up form using single form

## Step 5: Form Validation & useRef Hook usage
    Regex email validation: https://saturncloud.io/blog/how-can-i-validate-an-email-address-using-a-regular-expression/

    Here’s the regular expression we’ll be using:
      /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)

    Regex Password validation: https://regexr.com/3bfsi
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
## Step 6: Fire base
    https://console.firebase.google.com/u/0/project/my-netflixgpt-bd4ff/overview
    firebase.google.com => create project (Register app)
    create utils -> firebase.js (Add Firebase SDK)
    Install firebase CLI
    Deploy to Firebase Hosting
        firebase login          
              Firebase CLI v13.17.0 is incompatible with Node.js v16.15.0 Please upgrade Node.js to version >=18.0.0 || >=20.0.0 
                step1: install latest long term support version of node from nodejs.org
                step2: Run command: npm install -g npm@latest
              check for version: node --version
                v20.17.0
        firebase init
          build folder, .firebaserc and firebase.json files are created,
        firebase deploy 
          Project Console: https://console.firebase.google.com/project/my-netflixgpt-bd4ff/overview
          Hosting URL: https://my-netflixgpt-bd4ff.web.app





   rafce - React Arrow Function Export Component



## Features
    - Home page
    -Login/Signup
      - Sign in/ sign up form
      - redirect to browse page
    - Browse after authentication
      - Header
      - Main movie
        -trailer in background
        -title & description
        -Movie suggestions
          - Movie lists * N
    - Netflix GPT
      - Search bar
      -Movie Suggestions



npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify