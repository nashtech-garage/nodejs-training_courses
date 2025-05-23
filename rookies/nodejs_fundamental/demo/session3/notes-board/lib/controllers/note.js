"use strict";

const { Note } = require("../models/");
const Slugify = require("slug");
const Path = require("path");
const Pug = require("pug");

module.exports = {
    // Here we’re going to include our functions that will handle the remaining requests in the routes.js file.
    create: async (request, h) => {
        const result = await Note.create({
            date: new Date(),
            title: request.payload.noteTitle,
            slug: Slugify(request.payload.noteTitle, {lower: true}),
            description: request.payload.noteDescription,
            content: request.payload.noteContent
        });
        // Generate a new note with the 'result' data
        return Pug.renderFile(
            Path.join(__dirname, "../views/components/note.pug"),
            {
                note: result
            }
        );
    },
    read: async (request, h) => {
        const note = await Note.findOne({
            where: {
                slug: request.params.slug
            }
        });
        return h.view("note", {
            note,
            page: `${note.title}—Notes Board`,
            description: note.description
        });
    },
    update: async (request, h) => {
        const values = {
            title: request.payload.noteTitle,
            description: request.payload.noteDescription,
            content: request.payload.noteContent
        };
        const options = {
            where: {
                slug: request.params.slug
            }
        };
        await Note.update(values, options);
        const result = await Note.findOne(options);
        return Pug.renderFile(
            Path.join(__dirname, "../views/components/note.pug"),
            {
                note: result
            }
        );
    },
    delete: async (request, h) => {
        await Note.destroy({
            where: {
                slug: request.params.slug
            }
        });

        return h.redirect("/");
    }
};