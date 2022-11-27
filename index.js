const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
require('dotenv').config()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gkdpmwb.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        const accessoriesCategoryCollection = client.db("handToHand").collection("accessoriesCategories");

        app.get('/categories', async (req, res) => {
            const query = {};
            const cursor = await accessoriesCategoryCollection.find(query).toArray();
            res.send(cursor)
        })
    }
    finally {

    }
}
run().catch(err => console.log(err));


app.get('/', (req, res) => {
    res.send("Hand to hand selling server is resting");
})

app.listen(port, () => {
    console.log(`App is listening on port ${port}`)
})