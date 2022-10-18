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
error message with doing anything with npm 
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.
npm ERR! code ERESOLVE
npm ERR! ERESOLVE could not resolve
npm ERR!
npm ERR! While resolving: express-react-views@0.11.0
npm ERR! Found: react@18.2.0
npm ERR! node_modules/react
npm ERR!   peer react@"^18.2.0" from react-dom@18.2.0
npm ERR!   node_modules/react-dom
npm ERR!     react-dom@"^18.2.0" from the root project
npm ERR!   react@"^18.2.0" from the root project
npm ERR!
npm ERR! Could not resolve dependency:
npm ERR! peer react@"^0.14.0 || ^15.0.0 || ^16.0.0" from express-react-views@0.11.0       
npm ERR! node_modules/express-react-views
npm ERR!   express-react-views@"^0.11.0" from the root project
npm ERR!
npm ERR! Conflicting peer dependency: react@16.14.0
npm ERR! node_modules/react
npm ERR!   peer react@"^0.14.0 || ^15.0.0 || ^16.0.0" from express-react-views@0.11.0     
npm ERR!   node_modules/express-react-views
npm ERR!     express-react-views@"^0.11.0" from the root project
npm ERR!
npm ERR! Fix the upstream dependency conflict, or retry
npm ERR! this command with --force, or --legacy-peer-deps
npm ERR! to accept an incorrect (and potentially broken) dependency resolution.
npm ERR!
npm ERR! See C:\Users\laman\AppData\Local\npm-cache\eresolve-report.txt for a full report.

npm ERR! A complete log of this run can be found in:
npm ERR!     C:\Users\laman\AppData\Local\npm-cache\_logs\2022-10-18T19_33_18_792Z-debug-0.log
