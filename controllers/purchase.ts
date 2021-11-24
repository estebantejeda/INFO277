import {Request, Response} from "express";
import Purchase from "../models/Purchase";
import Provider from "../models/provider";
import Account from "../models/Account";
import {fn, col} from "sequelize";

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

export const getAllPurchase = async (_req: Request, res: Response) => {
    const purchases = await Purchase.findAll({
        include: [{
            model: Provider,
            attributes: ['name', 'rut']
        },
        {
            model: Account,
            attributes: ['name']
        }]
    });
    if(Object.entries(purchases).length === 0) return res.json({error: "Purchase not found"});
    return res.json(purchases);
}

export const getSumPurchase = async (_req: Request, res: Response) => {
    //SELECT accountId, name, SUM(net) FROM purchases JOIN accounts ON purchases.accountId=accounts.id GROUP BY accountId;
    const purchases = await Purchase.findAll({
        attributes: [
            'accountId',
            [fn('sum', col('net')), 'total']
        ],
        include: [{
            model: Account,
            attributes: ['name']
        }],
        group: 'accountId',
    });
    return res.json(purchases);
}