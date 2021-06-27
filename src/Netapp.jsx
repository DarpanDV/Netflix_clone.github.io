import React from 'react';
import './Netapp.css';
import Row from './Row';
import Banner from './Banner'
import Navbar from './Navbar'
import request from './request';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row title="Netflix Original" fetchUrl={request.fetchNetflixOriginals} isLargeRow={true} isLargeHead={true}/>
      <Row title="Trending Now" fetchUrl={request.fetchTrending}/>
      <Row title="Top Rated" fetchUrl={request.fetchTopRated}/>
      <Row title="Action movies" fetchUrl={request.fetchActionMovies}/>
      <Row title="Comedy movies" fetchUrl={request.fetchComedyMovies}/>
    </div>
  );
}

export default App;