const router = require("express").Router();
const mailService = require("../../services/mailer");

router.post("/", async (req, res, next) => {
  try {
    // call the mail service
    const { to, qrCode } = req.body;

    const payload = {
      to,
      qrCode,
    };
    const response = await mailService.sendEmail(payload);
    res.json({ data: response });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
