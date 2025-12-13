const express = require(`express`);
const recipeRouter = require(`./routes/recipes.routes`);
const ingredientRouter = require(`./routes/ingredients.routes`);
const fullRecipeRoutes = require(`./routes/fullRecipes.routes`)
const randomRoutes = require(`./routes/randomRecipe.routes`);
const app = express ();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json()); 
app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);
app.use('/fullRecipes', fullRecipeRoutes);
app.use('/random', randomRoutes);
app.listen(3000, () => {
});


