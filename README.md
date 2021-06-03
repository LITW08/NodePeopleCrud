# Basic Node App Setup

From the command line run the following commands:

```
mkdir my-directory //this creates a directory called my-directory
cd my-directory //this goes into that directory
npm init -y //this sets up the package.json file
code . //opens vscode in this folder
```

From there, create a file called `.gitignore` and add the contents of this file to it:

https://raw.githubusercontent.com/LITW08/NodePeopleCrud/master/.gitignore

Then, copy the following into your package.json:

```
  "dependencies": {
    "ejs": "^3.1.6",
    "express": "^4.17.1",
    "express-ejs-layouts": "^2.5.0",
    "morgan": "^1.10.0",
    "msnodesqlv8": "^2.2.0",
    "mssql": "^7.1.0"
  }
  ```
  
  Once you've created your `app.js` file, to run the application, do `nodemon app.js`. This will run `app.js` and will restart any time any file in the directory changes.
