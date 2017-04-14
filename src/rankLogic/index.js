
const buildTestString = require('./helpers/buildTestString');
const rankInput = require('./helpers/rankInput');
const prepareInput = require('./helpers/prepareInput');


module.exports = function(txtFileStr){
    let nodes = prepareInput(txtFileStr);
    rankInput(nodes);
    return buildTestString(nodes);
};