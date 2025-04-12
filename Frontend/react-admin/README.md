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

# 1. Create React App
npx create-react-app react-admin
cd react-admin

# 2. Install Material UI core and icons
npm install @mui/material @emotion/react @emotion/styled
npm install @mui/icons-material

# 3. Install MUI DataGrid (XGrid)
npm install @mui/x-data-grid

# 4. Install React Pro Sidebar (v1.1 specifically)
npm install react-pro-sidebar@1.1

# 5. Install FullCalendar for Calendar page
npm install @fullcalendar/react @fullcalendar/daygrid @fullcalendar/timegrid @fullcalendar/interaction

# 6. Install Nivo charts for Bar, Pie, Line, Geography
npm install @nivo/core @nivo/bar @nivo/pie @nivo/line @nivo/geo

# 7. Install Formik and Yup for form validation
npm install formik yup

# 8. Install React Router
npm install react-router-dom

# 9. Optional: Utility classnames helper
npm install clsx

# 10. (Optional) Fix audit issues
npm audit fix

# 11. Run the project
npm start

# 12. Git setup
git init
git add .
git commit -m "Initial commit"
git branch -M main   # Or 'master' depending on your setup
git remote add origin https://github.com/maazabdulbasith/React-AdminPanel.git
git push -u origin main   # Or 'master' if that's your branch

Lmk if i missed something.
