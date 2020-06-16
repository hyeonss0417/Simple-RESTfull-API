import express from "express";

const subscribersRouter = express.Router();

// Getting All
subscribersRouter.get("/", (req, res) => {});

// Getting One
subscribersRouter.get("/:id", (req, res) => {});

// Creating One
subscribersRouter.post("/", (req, res) => {});

// Updating One
subscribersRouter.patch("/:id", (req, res) => {});

// patch (update only things given from client) vs put (update all things at once)

// Deleting One
subscribersRouter.delete("/:id", (req, res) => {});

export default subscribersRouter;
