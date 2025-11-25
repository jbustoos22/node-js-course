const fs = require('fs');

fs.writeFileSync('notes.txt', 'My name is Jaime.');

/*
    Challenge: Append a message to note.txt

    1. Use the fs.appendFileSync() method to append to the file notes.txt:
    2. Run the Script
    3. Check the notes.txt file to ensure the message was appended
*/

fs.appendFileSync('notes.txt', '\nThis is an appended message.');