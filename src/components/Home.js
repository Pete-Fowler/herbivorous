import '../styles/Home.css';

function Home({ imageUrl}) {
  
  return <div id='home'>
    <h1>Recipe of the Day</h1>
    <button type='button' >Show Me Another</button>
    <img src={imageUrl} alt='Recipe card'></img>
  </div>
}

export default Home;