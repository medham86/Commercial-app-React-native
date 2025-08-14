import { Product } from "@/interfaces/product";
import { faker } from "@faker-js/faker";

export const products : Product[] = Array.from({ length: 12 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName().split(' ' , 1),
  price: Number(faker.commerce.price()),
  imageURL: faker.helpers.arrayElement([
    require("../../assets/clothes/product-01.png"),
    require("../../assets/clothes/product-02.png"),
    require("../../assets/clothes/product-03.png"),
   
  ]),
}));

