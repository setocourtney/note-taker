const express = require("express");
const fs = require("fs");
const path = require("path"); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//return notes.html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

//return index.html
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//read db.json file containing notes objects and return as json
    //readFile requires data to be parsed into JSON from text
app.get("/api/notes", (req, res) => {
    fs.readFile(__dirname + "/db/db.json", "utf-8", (err, data) => {
        if (err) {
            throw err;
        }
        let notes = JSON.parse(data);
        return res.json(notes);
    });
});

//post new note object to db.json
app.post("/api/notes", (req, res) => {
    let newNote = req.body;
    let data = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));
    let id;

    //set id to 1 more than id of last note in array or 0 if notes is empty
    if (data.length === 0) {
        id = 1;
    } else {
        id = data[data.length - 1].id + 1;
    }

    data.push({id: id, title: newNote.title, text: newNote.text});

    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(data), (err) => {
        if (err) {
            throw err;
        }
        res.end();
    });
});

//delete note object from db.json based on id 
app.delete("/api/notes/:id", (req, res) => {
    let delId = parseInt(req.params.id);
    let data = JSON.parse(fs.readFileSync(__dirname + "/db/db.json"));

    data = data.filter((note) => { return parseInt(note.id) !== delId;});

    fs.writeFile(__dirname + "/db/db.json", JSON.stringify(data), (err) => {
        if (err) {
            throw err;
        }
        res.end();
    });
});

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});