const express = require('express');
const app = express();

//* add home route
app.get('/', (req, res) => {
    res.send("Today's topic will be classes.");
});

app.get('/person', function (req, res) {
    res.sendFile(__dirname + '/person.js');
});

const PORT = process.allowedNodeEnvironmentFlags.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT} 🥸`)
})