const router = require("express").Router();

router.get("/", (req, res, next) => {
  try {
    res.render("index", { homepage: "QR Generator" });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
