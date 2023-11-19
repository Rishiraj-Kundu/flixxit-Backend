const {
  addToLikedMovies,
  getLikedMovies,
  removeFromLikedMoives,
} = require("../Controllers/UserController");

const router = require("express").Router();

router.post("/add", addToLikedMovies);
router.get("/liked/:email", getLikedMovies);
router.put("/delete", removeFromLikedMoives);

module.exports = router;
