import express from "express";
import Url from "../../models/url";

const urlRouter = express.Router();

urlRouter.get("/:shortUrl", async (req, res) => {
  try {
    const url = await Url.findOneAndUpdate(
      { shortUrl: req.params.shortUrl },
      { $push: { callLog: Date.now() } }
    );

    res.writeHead(301, { Location: url.longUrl });
    res.end();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

urlRouter.get("/:shortUrl/log", async (req, res) => {
  try {
    const url = await Url.findOne({ shortUrl: req.params.shortUrl });

    res.json({ callLog: url.callLog });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Creating One
urlRouter.post("/", async (req, res) => {
  const existUrl = await Url.findOne({ longUrl: req.body.longUrl });
  if (existUrl) {
    return res.status(201).json(newUrl);
  }
  const shortUrl = await makeShortUrl();

  const url = new Url({
    longUrl: req.body.longUrl,
    shortUrl: shortUrl,
  });

  try {
    const newUrl = await url.save();
    res.status(201).send(newUrl.shortUrl);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

async function makeShortUrl() {
  let shortUrl;
  while (true) {
    shortUrl = Math.random().toString(36).substr(2, 11);
    const existUrl = await Url.findOne({ shortUrl });
    if (existUrl === null) {
      break;
    }
  }
  return shortUrl;
}

export default urlRouter;
