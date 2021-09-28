var express = require('express');
var router = express.Router();
const {getAllRecipe, createRecipe, updateRecipeByID, deleteRecipeByID} = require("./controller/recipeController")

/* GET home page. */
router.get('/', function(req, res, next) {
    
    getAllRecipe({})
        .then((payload) => {
            res.json({message: "success", payload});
        })
        .catch((error) => {
            res.status(500).json({message: "failure", error: error.message})
        });


});

router.post('/create-recipe', function(req, res, next) {
    
    createRecipe(req.body)
        .then((payload) => {
            res.json({message: "success", payload});
        })
        .catch((error) => {
            res.status(500).json({message: "failure", error: error.message})
        });


});

router.put('/update-recipe-by-id/:id', function(req, res){
    updateRecipeByID(req.params.id, req.body)
    .then((payload) => {
        res.json({message: "success", payload});
    })
    .catch((error) => {
        res.status(500).json({message: "failure", error: error.message})
    })
});

router.delete('/delete-by-id/:id', function(req, res){
    deleteRecipeByID(req.params.id)
    .then((payload) => {
        res.json({message: "success", payload});
    })
    .catch((error) => {
        res.status(500).json({message: "failure", error: error.message})
    })
});






module.exports = router;