const { gitIgnore } = require('./gitIgnore')

let gitCommand = 'gi'// bs g gi
function generateGitIgnore() {
    console.log('gitIgnore: file  ')
    gitIgnore();
}

module.exports = {
    generateGitIgnore,
    gitCommand
};
