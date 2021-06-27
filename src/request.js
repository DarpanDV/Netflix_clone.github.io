const API_kEY="cacc2957061f28ebc9e67f1407dd8b3e"

const request={
    fetchTrending: `/trending/all/week?api_key=${API_kEY}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${API_kEY}&with_networks=213`,
    fetchTopRated:`/movie/top_rated?api_key=${API_kEY}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${API_kEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${API_kEY}&with_genres=35`,
}

export default request;