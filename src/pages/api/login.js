import cookie from "cookie";

const handler = (req, res) => {

  //Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*'); // Replace '*' with your specific origin(s)
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );

  if (req.method === 'OPTIONS') {
    // Preflight request, respond successfully
    return res.status(200).end();
  }

  if (req.method === "POST") {
    const { username, password } = req.body;
    if (
      username === process.env.ADMIN_USERNAME &&
      password === process.env.ADMIN_PASSWORD
    ) {
      res.setHeader(
        "Set-Cookie",
        cookie.serialize("token", process.env.TOKEN, {
          maxAge: 60 * 60 * 24 * 180,
          sameSite: "strict",
          path: "/",
        })
      );
      res.status(200).json("Succesfull");
    } else {
      res.status(400).json("Wrong Credentials!");
    }
  }
};

export default handler;