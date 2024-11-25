import { integer, pgTable, varchar, date, text, numeric, timestamp } from "drizzle-orm/pg-core";

export const moviesTable = pgTable("movies", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),      // Primary key with auto-increment
  title: varchar({ length: 255 }).notNull(),                     // Title of the movie
  description: text().notNull(),                                 // Description of the movie
  releaseDate: date().notNull(),                                 // Release date of the movie
  rating: numeric().notNull(),                                   // Movie rating (e.g., 1-10)
  duration: integer().notNull(),                                  // Duration in minutes
  posterUrl: varchar({ length: 500 }).notNull(),                  // URL of the poster image
  trailerUrl: varchar({ length: 500 }).notNull(),                 // URL of the trailer video
  createdAt: timestamp().defaultNow().notNull(),                  // Timestamp when the movie was created (defaults to current time)
  updatedAt: timestamp().defaultNow().notNull(),                  // Timestamp when the movie was last updated (defaults to current time)
});
