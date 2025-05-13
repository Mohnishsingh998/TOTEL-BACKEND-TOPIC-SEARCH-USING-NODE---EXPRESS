const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/topics.json");

const getTopic = (req, res) => {
  const { search, sort } = req.query;
  console.log(search, sort);
  //  validate search query
  if (!search || typeof search !== "string") {
    return res
      .status(400)
      .json({ error: "Invalid or missing 'search' query parameter." });
  }
  try {
    // parsing data
    const data = fs.readFileSync(filePath, "utf-8");
    const topics = JSON.parse(data);
    //  filtering data
    let filterdData = topics.filter((topic) =>
      topic.name.toLowerCase().includes(search.toLowerCase())
    );
    //  sorting by name ;
    if (sort == "name") {
      filterdData.sort((a, b) => a.name.localeCompare(b.name));
    }
    res.status(200).json(filterdData);
  } catch (ParseErr) {
    console.error("Error reading topics:", ParseErr);
    res.status(500).json({ ParseErr: "Server error while reading topics." });
  }
};

module.exports = { getTopic };
