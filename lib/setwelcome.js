const fs = require('fs')

/**
 * Reads the set_welcome.json file to get the current database.
 * @returns {Array} The parsed JSON array from set_welcome.json.
 */
const readWelcomeDb = () => {
    try {
        return JSON.parse(fs.readFileSync('./database/set_welcome.json', 'utf8'));
    } catch (error) {
        console.error("Error reading set_welcome.json, returning empty array:", error);
        return []; // Return an empty array if the file doesn't exist or is invalid
    }
};

/**
 * Writes the provided database array to the set_welcome.json file.
 * @param {Array} db The database array to write.
 */
const writeWelcomeDb = (db) => {
    fs.writeFileSync('./database/set_welcome.json', JSON.stringify(db, null, 3), 'utf8');
};

/**
 * Check if a custom welcome message is set for the given group.
 * @param {string} groupID Group JID.
 * @returns {boolean} True if a custom message is set, false otherwise.
 */
const isSetWelcome = (groupID) => {
    const _db = readWelcomeDb(); // Read fresh data
    let found = false;
    for (const entry of _db) { // Use for...of for cleaner iteration
        if (entry.id === groupID) {
            found = true;
            break; // Exit loop once found
        }
    }
    return found;
};

/**
 * Change the custom welcome message for a specific group.
 * @param {string} teks The new custom welcome message.
 * @param {string} groupID Group JID.
 */
const changeSetWelcome = (teks, groupID) => {
    const _db = readWelcomeDb(); // Read fresh data
    let position = -1; // Use -1 to indicate not found
    for (let i = 0; i < _db.length; i++) {
        if (_db[i].id === groupID) {
            position = i;
            break;
        }
    }
    if (position !== -1) {
        _db[position].text = teks;
        writeWelcomeDb(_db); // Write updated data
    }
};

/**
 * Add a new custom welcome message for a group.
 * @param {string} teks The custom welcome message.
 * @param {string} groupID Group JID.
 */
const addSetWelcome = (teks, groupID) => {
    const _db = readWelcomeDb(); // Read fresh data
    const obj_add = {
        id: groupID,
        text: teks
    };
    _db.push(obj_add);
    writeWelcomeDb(_db); // Write updated data
};

/**
 * Remove the custom welcome message for a specific group.
 * @param {string} groupID Group JID.
 */
const removeSetWelcome = (groupID) => {
    const _db = readWelcomeDb(); // Read fresh data
    const initialLength = _db.length;
    const newDb = _db.filter(entry => entry.id !== groupID); // Filter out the entry
    if (newDb.length < initialLength) { // Only write if something was actually removed
        writeWelcomeDb(newDb); // Write updated data
    }
};

/**
 * Get the custom welcome message for a specific group.
 * @param {string} groupID Group JID.
 * @returns {string|null} The custom message if found, otherwise null.
 */
const getTextSetWelcome = (groupID) => {
    const _db = readWelcomeDb(); // Read fresh data
    for (const entry of _db) {
        if (entry.id === groupID) {
            return entry.text;
        }
    }
    return null; // Return null if not found
};

module.exports = {
    isSetWelcome,
    addSetWelcome,
    removeSetWelcome,
    changeSetWelcome,
    getTextSetWelcome
};