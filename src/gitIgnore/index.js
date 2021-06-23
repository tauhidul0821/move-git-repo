const { gitIgnore } = require('./gitIgnore')

let gitCommand = 'gi'// bs g gi
function generateGitIgnore() {
    gitIgnore();

    // console.log('Created successfuly'.green);
}

module.exports = {
    generateGitIgnore,
    gitCommand
};
