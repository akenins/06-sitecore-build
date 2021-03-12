The below JSON is required in the package.json to resolve a conflict between Node.js v12+ and Gulp 3.x

  "scripts": {
    "preinstall": "npx npm-force-resolutions"
  },
  "resolutions": {
    "graceful-fs": "^4.2.4"
  }