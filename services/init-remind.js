const models = require('../models');

const reminds = [
    { name: '0h' },
    { name: '1h' },
    { name: '3h' },
    { name: '12h' },
    { name: '1d' },
    { name: '2d' },
    { name: '3d' }
]

async function init() {
    await reminds.map(remind => models.remind.create(remind));
}

try {
    init();
} catch (error) {
    console.log(error)
}