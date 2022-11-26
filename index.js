const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hand to hand selling server is resting");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})