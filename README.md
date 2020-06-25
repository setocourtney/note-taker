# note-taker

Node application that can be used to write, save, and delete notes. Uses an express backend to save and retrieve note data from a JSON file.

Deployed on Heroku : https://take-note-of-this.herokuapp.com/


## User Story

> AS A student <br />
> I WANT to be able take notes <br />
> SO THAT I can remember what I learned and reference them later



## Features

* index - Landing page with link to access note taker application

* notes - Displays all saved notes, allows user to save a new note (Title / Note) and delete previously created notes


### API

* GET `/notes` - Returns the `notes.html` file
* GET `*` - Returns the `index.html` file
* GET `/api/notes` - Reads the `db.json` file and return all saved notes as JSON
* POST `/api/notes` - Recieves a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client
* DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete and updates `db.json` file



## Technologies

### FrontEnd

* [Bootstrap](https://getbootstrap.com/)
* JavaScript

### Backend

* [Node.js](https://nodejs.org/en/)
* [Express](https://expressjs.com/)





## License

[MIT License](https://choosealicense.com/licenses/mit/)

Copyright (c) 2020 Courtney J. Seto

