We had to came up with this solution because netlify does not support npm package json-server

index.html ==> Admin Panel

#Actions 

=> You can only add products using admin panel

#To Run this on your Local Machine

=> clone this repo 
=> navigate to backend folder
=> open that location in terminal
=> run following commands in your terminal
    
    #npm run start   // this will run the vite localserver for index.html
    #node server.js  // this will run the server.js 
    
    
#How to get Products Data ?

=> navigate to db.json file in backend folder
=> you can directly copy the data and use it if you needed at some point 
=> otherwise you can also create a callback function that returns the product data and then call it, whenever you need it.


