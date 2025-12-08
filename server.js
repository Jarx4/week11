const express = require(`express`);
const recipeRouter = require(`./routes/recipes.routes`);
const ingredientRouter = require(`./routes/ingredients.routes`);
const fullRecipeRoutes = require(`./routes/fullRecipes.routes`)
const randomRoutes = require(`./routes/randomRecipe.routes`);
const app = express ();


app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);
app.use('/fullRecipes', fullRecipeRoutes);
app.use('/random', randomRoutes);
app.listen(3000, () => {
});


