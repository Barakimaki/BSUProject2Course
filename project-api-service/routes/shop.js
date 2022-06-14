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
      nameProduct: {
        type: 'string',
        faker: 'commerce.productName'
      },
      imageProduct: {
        type: 'string',
        faker: 'image.abstract'
      },
      price: {
        type:'number',
        faker: 'commerce.price'
      },

    },
    required: ['nameProduct', 'imageProduct', 'price']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

module.exports = router;
