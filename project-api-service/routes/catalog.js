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
      nameProduct: {
        type: 'string',
        faker: 'commerce.productName'
      },
      imageProduct: {
        type: 'string',
        faker: 'image.abstract'
      },
      description: {
        type: 'string',
        chance: 'paragraph'
      },
      price: {
        type:'number',
        faker: 'commerce.price'
      },

    },
    required: ['nameProduct', 'imageProduct', 'description' ,'price']
  }
};


/* GET users listing. */
router.get('/', (req, res) => {

  jsf.resolve(schema).then(sample => {
    res.send(sample);
  });
});

router.get('/:nameProduct', (req, res)=>{
  res.send({
    nameProduct: req.params.nameProduct,
    imageProduct:  faker.image.abstract(),
    description: chance.paragraph({ sentences: 20 }),
    price: faker.commerce.price
  })
})

router.post('/', (req, res) => {

    res.send("ok")
});


module.exports = router;
