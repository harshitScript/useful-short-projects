
## MONGODB CONNECTION
A short project to demonstrate how to setup mongodb connection for single tenant or multi tenant servers.

### Project Languages
Javscript

### How to run the project ?
    - For Single tenant connection.
        run `npm run connect:single-tenant`
    - For Multi tenant connection.
        run `npm run connect:multi-tenant`

### How to use this in your project.
    1. Just copy the file 'connect.js'
    2. Paste this file in your server project. as db/connect.js
    3. Import this file in your root file.
    4. use the getDb method to access the database object.