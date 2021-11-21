import {Request, Response} from "express";
import Purchase from "../models/Purchase";
import Provider from "../models/provider";

export const postPurchase = async (req: Request, res: Response) => {
    if(req.body.length === 0) return res.json({
        ok: false,
        msg: "Purchases not Found"
    });
    for(let purchase of req.body){
        console.log(purchase);
        const provider = await Provider.findOne({where: {rut: purchase.providerId}});
        if(!provider) return res.json({
            ok: false,
            msg: "Provider ID Not Found"
        });
        await Purchase.create({
            docNumber: purchase.docNumber,
            docType: purchase.docType,
            correlative: purchase.correlative,
            net: purchase.net,
            isCredit: purchase.isCredit,
            date: purchase.date,
            providerId: await provider.getDataValue("id"),
            accountId: purchase.accountId
        });
    }
    return res.json({
        ok: true,
        msg: "Purchase Successful"
    });
}