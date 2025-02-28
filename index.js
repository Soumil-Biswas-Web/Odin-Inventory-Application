import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { indexRouter } from './routes/indexRouter.js';
import bodyParser from "body-parser";

dotenv.config();

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Allow requests from specific origin
app.use(cors({
    origin: (origin, callback) => {
        // Allow requests with no origin (e.g., mobile apps or curl requests)
        if (!origin) return callback(null, true);
        // Check if origin contains "localhost"
        if (/^http:\/\/localhost(:\d+)?$/.test(origin)) {
          return callback(null, true);
        } else {
          return callback(new Error('Not allowed by CORS'));
        }},
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    credentials: true // If sending cookies or authorization headers
}));

// Use express.urlencoded middleware
app.use(express.urlencoded({ extended: true }));

// app.set("views", path.join(__dirname, "views"));
// app.set("view engine", "ejs");

app.use("/", indexRouter);

// Every thrown error in the application or the previous middleware function calling `next` with an error as an argument will eventually go to this middleware function
app.use((err, req, res, next) => {
    console.error(err);
    // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`)
})

/* 
Make new database in DB
table for trainers: Should have Trainer NAME and trainer ID
table for Pokemon: Should have slot No. (1-6) Trainer NAME, Type 1 and Type 2

Front end needs 4 pages

Home: Display all trainers and Pokemon
Category: Sort tainers by Pokemon Type
Add: Add New Trainer
Edit/Remove: Edit Trainers
*/

/*
Berry good.

DB created. Initial values are displaying good ly

Now display in front end

sort trainer data in front end OR get sorted results from db (it is db practice after all)

edit / create new items from front end, and enter with db

and we gucci.
*/

/* 
FOr now, make views folder, and create som pages
*/