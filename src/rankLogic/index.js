
const prepareInput = require('./helpers/prepareInput');
const rankInput = require('./helpers/rankInput');
const buildTestString = require('./helpers/buildTestString');


module.exports = function(txtFileStr){
    let nodes = prepareInput(txtFileStr);
    rankInput(nodes);
    return buildTestString(nodes);
};