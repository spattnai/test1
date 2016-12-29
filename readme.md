# Comparatio developer candidate coding test

Please use provided computer to work on the follow tasks. Using internet resources is allowed and encouraged in helping you find a solution. Aim to allot 60 - 90 minutes for these tasks. If you get stuck on technical issues, feel free to ask us for help. 

The process you take to accomplish these tasks is more important to us than having them accomplished. There is no "failing" the test even if you did not complete these tasks. 

Please note the test process might be recorded for management review.

## Ionic app (Javascript):

Please start a new Ionic app with the goal to have user enter a "City name, State" or "ZIP code", then display current local weather details. Details must include:
 
 - City name
 - Weather type
 - Low/High temp in Fahrenheit
 
Use http://openweathermap.org/current for weather API, or use your weather API of choice. If you choose to use the above, use API key:`b971cab803e8c55524abde5f9bdcbb37`

### Bonus points (optional):
 - Display forecasts
 - Show weather icons
 - Use CSS to format information for easier to read
 - Keep history of searched cities to view their weather again, either in app state or local storage

## MySQL:

MySQL instance should be up and running on this computer. Please use MySQL workbench to login to localhost [username:root, password:comparatio], then examine the 4 tables in `sql_training` schema carefully. Each table: 
 
 - Is named by three letter prefix and table name.
 - Has a primary key named `ID`.
 - Foreign keys, if any, are referred by table prefix + `_ID`.
 - Has a `DELETE_FLAG` to mark record status. A record is deleted if `DELETE_FLAG` is `1`.
 - `DELETE_FLAG` of `0` means the record is "active".
 
After reading data structure carefully, please create a new `.sql` file and write these following queries:

 - List all active contacts. Show customer codes, customer names, and contact names.
 - List number of contacts by customer. Show Customer names, number of active contacts and number of deleted contacts.
 - List number of active customers by active users. Show User names and number of customers.
 - List number of users by which year they were created. Show years, number of users, comma-separated list of user names, sorted ascending by year.
 
## PHP/HTML:

Please write a php script to:

 - Connect to the local MySQL database from above.
 - Display a grid in browser to show all active customer from `us1_user` table. Show customer names and user names (if any).
 
### Bonus points (optional):
 - Use css to alternate grid color for easy reading.
 - Add link to each row of customer record. When clicked, show selected customer's contact list in new grid. You can do this several ways, (e.g.) url parameter in new php page (good); ajax (better).