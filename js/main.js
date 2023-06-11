import NotesAPI from "./NotesApI.js"

NotesAPI.save({
    title: "New Note!",
    body: "I am a new note stored in your localStorage."
})
console.log(NotesAPI.getAllNotes());