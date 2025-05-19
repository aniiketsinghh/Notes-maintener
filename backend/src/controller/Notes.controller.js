import Note from '../models/Note.model.js';
export const getAllNotes =async (req, res) => {
    const notes = await Note.find().sort({ createdAt: -1 });
    
    res.status(200).json(notes);
    }

export const getNoteById = async (req, res) => {
    const noteId = await Note.findById(req.params.id);
    if (!noteId) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(noteId);
}

export const createNote = async(req, res) => {
  
    const {title,content} = req.body;
    const newNote = new Note({
        title,
        content
    });
    res.status(201).json(newNote);
}
export const updateNote = async(req, res) => {
   try{
    const {title, content} = req.body;
    const updatedNote = await Note.findByIdAndUpdate(req.params.id,
         {title, content}, {new: true});
    if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(updatedNote);
}
catch (error) {
    console.error("error in updateNote", error)
    res.status(500).json({ message: 'Error updating note', error });
}
}

export const deleteNote = async(req, res) => {
    try{
    const noteId = await Note.findByIdAndDelete(req.params.id);
    if (!noteId) {
        return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json({ message: `Note with ID ${noteId} deleted` });
}
catch (error) {
    console.error("error in deleteNote", error)
    res.status(500).json({ message: 'Error deleting note', error });
}}