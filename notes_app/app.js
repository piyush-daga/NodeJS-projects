const yargs = require('yargs');

const note = require('./notes.js');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        note.addNote(argv.title, argv.body);
    }
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'removing a note',
    builder: {
        title: {
            describe: 'The note title to remove',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        note.removeNote(argv.title);
    }
});

// create list command
yargs.command({
    command: 'list',
    describe: 'Listing notes',
    handler () {
        note.listNotes();
    }
});

// create read command
yargs.command({
    command: 'read',
    describe: 'reading a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (argv) {
        note.readNote(argv.title);
    }
});

yargs.parse();

