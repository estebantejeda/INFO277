import {Request, Response} from "express";
import Product from "../models/product";
import Customer from "../models/customer";
import SaleLedger from "../models/saleLedger";
import Kardex from "../models/kardex";

export const postSale = async (req: Request, res: Response) => {
    if(req.body.length === 0) return res.json({
        ok: false,
        msge: "Sales not found"
    });
    for (let sale of req.body){
        const product = await Product.findByPk(sale.id);
        if(!product) return res.json({
            ok: false,
            msge: "Product ID Not Found"
        });
        const stockProduct = await product.getDataValue("stock");
        if(stockProduct === 0 || stockProduct - sale.stock < 0) return res.json({
            ok: false,
            msge: "Out of Stock"
        });
        const customer = await Customer.findOne({where: {rut: sale.rut}});
        if(!customer) return res.json({
            ok: false,
            msge: "Customer ID Not Found"
        });
        await product.decrement('stock', {by: sale.stock});
        await SaleLedger.create({
            docNumber: sale.docNumber,
            date: sale.date,
            docType: sale.docType,
            payType: sale.payType,
            stock: sale.stock,
            price: sale.price,
            total: sale.total,
            customerId: await customer.getDataValue("id"),
            productId: sale.id
        });
        await Kardex.create({
            productId: sale.id,
            date: sale.id,
            docNumber: sale.docNumber,
            price: sale.price,
            quantity: 0,
            assets: sale.stock
        });
    }
    return res.json({
        ok: true,
        msge: "Sale Successful"
    });
}

export const getAllSale = (_req: Request, res: Response) => {
    SaleLedger.findAll()
        .then(sale => res.json(sale))
        .catch(err => res.json(err));
}