import './Movie.css';


const Movie = (props) => {
    const {title, rating, genre, year}=props; 
    console.log(props)
    return(
      <tr>
        {title&&<td>{title}</td>}
        {rating&&<td>{rating}</td>}
        {genre&&<td>{genre}</td>}
        {year&&<td>{year}</td>}
      </tr>
)};
export default Movie;