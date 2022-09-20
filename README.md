# Herbivorous

<a href='https://herbivorous.petefowler.dev/'>Live page</a> 

(Site may require reloading due to Heroku hosting service putting inactive environments to sleep)

This is a recipe app replicating some core functionality of recipe sites, such as the ability to get a random recipe of the day, search recipes by keyword and multiple categories, save liked recipes, and submit a new recipe. It was built in a few days with React and vanilla CSS.

The site uses the Spoonacular recipe site API, and a simulated backend using JSON-server.

Building this, I gained experience with React, and dynamic routing with react-router-dom. I also and learned a number of other things including:
- React renders a component twice in strict mode, on by default in development mode, which leads two double the fetch calls to an API
- I needed to use event.stopPropagation() to prevent a click event on an absolutely positioned element from bubbling to its parent div and triggering an unwanted separate click event on that div
- The CSS rule white-space: pre-line allowed me to properly handle line breaks coming from the submit form
- How to build a loading spinner from scratch using an image, animation, React conditional rendering, and using state to track the completion of fetch calls or an image onLoad event to register when an image was loaded

  
Leaf spinner image by <a href="https://www.freepik.com/free-vector/different-green-leaves-pack-flat-design_18773643.htm#query=leaf&position=15&from_view=search">Freepik</a>