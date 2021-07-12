const { gitIgnore } = require('./gitIgnore')

let gitCommand = 'gi'// bs g gi
function generateGitIgnore() {
    gitIgnore();
}

module.exports = {
    generateGitIgnore,
    gitCommand
};
