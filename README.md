
- step 1
```
git remote -v
```

- step 2
````
git remote rm origin
````

- step 3
````
git remote -v
````
- step 4
````
git remote add origin https://github.com/bs-23/code-generator.git
````
- step 5
````
git remote -v
````
- step 6
````
git fetch
````

````
step 5 # git push -f origin master
````


step 1: see your old origin url
step 2: remove your old url
step 3: now add new origin
step 4: see your new origin url 
step 5: push code force to master 













# Brain Station 23 code generator

### for run this project step by step
```
git clone https://github.com/tauhidbs23/bsCodeGenerator.git
npm install
```

### now anable command globaly
```
npm link

or 

sudo npm link
```
### now generator work anywhare any directory

### for generate gitIgnore file, run this command any directory or folder where you need 
```
bs g gi

```


### for generate form component
```
bs g fc name_of_form_component name age cgpa
# here name, age, cgpa is form property
```

### for generate nodeJS model & controller
```
bs g nodecrud name_of_model name age cgpa
# here name,age,cgpa,etc is model property
```

### also you can added type 
```
bs g nodecrud person name:String age:Number cgpa:Number
# here name & number is type of propertys

```

# how to create your own code 
- 1. inside src folder create a folder 
- 2. inside folder create a file index.js
- 3. write a function and a command and export it like this 
```js
let testCommand = 'test' //bs g test
function test() {

}

module.exports = {
    test,
    testCommand
};
```
- 4. now import it on bs-key.js file and added on program object like this
```js
program
  .command(testCommand) // test
  .description('generate automatic test')
  .action(test);
```

- 5. now in src folder that you create 
- 6. 


```shell

.catch((err) => {
  console.error('An error happened:');
  console.error(err);
  process.exit(127);
});

```

