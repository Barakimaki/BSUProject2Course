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
  "items": {
    type: 'object',
    properties: {
        newsTitle: {
          type: 'string',
          faker: 'company.catchPhrase'
        },
        image: {
          type: 'string',
          faker: 'image.abstract'
        },
        description: {
          type: 'string',
          chance: 'paragraph'
        }
    },
    required: ["newsTitle", "image", "description"]
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;

