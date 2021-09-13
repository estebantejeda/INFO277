import {Request, Response} from "express";
import Product from "../models/product";
import SaleLedger from "../models/saleLedger";
import Kardex from "../models/kardex";

export const postSale = async (req: Request, res: Response) => {
    const product = await Product.findByPk(req.body.idProduct);
    if (!product) return res.json({
        ok: false,
        msge: "id no encontrado"
    });
    const stock = product?.getDataValue("stock");
    if(stock === 0 || stock - req.body.quantity < 0) return res.json({
        ok: false,
        msge: "Supera el stock disponible"
    });
    product?.decrement("stock", {by: req.body.quantity});
    const saleLedger = await SaleLedger.create({
        month: req.body.month,
        year: req.body.year,
        docNumber: req.body.docNumber,
        netValue: req.body.netValue,
        tax: req.body.tax,
        total: req.body.price
    });
    await Kardex.create({
        productId: product.getDataValue("id"),
        saleLedgerId: saleLedger.getDataValue("id"),
        date: req.body.date,
        price: req.body.price,
        quantity: req.body.quantity,
        assets: 0
    });
    return res.json({
        ok: true,
        msge: "Venta creada correctamente"
    });
}