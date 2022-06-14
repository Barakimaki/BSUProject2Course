const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);


var schema = {
  "type": "array",
  "minItems": 2,
  "maxItems": 7,
  "items":{
    type:'object',
    properties: {
      name: {
        type: 'string',
        faker: 'name.firstName'
      },
      sName: {
        type: 'string',
        faker: 'name.lastName'
      },
      book: {
        type:'string',
        faker: 'name.jobArea'
      },
      cover: {
        type:'string',
        faker: 'image.abstract'
      },


    },
    required: ['name', 'sName', 'book', 'cover']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;
