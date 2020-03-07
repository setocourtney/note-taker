const express = require("express");
const fs = require("fs");
const path = require("path"); 

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

//return notes.html file
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "public/notes.html"));
});

//return index.html
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

//read db.json file containing notes objects and return as json
app.get("/api/notes", (req, res) => {
    fs.readFile("/db/db.json", (err, data) => {
        if (err) {
            throw err;
        };
        return res.json(data);
    });
});

//post new note object to db.json
app.post("/api/notes", (req, res) => {

});

//delete note object from db.json based on id 
app.delete("/api/notes:id", (req, res) => {

});

app.listen(PORT, () => {
    console.log(`Server listening at PORT: ${PORT}`);
});