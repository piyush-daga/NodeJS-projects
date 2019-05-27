const fs = require('fs');
const chalk = require('chalk');


const addNote = (title, body) => {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title);

    if (!duplicateNote){
        notes.push({
            title: title,
            body: body
        });

        saveNotes(notes);
        console.log(chalk.greenBright.inverse('New note added!'));
    }
    else {
        console.log(chalk.yellowBright.inverse('Note already taken!'));
    }

};

const removeNote = (title) => {
    const notes = loadNotes();

    const notesToKeep = notes.filter((note) => note.title !== title );

    if (notes.length === notesToKeep.length) {
        console.log(chalk.redBright.inverse(`No note found for title: ${title}`));
    }
    else {
        saveNotes(notesToKeep);
        console.log(chalk.greenBright.inverse(`Note Removed!`));
    }
};


const listNotes = () => {

    const notes = loadNotes();
    console.log(chalk.greenBright.inverse('Your Notes!'));

    notes.forEach((note) =>
        console.log(chalk.yellowBright.inverse(note.title)));
};


const readNote = (title) => {

    const notes = loadNotes();
    const foundNote = notes.find((note) => note.title === title);

    if (foundNote){
        console.log(chalk.inverse.yellowBright(foundNote.title));
        console.log(foundNote.body);
    } else {
        console.log(chalk.inverse.redBright('No note found!'));
    }
};

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes));

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        return JSON.parse(dataBuffer.toString())
    }catch (e) {
        return []
    }

};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
};