import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const code = req.body.code;

  const params = new URLSearchParams();
  params.append("grant_type", "authorization_code");
  params.append("code", code);
  params.append("redirect_uri", process.env.REDIRECT_URI);

  const authHeader =
    "Basic " +
    Buffer.from(
      `${process.env.CLIENT_ID}:${process.env.CLIENT_SECRET}`,
    ).toString("base64");

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        Authorization: authHeader,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();
    res.json(data); // Retorna access_token, refresh_token etc.
  } catch (err) {
    res.status(500).json({ error: "Erro ao trocar code por token" });
  }
});

app.listen(process.env.PORT, () =>
  console.log(`Backend rodando na porta ${process.env.PORT}`),
);
