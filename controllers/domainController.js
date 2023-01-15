const SPFValidator = require('spf-validator');
const dnsRecords = require('@layered/dns-records');

// For View
const domainView = (req, res) => {
  res.render("domain", {});
};

const domainAudit = (req, res) => {
//   res.send();
//   var validator = new SPFValidator(req.body.domain);
//   validator.hasRecords((err, hasRecords) => res.send(hasRecords));
//   res.send(validator);

const allRecords = dnsRecords.getAllRecords(req.body.domain);
res.send(allRecords);


};

module.exports = {
  domainView,
  domainAudit,
};
