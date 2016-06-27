#Build

Create a minified js bundle that includes all the apps files, along with any of its dependencies.
Jspm will create a 'bundles' section in the config.js file that shows all modules being included.

    jspm bundle app.js app/app.bundle.js --inject --min