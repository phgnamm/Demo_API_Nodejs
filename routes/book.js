const bookControllers = require("../controllers/bookControllers");

const router = require("express").Router();


//ADD A BOOK
router.post("/",bookControllers.addABook);

// GET ALL BOOKS
router.get("/",bookControllers.getAllBook);
module.exports =router;

//GET A BOOK
router.get("/:id",bookControllers.getABook);

// UPDATE A BOOK
router.put("/:id",bookControllers.updateBook);

// DELETE A BOOK
router.delete("/:id",bookControllers.deleteABook);