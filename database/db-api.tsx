import { PrismaClient, products } from "@prisma/client";

const prisma = new PrismaClient();

export default class dbContext {
    public async getAllProducts(): Promise<products[]> {
        return await prisma.products.findMany();
    }
}