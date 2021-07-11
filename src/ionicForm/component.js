const { create, nameAndDirFromCmd, firstCharToUpperCase } = require('../../lib');
const { name, dir } = nameAndDirFromCmd(process.argv[3]);

const sampleText = `import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-${name}',
  templateUrl: '${name}.html',
  styleUrls: ['./${name}.css'],
})
export class ${firstCharToUpperCase(name)} implements OnInit {
  ${name}Form: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}
  async onSubmit() {
    if (this.${name}Form.valid) {
      console.log(this.${name}Form.value);
    }
    this.${name}Form.reset();
  }
  ngOnInit() {
    this.${name}Form = this.fb.group({
      <loop>
        property: ['', []],
      </loop>
    });
  }
}
`


const fileName = `${name}.ts`;

const directory = `${dir}`;

const replaceWord = `
`;

exports.generateComponent = function() {
  create(sampleText, fileName, replaceWord, directory);
}
