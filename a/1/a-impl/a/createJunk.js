const fs = require('node:fs');
const path = require('node:path');

const junkDir = path.resolve(__dirname, '../../../2/junk');

function createJunk(dir, depth) {
    if (depth < 0) {
        return;
    }

    if (depth === 0) {
        return fs.mkdirSync(dir, { recursive: true });
    }

    for (let i = 0; i < 10; i++) {
        createJunk(`${dir}/${i}`, depth - 1);
    }
}

createJunk(junkDir, 6);