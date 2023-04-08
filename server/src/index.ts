import express, { Request, Response } from 'express';
import mongoose from 'mongoose';

import DeckModel from './models/Deck';

const PORT = 5000;

const app = express()



app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!')
});

app.get('/hello', (req: Request, res: Response) => {
    res.send('GG')
});

mongoose.connect('mongodb+srv://flashcard:CzCDImDWnjZhMlhn@mycluster.tdlwnkt.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log(`Listening on port ${PORT}`);
    app.listen(PORT);
})