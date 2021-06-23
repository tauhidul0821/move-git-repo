const { gitIgnore } = require('./gitIgnore')

function generateGitIgnore() {
    gitIgnore();
}

module.exports = {
    generateGitIgnore
};
