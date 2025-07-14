const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { contactInfo, services, siteVisit, multipleProposals, timeline } = req.body;

  // TODO: Send confirmation email to customer
  // TODO: Notify admin team

  // Simulate success
  res.json({ success: true, message: 'RFQ received. Confirmation email sent.' });
});

module.exports = router;