<a href='https://herbivorous.petefowler.dev/'>Live page</a> 

(Site may require reloading due to Heroku hosting service putting inactive environments to sleep)

# Summary
This is a recipe app replicating some core functionality of recipe sites, such as the ability to get a random recipe of the day, search recipes by keyword and multiple categories, save liked recipes, and submit a new recipe. It was built with a deadlne of a few days with React and vanilla CSS for a Flatiron School project.

The site uses the Spoonacular recipe site API, and a simulated backend using JSON-server.

# Lessons learned
Building this, I gained experience with React, and dynamic routing with react-router-dom. I also and learned a number of other things including:
- How to execute routing and nested routing with react-router-dom
- React renders a component twice in strict mode, on by default in development mode, which leads two double the fetch calls to an API
- I needed to use event.stopPropagation() to prevent a click event on an absolutely positioned element from bubbling to its parent div and triggering an unwanted separate click event on that div
- The CSS rule white-space: pre-line allowed me to properly handle line breaks coming from the submit form
- How to build a loading spinner from scratch using an image, animation, React conditional rendering, and using state to track the completion of fetch calls or an image onLoad event to register when an image was loaded

# Improvements
Many things about this site could be improved:
- The site needs a real back end rather than the simple JSON server, which was used for students who had not yet learned how to build a back end.
- A real back end would allow for hiding the Spoonacular API key rather than exposing it on GitHub, or even in the browser if it were hidden in a .env file. The decision was made to just let the API key be exposed since it is a free key for a student project, but obviously this is not a secure practice.
- The overall visual design could be better
- The site needs to be deployed on a service such as AWS instead of Heroku so that it would not have loading delays.
  
Leaf spinner image by <a href="https://www.freepik.com/free-vector/different-green-leaves-pack-flat-design_18773643.htm#query=leaf&position=15&from_view=search">Freepik</a>
