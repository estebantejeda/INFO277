import DocType from "../enum/DocType";

class PurchaseLedger{
  docNumber: number;
  docType: DocType;
  providerId: number;
  correlative: number;
  net: number;
  isCredit: boolean;
  date: Date;
  accountId: number;

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

export default PurchaseLedger;
