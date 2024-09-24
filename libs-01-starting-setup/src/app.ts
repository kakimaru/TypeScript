// Code goes here!
// import _ from "lodash";

// declare var GLOBAL: any;

// console.log(_.shuffle([1, 2, 3]));
import "reflect-metadata"
import { plainToClass } from 'class-transformer';
import { validate } from 'class-validator'

import { Product } from "./product.model";

const products = [
  { title: "A carpet", price: 29.99 },
  { title: "A book", price: 10.99 },
];

const newProd = new Product('', -5.99)
validate(newProd).then(errors=>{
  if(errors.length > 0) {
    console.log("Validation errors!")
    console.log(errors)
  }
  console.log(newProd)
})

// const p1 = new Product("A book", 12.99);
// const lodadedProducts = products.map(prod =>  new Product(prod.title, prod.price))

const loadedProducts = plainToClass(Product, products)

for (const prod of loadedProducts) {
  console.log(prod.getInformation())
}
