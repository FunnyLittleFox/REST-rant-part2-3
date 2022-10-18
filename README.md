# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## ROUTES

| Method | Path | Purpose |
|---|---|---|
| GET | / | Home Page |
| GET | /places | Places index page | 
| POST | /places | Create new place | 
| GET | /places/new | Form page for creating a new place |
| GET | /plcase/:id | Details about a particular place |
| PUT | /places/:id | Update a particular place |
| GET | /places/:id/edit | Form page for editing an existing place |
| DELETE | /places/:id | Delete a particular place |
| POST | /places/:id/rant/:rantId | Create a rant (comment) about a particular place |
| DELETE | /places/:id/rant/:randId | Delete a rant (comment) about a particular place |
| GET | * | 404 page (matches any route not defined above) |

### PLACES

| ID | Type |
| --- | --- |
| Name | String |
| City | String |
| State | String |
| Cuisines | String |
| Pic | String |


Other notes
 new issues now with trying to access nodemon

 $ nodemon
Debugger attached.
[nodemon] 2.0.16
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node index.js`
Debugger attached.
Waiting for the debugger to disconnect...
node:internal/modules/cjs/loader:988
  throw err;
  ^

Error: Cannot find module 'express-react-views'
Require stack:
- C:\Users\laman\desktop\softdev\be and api\rest-rant-part2-3\index.js
    at Function.Module._resolveFilename (node:internal/modules/cjs/loader:985:15)
    at Function.Module._load (node:internal/modules/cjs/loader:833:27)
    at Module.require (node:internal/modules/cjs/loader:1057:19)
    at require (node:internal/modules/cjs/helpers:103:18)
    at Object.<anonymous> (C:\Users\laman\desktop\softdev\be and api\rest-rant-part2-3\index.js:8:19)
    at Module._compile (node:internal/modules/cjs/loader:1155:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1209:10)
    at Module.load (node:internal/modules/cjs/loader:1033:32)
    at Function.Module._load (node:internal/modules/cjs/loader:868:12)
    at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:81:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [
    'C:\\Users\\laman\\desktop\\softdev\\be and api\\rest-rant-part2-3\\index.js'
  ]
}

[nodemon] app crashed - waiting for file changes before starting...
