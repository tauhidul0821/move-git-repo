const { create, nameFromCmd, firstCharToUpperCase } = require('../../lib');
const name = nameFromCmd(process.argv[3]);
const upperCaseName = firstCharToUpperCase(name);

const sampleText = `const express = require('express');
const router = express.Router();
const { get${upperCaseName}s,get${upperCaseName},create${upperCaseName},update${upperCaseName},delete${upperCaseName} } = require('../controllers/${name}Controllers');

/**
* @swagger
* components:
*   schemas:
*     ${upperCaseName}:
*       type: object
*       required:
*         <loop>
*         - property
*         </loop>
*       properties:
*       <loop>
*          property:
*            type: typeName,
*            description: The ${name} property
*        </loop>
*       example:
*          <loop>
*             property: typeName
*          </loop>
*/

/**
* @swagger
  * tags:
  *   name: ${upperCaseName}s
  *   description: The ${name}s API
*/


/**
 * @swagger
 * /${name}s:
 *   get:
 *     summary: Returns the list of all the ${name}s
 *     tags: [${upperCaseName}s]
 *     responses:
 *       200:
 *         description: The list of the ${name}s
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/${upperCaseName}'
 */
router.get('/',get${upperCaseName}s);


/**
 * @swagger
 * /${name}s:
 *   post:
 *     summary: Create a new ${name}
 *     tags: [${upperCaseName}s]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/${upperCaseName}'
 *     responses:
 *       200:
 *         description: The book was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/${upperCaseName}'
 *       500:
 *         description: Some server error
 */
router.post('/',create${upperCaseName});



/**
 * @swagger
 * /${name}s/{id}:
 *   get:
 *     summary: Get the ${name} by id
 *     tags: [${upperCaseName}s]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ${name} id
 *     responses:
 *       200:
 *         description: The ${name} description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/${upperCaseName}'
 *       404:
 *         description: The ${name} was not found
 */
router.get('/:id',get${upperCaseName});


/**
 * @swagger
 * /${name}s/{id}:
 *  put:
 *    summary: Update the ${name} by the id
 *    tags: [${upperCaseName}s]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The ${name} id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/${upperCaseName}'
 *    responses:
 *      200:
 *        description: The ${name} was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/${upperCaseName}'
 *      404:
 *        description: The ${name} was not found
 *      500:
 *        description: Some error happened
 */
router.put('/:id',update${upperCaseName});



/**
 * @swagger
 * /${name}s/{id}:
 *   delete:
 *     summary: Remove the ${name} by id
 *     tags: [${upperCaseName}s]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The ${name} id
 * 
 *     responses:
 *       200:
 *         description: The ${name} was deleted
 *       404:
 *         description: The ${name} was not found
 */
router.delete('/:id',delete${upperCaseName});

module.exports = router
`

const fileName = `${name}Routes.js`;

const replaceWord = `
`

const directory = `routes`;

exports.generateRoutes = function () {
  create(sampleText, fileName, replaceWord, directory);
}
