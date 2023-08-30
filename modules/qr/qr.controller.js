const QRCode = require("qrcode");
const createQR = async (data) => {
  try {
    const url = await QRCode.toDataURL(data);
    return url;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createQR };
