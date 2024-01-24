const authorController = require("../controllers/authorControllers");

const router = require("express").Router();


//ADD AUTHOR
router.post("/",authorController.addAuthor);

// GET ALL AUTHRORS
router.get("/",authorController.getAllAuthor);

// GET AN AUTHOR
router.get("/:id",authorController.getAnAuthor);

// UPDATE A AUTHOR
router.put("/:id",authorController.updateAuthor);

// DELETE AUTHOR
router.delete("/:id",authorController.deleteAuthor);
module.exports =router;