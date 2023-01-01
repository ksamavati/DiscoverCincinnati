const axios = require("axios");
const router = require("express").Router();
const apiKey = process.env.BACKEND_MAPS_API_KEY;

//get data from Google Maps API
const getData = async (locName) => {
  const placeID = (
    await axios.get(
      "https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=" +
        locName +
        "&inputtype=textquery&locationbias=point:39.1031,84.5120&key=" +
        apiKey
    )
  ).data.candidates[0].place_id;
  const result = await axios.get(
    "https://maps.googleapis.com/maps/api/place/details/json?place_id=" +
      placeID +
      "&key=" +
      apiKey
  );
  return result;
};

router.route("/:query").get((req, res) => {
  // ':query' assigns any text after it in the URL to req.params.query
  getData(req.params.query)
    .then((response) => res.json(response.data))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
