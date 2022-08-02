import express, { response } from 'express'
const router2 = express.Router();

router2.get("/:ip", function (req, res) {
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  res.send({
    ip : req.params.ip
  });
});

export default router2;