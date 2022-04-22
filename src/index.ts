import * as yargs from 'yargs';
import * as chalk from 'chalk';
import {Note} from './note';
import {NoteManagement} from './noteMagenement';

yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    user: {
      describe: 'Note owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
    color: {
      describe: 'Note color',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string' &&
      typeof argv.body === 'string' && typeof argv.color === 'string') {
      if (argv.color == 'red' || argv.color == 'green' || argv.color == 'blue' || argv.color == 'yellow') {
        console.log(new NoteManagement().addNote(new Note(argv.title, argv.body, argv.color), argv.user));
      } else {
        console.log(chalk.red('Error: color not valid (valid colors: "red", "green", "blue", "yellow")'));
      }
    }
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  builder: {
    user: {
      describe: 'Note owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      console.log(new NoteManagement().removeNote(argv.title, argv.user));
    }
  },
});

yargs.command({
  command: 'read',
  describe: 'Read an user note',
  builder: {
    user: {
      describe: 'Note owner',
      demandOption: true,
      type: 'string',
    },
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string',
    },
  },
  handler(argv) {
    if (typeof argv.user === 'string' && typeof argv.title === 'string') {
      console.log(new NoteManagement().readNote(argv.title, argv.user));
    }
  },
});

yargs.parse();