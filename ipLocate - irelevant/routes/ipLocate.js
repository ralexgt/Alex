import express, { response } from 'express'
const router = express.Router();

router.get("/", function (req, res) {
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  res.send("your IP is: " + req.ip);
});

export default router;
