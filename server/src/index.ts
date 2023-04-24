import express, { Request, Response } from 'express';
import mongoose from 'mongoose';
import cors from "cors";
import Deck from './models/Deck';
import { config } from 'dotenv';
import { getDecksController } from './controllers/getDecksController';
import { createDeckController } from './controllers/createDeckController';
import { deleteDeckController } from './controllers/deleteDeckController';
config();

const PORT = 5000;

const app = express()

//suport for json post request
app.use(express.json())
app.use(
    cors({
        origin: "*",
    })
);

//fetch the database from mongoose
app.get('/decks', getDecksController);
app.post('/decks', createDeckController);
app.delete('/decks/:deckId', deleteDeckController);

//connect to the database
mongoose.connect(process.env.MONGO_URL!).then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
})