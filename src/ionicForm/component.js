const { create, nameAndDirFromCmd, firstCharToUpperCase } = require('../../lib');

const sampleText = `import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-component_name',
  templateUrl: 'component_name.html',
  styleUrls: ['./component_name.scss'],
})
export class class_name implements OnInit {
  component_nameForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}
  async onSubmit() {
    if (this.component_nameForm.valid) {
      console.log(this.component_nameForm.value);
    }
    this.component_nameForm.reset();
  }
  ngOnInit() {
    this.component_nameForm = this.fb.group({
      <loop>
        property: ['', []]
      </loop>
    });
  }
}
`

const { name, dir } = nameAndDirFromCmd(process.argv[3]);
// console.log('name ->', name)
// console.log('dir ->', dir)

const fileName = `${name}.service.js`;

const directory = `${dir}`;

const replaceWord = `
Ipsum1=${process.argv[2]},
Ipsum2=Khadija,
Ipsum3=${name},
Ipsum4=${firstCharToUpperCase(name)}
`;

module.exports.generateComponent = () => {
  create(sampleText, fileName, replaceWord, directory);
}

