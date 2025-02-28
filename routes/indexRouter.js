import { Router } from "express";
import { pool } from "../db/db.js";

const indexRouter = Router();

let  rows;

// Render  Page by default
indexRouter.get('/', async (req, res) => {
    try {
        // Check if the database connection is alive
        console.log("Database connected successfully");

        ({ rows } = await pool.query("SELECT * FROM trainers"));
        // console.log("Rows: ", pokemonRows);
        // console.log("Trainers: ", rows);
        res.render("index.ejs", {trainers: rows});

    } catch (error) {
        console.log('Error fetching trainers:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

indexRouter.delete("/delete/:id", async (req, res) => {
    const { id } = req.params;
    console.log("deleting ", id);
    try {
        const result = await pool.query("DELETE FROM trainers WHERE trainer_id = $1", [id]);

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Trainer not found" });
        }

        res.json({ message: "Trainer deleted successfully" });
    } catch (error) {
        console.error("Database error:", error);
        res.status(500).json({ error: "Database error" });
    }
})

indexRouter.get('/add', async (req, res) => {
    try {
        res.render("components\\addTrainers.ejs");
    } catch (error) {
        
    }
})

indexRouter.post('/add', async (req, res) => {
    let data = req.body;
    try {
        console.log(data);
        await pool.query("INSERT INTO trainers (trainer_name, slot1, slot2, slot3, slot4, slot5, slot6) VALUES ($1, $2, $3, $4, $5, $6, $7)", [data.TrainerName, data.Pokemon1, data.Pokemon2, data.Pokemon3, data.Pokemon4, data.Pokemon5, data.Pokemon6]);
        console.log("Successfully added ", data.TrainerName);
        res.redirect("/add");
    } catch (error) {
        
    }
})

indexRouter.get('/edit/:id', async (req, res) => {    
    try {
        const trainer = rows.find((t) => t.trainer_id == req.params.id);
        if (!trainer) {
            return res.status(404).send("Trainer not found");
        }
        res.render("components\\editTrainers.ejs", {trainer});
    } catch (error) {
        
    }
})


indexRouter.put('/edit/:id', async (req, res) => {
    const { id } = req.params;
    console.log(id);
    const { trainer_name, slot1, slot2, slot3, slot4, slot5, slot6 } = req.body;
    try {
        console.log("Successfully edited ", (trainer_name));     
        const result = await pool.query(
            "UPDATE trainers SET trainer_name = $1, slot1 = $2, slot2 = $3, slot3 = $4, slot4 = $5, slot5 = $6, slot6 = $7 WHERE trainer_id = $8 RETURNING *",
            [trainer_name, slot1, slot2, slot3, slot4, slot5, slot6, id]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: "Trainer not found" });
        }

        res.json({ message: "Trainer updated successfully", trainer: result.rows[0] });
        res.redirect("/");
    } catch (error) {
        
    }
})

export {indexRouter};