const {Author,Book} = require("../model/model");


const bookControllers ={
    //ADD A BOOK
    addABook : async (req,res)=>{
        try {
            const newbook = new Book(req.body);
            const savedbook = await newbook.save();
            if(req.body.author){
                const author = Author.find({_id: req.body.author}); 
                await author.updateOne({$push: {books: savedbook._id} });
            }
            res.status(200).json(savedbook);
        } catch (error) {
            res.status(500).json(error);
        }

    },
    //GET ALL BOOKS
    getAllBook: async(req,res)=>{
        try {
            const allbook = await Book.find();
            res.status(200).json(allbook);
            
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //GET A BOOK
    getABook: async (req,res)=>{
        try {
            const book = await Book.findById(req.params.id).populate("author");
            res.status(200).json(book);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //UPDATE A BOOK
    updateBook: async (req,res)=>{
        try {
            const book = await Book.findById(req.params.id);
            await book.updateOne({$set: req.body});
            res.status(200).json("Updated successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    //DELETE A BOOK
    deleteABook: async (req,res)=>{
        try {
            await Author.updateMany(
                {books: req.params.id},
                {$pull: {books: req.params.id}})
            await Book.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }



};

module.exports =bookControllers;