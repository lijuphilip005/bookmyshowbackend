CREATE TABLE IF NOT EXISTS "movies" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "movies_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"title" varchar(255) NOT NULL,
	"description" text NOT NULL,
	"releaseDate" date NOT NULL,
	"rating" numeric NOT NULL,
	"duration" integer NOT NULL,
	"posterUrl" varchar(500) NOT NULL,
	"trailerUrl" varchar(500) NOT NULL,
	"createdAt" timestamp DEFAULT now() NOT NULL,
	"updatedAt" timestamp DEFAULT now() NOT NULL
);
