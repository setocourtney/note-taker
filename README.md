# note-taker

https://setocourtney.github.io/note-taker/.

Node application that can be used to write, save, and delete notes. Uses an express backend to save and retrieve note data from a JSON file.

## Interface

    * index - Landing page with link to access note taker application

    * notes - Displays all saved notes, allows user to save a new note (Title / Note) and delete previously created notes

## Backend Function

    * GET `/notes` - Returns the `notes.html` file

    * GET `*` - Returns the `index.html` file

    * GET `/api/notes` - Reads the `db.json` file and return all saved notes as JSON

    * POST `/api/notes` - Recieves a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client

    * DELETE `/api/notes/:id` - Receives a query parameter containing the id of a note to delete and updates `db.json` file

## Directory

    * db
        ** db.json - stores notes as json objects containing id, title, and note text
    * public
        ** css
        ** javascript
        ** html
    * server.js - node application requires express
    * package.json
    