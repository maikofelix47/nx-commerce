import { Injectable, NotFoundException } from "@nestjs/common";


// use json files till ORM is set up
import { readFile, writeFile } from "fs/promises";

// models

import { Product } from "../models/product";


@Injectable()
export class ProductRepository{
    constructor(){

    }

    async findOne(id: string){
        const products = await readFile('products.json', 'utf-8');
        const productsObj = JSON.parse(products);
        if(!productsObj[id]){
           return new NotFoundException('Product not found');
        }

        return productsObj[id];
    }

   async findAll(){

        const products = await readFile('products.json', 'utf-8');
        const productsObj = JSON.parse(products);

        if(!productsObj){
           return new NotFoundException();
        }
        

        return productsObj;

    }

    findByCategoryId(categoryId: number){

    }

    async createProduct(product: Product){

        const products =  await readFile('products.json', 'utf-8');
        const productsObj = JSON.parse(products);
        if(!productsObj){
           return new NotFoundException();
        }
        const id = Math.floor(Math.random() * 99);

        productsObj[id] = product;

        const newProducts = await writeFile('products.json', JSON.stringify(productsObj));

        return productsObj;

    }
}