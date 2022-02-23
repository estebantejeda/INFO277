import DocType from "../enum/DocType";
import Account from "./Account";

class PurchaseLedger{
  docNumber: number;
  docType: DocType;
  providerId: number;
  correlative: number;
  net: number;
  isCredit: boolean;
  date: Date;
  accountId: number;
  provider?: Provider;
  account?: Account;

  constructor(docNumber: number, docType: DocType, providerId: number, correlative: number, net: number, isCredit: boolean, date: Date, accountId: number) {
    this.docNumber = docNumber;
    this.docType = docType;
    this.providerId = providerId;
    this.correlative = correlative;
    this.net = net;
    this.isCredit = isCredit || false;
    this.date = date;
    this.accountId = accountId;
  }
}

interface Provider{
  name: string;
  rut: string;
}

export default PurchaseLedger;
