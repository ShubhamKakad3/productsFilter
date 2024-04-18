import { Index } from "@upstash/vector";
import * as dotenv from "dotenv";
dotenv.config();

 export type Product = {
   id: string;
   imageId: string;
   color: "white" | "beige" | "blue" | "green" | "purple";
   name: string;
   size:'S'| 'M' | 'L';
   price: number;
 };


export const db = new Index<Product>()
