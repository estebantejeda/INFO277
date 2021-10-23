import {Request, Response} from "express";
import Provider from "../models/provider";
import PurchaseLedger from "../models/purchaseLedger";
import Kardex from "../models/kardex";
import Product from "../models/product";

export const postPurchase = async (req: Request, res: Response) =>{
    if(req.body.length === 0) return res.json({
        ok: false,
        msge: "No se ingresaron compras"
    });
    for (let purchase of req.body){
        const product = await Product.findByPk(purchase.id);
        if(!product) return res.json({
            ok: false,
            msge: "Product ID Not Found"
        });
        const provider = await Provider.findOne({where: {rut: purchase.rut}});
        if(!provider) return res.json({
            ok: false,
            msge: "Provider ID Not Found"

        });
        await product.increment('stock',{by: purchase.stock});
        await PurchaseLedger.create({
            docNumber: purchase.docNumber,
            date: purchase.date,
            stock: purchase.stock,
            price: purchase.price,
            total: purchase.total,
            providerId: provider?.getDataValue("id"),
            productId: purchase.id
        });
        await Kardex.create({
            productId: purchase.id,
            date: purchase.date,
            docNumber: purchase.docNumber,
            price: purchase.price,
            quantity: purchase.stock,
            assets: 0
        });
    }
    return res.json({
        ok: true,
        msge: "Compra creada correctamente"
    });
}

export const getPurchase = async (req: Request, res: Response) => {
    const purchase = await PurchaseLedger.findByPk(req.params.id);
    if(!purchase) return res.json({error: "Id not found"});
    return res.json(purchase);
}

export const getAllPurchase = async (_req: Request, res: Response) => {
    const purchase = await PurchaseLedger.findAll();
    if(Object.entries(purchase).length === 0) return res.json({error: "Purchases not found"});
    return res.json(purchase);
}