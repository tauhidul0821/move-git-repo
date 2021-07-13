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
