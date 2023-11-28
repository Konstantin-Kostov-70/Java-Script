const bcrypt = require('bcrypt');

const pass1 = '123456';
const hash = '$2b$10$ZN/QTK67eEqqojfPcDxLGOenOfjOKVU/gamgTbWeAOZQm2z6a8tkm';

async function startHash() {
    const hash = await bcrypt.hash(pass1, 10);
    console.log(hash);

    // If we compare pass1 and hash the result must be true
    // console.log(await bcrypt.compare(pass1, hash));
}

startHash();
