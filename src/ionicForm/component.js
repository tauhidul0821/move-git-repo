const { create, nameAndDirFromCmd, firstCharToUpperCase } = require('../../lib');
// const { name, dir } = nameAndDirFromCmd(process.argv[3]);

const sampleText = `import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kkk',
  templateUrl: 'ccc.html',
  styleUrls: ['./cccc.css'],
})
export class ${firstCharToUpperCase('cccc')} implements OnInit {
  CCCForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {}
  async onSubmit() {
    if (this.$Form.valid) {
      console.log(this.{name}Form.value);
    }
    this{name}Form.reset();
  }
  ngOnInit() {
    this.{name}Form = this.fb.group({
      <loop>
        property: ['', []],
      </loop>
    });
  }
}
`


const fileName = `ccc.ts`;

const directory = `/kkk`;

const replaceWord = `
`;

exports.generateComponent = function() {
  create(sampleText, fileName, replaceWord, directory);
}
