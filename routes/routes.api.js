const router = require("express").Router();
const qrRouter = require("../modules/qr/qr.api");
const mailRouter = require("../modules/mail/mail.api");

router.use("/qr", qrRouter);
router.use("/mail", mailRouter);

module.exports = router;
