export const getAllNotes = (req, res) => {
    // Logic to get all notes
    res.status(200).json({ message: 'Get all notes' });
    }

export const createNote = (req, res) => {
    // Logic to create a new note
    const newNote = req.body;
    res.status(201).json({ message: 'Note created', note: newNote });
}
export const updateNote = (req, res) => {
    // Logic to update a note
    const noteId = req.params.id;
    const updatedNote = req.body;
    res.status(200).json({ message: `Note with ID ${noteId} updated`, note: updatedNote });
}

export const deleteNote = (req, res) => {
    // Logic to delete a note
    const noteId = req.params.id;
    res.status(200).json({ message: `Note with ID ${noteId} deleted` });
}