const { create, nameAndDirFromCmd, firstCharToUpperCase } = require('../../lib');
const { name, dir } = nameAndDirFromCmd(process.argv[3]);

const sampleText = `<form (ngSubmit)="onSubmit()" [formGroup]="${name}Form">
<ion-list>
    <loop>
        <ion-item>
            <ion-label position="floating">property</ion-label>
            <ion-input type="text" class="form-control" name="property" formControlName="property" placeholder="property">
            </ion-input>
        </ion-item>
    </loop>

</ion-list>
</form>
`

const fileName = `${name}.html`;

const directory = `${dir}`;

const replaceWord = `
`;


exports.generateTemplate = function () {
    create(sampleText, fileName, replaceWord, directory);
}
