const API_KEY = "8a5adc998ed067242cd3e63b97b56afe"

const categories = [
    {
        name: "trending",
        title: "Trending Now",
        path: `/trending/all/week?api_key=${API_KEY}`
    },
    {
        name: "netflixOriginals",
        title: "Netflix Originals",
        path: `/discover/tv?api_key=${API_KEY}&with_networks=213`,        
      },
      {
        name: "topRated",
        title: "Popular on Netflix",
        path: `/movie/top_rated?api_key=${API_KEY}`,       
      },
      {
        name: "comedy",
        title: "Comedies",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=35`,   
      },
      {
        name: "romances",
        title: "Romances",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
      },
      {
        name: "documentaries",
        title: "Documentaries",
        path: `/discover/tv?api_key=${API_KEY}&with_genres=99`, 
      },
];

export const getMovies = async (path) => {   
    try {
        let url = `https://api.themoviedb.org/3${path}`;
        const response = await fetch(url);
        return response.json();
    } catch (error) {
        console.error('error getMovies: ', error)
    }
}

export default categories;