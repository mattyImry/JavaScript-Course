const baseEndpoint = 'https://recipes.beginnerjavascript.com/api';
const proxy = `https://cors-anywhere.herokuapp.com/`;
const form = document.querySelector('form.search');
const recipesGrid = document.querySelector('.recipes');

async function fetchRecipes(query){
    const res = await fetch(`${proxy}${baseEndpoint}?q=${query}`);
    const data = await res.json();
    return data;

}

async function handleSubmit(event) {
    event.preventDefault();
    const el = event.currentTarget;
    fetchAndDisplay(form.query.value);
    
}

async function fetchAndDisplay(query) {
    // turn off form
    form.submit.disable = true;
    //submit the search
    const recipes = await fetchRecipes(query);
    form.submit.disable = false;
    displayRecipes(recipes.result);
    
}

function displayRecipes(recipes) {
    console.log('Creting html');
    const html = recipes.map(recipe =>
        `<div class="recipe">
            <h2>${recipe.title}</h2>
            <p>${recipe.ingredients}</p>
            ${recipe.thumbnail && `<img src="${recipe.thumbnail}" alt="$ {recipe.title}"/>`}
            <a href="${recipe.href}">View Recipe</a>
        </div>`
    );
}

form.addEventListener('submit', handleSubmit);
fetchAndDisplay('pizza');