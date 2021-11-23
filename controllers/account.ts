import {Request, Response} from "express";
import Account from "../models/Account";

export const postAccount = (req: Request, res: Response) => {
    Account.create({name: req.body.name})
        .then(account => res.json(account))
        .catch(err => res.json(err));
}

export const getAccount = async(req: Request, res: Response) => {
    const account = await Account.findByPk(req.params.id);
    if(!account) return res.json({err: "Id not found"});
    return res.json(account);
}

export const getAllAccount = async (_req: Request, res: Response) =>{
    const accounts = await Account.findAll();
    if(Object.entries(accounts).length === 0) return res.json({error: "Accounts not found"});
    return res.json(accounts);
}

