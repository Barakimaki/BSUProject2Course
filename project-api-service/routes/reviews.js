const express = require('express');
const router = express.Router();
const faker = require('faker');
const chance = new require('chance').Chance();
const jsf = require('json-schema-faker');
jsf.extend('chance', () => chance);
jsf.extend('faker', () => faker);


var schema = {
  "type": "array",
  "minItems": 7,
  "maxItems": 10,
  "items":{
    type:'object',
    properties: {
      nickname: {
        type: 'string',
        faker: 'internet.userName'
      },
      avatar: {
        type: 'string',
        chance: 'avatar'
      },
      review: {
        type:'string',
        chance: 'paragraph'
      }
    },
    required: ['nickname', 'avatar', 'review']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;
