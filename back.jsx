const express = require('express');
const app = express();
const PORT = 3001;

const cors = require('cors');
app.use(cors());



app.use(express.json());
// Dummy data for the to-do list
const todos = [
    { id: 1, task: "Teams Transcript - Jason Sughroue", completed: true, transcriptReceived: true},
    { id: 2, task: "Teams Transcript - Sydney Fields", completed: true, transcriptReceived: true},
    { id: 3, task: "Phone Call - Eric LaBouce", completed: true, transcriptReceived: true },
    { id: 4, task: "Teams Transcript - Mike Sughroue", completed: false, transcriptReceived: false }
];

// Endpoint to get the to-do list
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Existing endpoint for receiving a transcript
app.post('/receive-transcript', (req, res) => {
    // Process the transcript data from Microsoft Teams
    console.log('Received a new transcript:', req.body);
    res.status(200).send('Transcript received');
});

app.get('/', (req, res) => {
    res.send('Welcome to the Todo API!');
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});