const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);


var schema = {
  "type": "array",
  "minItems": 1,
  "maxItems": 5,
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
      job: {
        type: 'string',
        faker: 'name.jobType'
      },
      text: {
        type:'string',
        chance: 'paragraph'
      },


    },
    required: ['name', 'sName', 'job', 'text']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;

