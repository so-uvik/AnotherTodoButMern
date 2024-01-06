import { InferSchemaType, Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: {type: String, required: true},
    text: {type: String},

},{timestamps: true});   //creating a node schema

type Note = InferSchemaType<typeof noteSchema>;  //creating a type note, so that we can use it for validation.

export default model<Note>("Note", noteSchema);  //exporting the model