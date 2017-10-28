### Notes

- package.copy.json is package.json, it's just renamed that way so that it can be commited. package.json is ignored because Dokku thinks the app is a Node.js app when there's a package.json. It's a ruby app that's why I'm ignoring package.json. Please rename package.copy.json to package.json so that you can install the dependencies and also you'll be able to use 'npm start'
