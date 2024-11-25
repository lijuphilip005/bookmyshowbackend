import express, { Request, Response } from "express";
import { config } from "dotenv";
import { checkDbConnection, closeConnection } from "./config/db";
import { swaggerDocs } from "./config/swagger";
config()

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());


checkDbConnection();

swaggerDocs(app, Number(PORT));

// Routes
app.get("/", (req: Request, res: Response) => {
  res.send("Welcome to Movie Service API!");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Graceful shutdown
process.on("SIGTERM", async () => {
  console.log("Shutting down gracefully...");
  await closeConnection();
  server.close(() => console.log("Server closed."));
});

process.on("SIGINT", async () => {
  console.log("Application interrupted. Closing...");
  await closeConnection();
  server.close(() => console.log("Server closed."));
});
