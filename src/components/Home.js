import '../styles/Home.css';

function Home({ randomCard, newCard}) {
  

  return <div id='home'>
    <h1>Recipe of the Day</h1>
    <button type='button' onClick={newCard}>Show Me Another</button>
    <img src={randomCard} alt='Recipe card'></img>
  </div>
}

export default Home;