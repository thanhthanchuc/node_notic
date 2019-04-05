const models = require('../models');

const types = [
    { name: 'notification' },
    { name: 'summon' },
    { name: 'form' }
]

async function init() {
    await types.map(type => models.typeNotification.create(type))
    return;
}

try {
    console.log('Ok!', init());
} catch (error) {
    console.log(error);
}