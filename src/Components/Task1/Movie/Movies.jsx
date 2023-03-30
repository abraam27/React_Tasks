import React, { useState } from "react";
import Movie from "./Movie";
import {v4 as uuid} from 'uuid';
const Movies = () => {
  const [moviesArr] = useState([
    { id: uuid(), title: "The Shawshank Redemption", rating: 9.2, genre: "Drama", year: 1994},
    { id: uuid(), title: "The Godfather", rating: 9.2, genre: "Crime", year: 1972},
    { id: uuid(), title: "The Dark Knight", rating: 9.0, genre: "Action", year: 2008},
    { id: uuid(), title: "The Godfather Part II", rating: 9.0, genre: "Crime", year: 1974}
  ]);
  console.log(moviesArr)
  return (
    <>
        <h1>The Movie Ranking</h1>
        <table id="movies">
            <tr>
                <th>Title</th>
                <th>Rating</th>
                <th>Genre</th>
                <th>Year</th>
            </tr>
            {moviesArr.map((m)=><Movie key={m.id}  {...m} ></Movie>)}
        </table>
    </>
    
  )
};

export default Movies;
