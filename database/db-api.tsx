import mysql from "mysql2/promise";
import { Product } from "./db-models/product-models";

export default class DbConfig {
    public async getAllProducts(): Promise<Product[]> {
        const dbconnection = await mysql.createConnection({
            host: "localhost",
            database: "ballnoirwebshop",
            user: "nextappapi",
            password: "n3xt@pil0gin_",
        });
    
        try {
            const query = "SELECT * FROM products";
            const values: Product[] = [];
            const [results] =  await dbconnection.execute(query, values);
            dbconnection.end();
            return results as Product[];
        } catch (error) {
            console.log(error);
        }
        const noProducts: Product[] = [];
        return noProducts;
    }
}
