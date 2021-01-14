import cookie from "cookie";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ success: true });
};
