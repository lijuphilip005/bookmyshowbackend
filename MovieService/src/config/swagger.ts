import { config } from "dotenv";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
config()
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "MovieService API",
      version: "1.0.0",
      description: "API documentation for the MovieService application",
    },
    servers: [
      {
        url: process.env.BACKEND_URL, // Update the URL if deploying elsewhere
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // Path to your route files
};

const swaggerSpec = swaggerJSDoc(options);

export const swaggerDocs = (app: any, port: number) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`Swagger docs available at ${process.env.BACKEND_URL}/api-docs`);
};
