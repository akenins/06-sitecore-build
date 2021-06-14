The below JSON is required in the package.json to resolve a conflict between Node.js v12+ and Gulp 3.x

"scripts": {
"preinstall": "npx npm-force-resolutions"
},
"resolutions": {
"graceful-fs": "^4.2.4"
}

1. Run `npm install` in the /Content directory.

2. Run `gulp watch` in the command line to start the taskrunner/live-reloader.

3. Changes in /src/scripts will automatically compile with Webpack to the directory outlined on line 73 of gulpfile.js in the root directory.

4.To add/remove js files to the list to be compiled add/remove them using the `import` syntax in /src/scripts/main.js
