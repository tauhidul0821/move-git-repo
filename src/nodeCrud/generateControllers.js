const { create, nameFromCmd,firstCharToUpperCase } = require('../../lib');

const name = nameFromCmd(process.argv[3]);
const upperName = firstCharToUpperCase(name);

const sampleText = `const ErrorResponse = require('../utils/errorResponse');
const ${upperName} = require('../models/${name}Models.js');

// @desc    Get all ${name}
// @route   GET /api/v1/${name}
// @access  Public
exports.get${upperName}s = async (req, res, next) => {
  try {
    const ${name}s = await ${upperName}.find();
    res.status(200).json({ success: true, count: ${name}s.length, data: ${name}s });
  } catch (err) {
    res.status(400).json({ success: false });
  }
}

// @desc    Get single ${name}
// @route   GET /api/v1/${name}s/:id
// @access  Public
exports.get${upperName} = async (req, res, next) => {
  try {
    const ${name} = await ${upperName}.findById(req.params.id);

    if (!${name}) {
      return next(new ErrorResponse(\`${upperName} not found with id of \${req.params.id}\`, 404));
    }


    res.status(200).json({ success: true, data: ${name} });
  } catch (err) {
    next(new ErrorResponse(\`${upperName} not found with id of \${req.params.id}\`, 404))
  }
}

// @desc    Create new ${name}
// @route   POST /api/v1/${name}s
// @access  Private
exports.create${upperName} = async (req, res, next) => {
  try {
    const ${name} = await ${upperName}.create(req.body);
    res.status(201).json({ success: true, data: ${name} });
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc    Update ${name}
// @route   PUT /api/v1/${name}s/:id
// @access  Private
exports.update${upperName} = async (req, res, next) => {
  try {
    const ${name} = await ${upperName}.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true
    })
    if (!${name}) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: ${name} })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

// @desc    Delete ${name}
// @route   DELETE /api/v1/${name}s/:id
// @access  Private
exports.delete${upperName} = async (req, res, next) => {
  try {
    const ${name} = await ${upperName}.findByIdAndDelete(req.params.id)
    if (!${name}) {
      return res.status(400).json({ success: false });
    }
    res.status(200).json({ success: true, data: {} })
  } catch (err) {
    res.status(400).json({ success: false })
  }
}

`

const fileName = `${name}Controllers.js`;

const replaceWord = `
Bill=Gates
`;

const directory = `controllers`;

exports.generateControllers = function () {
    create(sampleText, fileName, replaceWord, directory);
}
