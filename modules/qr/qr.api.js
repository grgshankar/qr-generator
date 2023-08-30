const router = require("express").Router();
const qrControllers = require("./qr.controller");

router.post("/", async (req, res, next) => {
  try {
    // call the qr controller
    const { url } = req.body;
    if (!url) throw new Error("URL is missing!!!");
    const qrData = await qrControllers.createQR(url);
    res.json({ data: qrData });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
