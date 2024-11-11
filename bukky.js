const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('files'));

// Serve the form
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname , "files" ,'contact.html'));
});

// Handle form submission
app.post('/submit', (req, res) => {
   // const { fName, lName, email, mobile, message } = req.body;
   const data = req.body

    // Read the existing data
    fs.readFile('data.json', 'utf8', (err, jsonData) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
            
        }

        const users = JSON.parse(jsonData);
        users.push(data);

        // Save the updated data
        fs.writeFile('data.json', JSON.stringify(users, null, 2), (err) => {
            if (err) {
                console.error('Error writing file:', err);
                res.status(500).send('Internal Server Error');
                return;
            }

            // Redirect to the display page
            res.redirect('/about');
        });
    });
});

// Serve the display page
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname , "files" , 'about.html'));
});

// Provide data in JSON format
app.get('/data', (req, res) => {
    fs.readFile('data.json', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            res.status(500).send('Internal Server Error');
            return;
        }

        res.json(JSON.parse(data));
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
