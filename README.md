React + Electron

A simple boilerplate app to demonstrate how to use ES6 and React with Electron. It uses Babel to automatically transpile ES6 and JSX code, without depending on any package manager besides npm.


HOW ?

The Node and Electron binaries both take a parameter -r that automatically requires a module before the rest of the code. The npm start script is modified using this, which registers Babel and loads the entry point main.js.
The renderer entry point index.html does basically the same, but loads the scripts/main.js file, which renders the views/main.jsx component into the body.

Installation 

git clone https://github.com/LalitTyagi/React-Electron.git

cd React-Electron

npm install

npm install jquery



In package.json

Add

"jquery": "^2.1.4" in "dependencies"

And then save it. (for $ variable declaration )

In main.jsx

Address : ../view/main.jsx

Declare $ variable as: 

var $ = require('jquery');


npm start


App Packing   

Add the scripts given below to your package.json file , making your package.json look like this:

{

 "name": "electron-tutorial-app",
 
 "productName": "Desktop-app",
 
 "version": "0.1.0",
 
 "main": "main.js",
 
 "devDependencies": {
 
 "electron": "^1.4.3",
 
 "electron-packager": "^8.1.0"
 
 },
 
 "scripts": {
 
"package-mac": "electron-packager . --overwrite --platform=darwin --arch=x64 --icon=assets/icons/mac/icon.icns --prune=true --out=release-builds",  // for mac packager

"package-win": "electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=assets/icons/win/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE --version-string.ProductName=\"Desktop-app\"",    // for windows packager

"package-linux" : "electron-packager . --overwrite --platform=linux --arch=x64 --icon=assets/icons/png/1024x1024.png --prune=true --out=release-builds"    // for linux packager

 }
 
}


Now you can run:
npm run package-mac // for mac packager
npm run package-win // for windows packager
npm run package-linux // for linux packager


```

[ES6]: http://exploringjs.com/
[React]: https://facebook.github.io/react/
[Electron]: http://electron.atom.io/
[Babel]: http://babeljs.io
