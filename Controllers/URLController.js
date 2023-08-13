const UrlRouter = require("express").Router();
const URL = require("../Models/url");

UrlRouter.post("/shortUrls", async (req, res) => {
  const { url } = req.body;
  try{
  const oldUrl = await URL.findOne({ longurl: url });
  if (oldUrl) {
    res.json({ status: "Url is Already Existing", data: oldUrl.shorturl });
  } else{
    await URL.create({ longurl: url });
    const shortUrl = await URL.findOne({ longurl: url });
    shortUrl.count++;
    shortUrl.save();
    res.json({
      status: "Success",
      data: shortUrl.shorturl,
      count: shortUrl.count,
    })
  }
}  
  catch{
    res.json({status: "Error!!"})
}
});

module.exports = UrlRouter;
