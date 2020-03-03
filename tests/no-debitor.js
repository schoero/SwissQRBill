const SwissQRBill = require("../");

const data = {
  currency: "CHF",
  amount: 1199.95,
  reference: "RF18539007547034",
  creditor: {
    name: "Robert Schneider AG",
    address: "Rue du Lac 1268",
    zip: 2501,
    city: "Biel",
    account: "CH5800791123000889012",
    country: "CH"
  }
};

const bill = new SwissQRBill.PDF(data, "./output/no-debitor.pdf");