import {  Component } from "react";
import axios from "axios";
import './Movies2.css';
class Movies2 extends Component {
    constructor(props){
        super(props)
        this.state={
            movies:null
        }
    }


    componentDidMount(){

        axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7').then(res=>this.setState({movies:res.data.results}))
    }



  render() {
    if(!this.state.movies) return <div>Loading......</div>
    return (
      <>
      <h1>The Movies</h1>
        <table id="movies">
            <tr>
                <th>Title</th>
                <th>Vote Average</th>
                <th>Vote Count</th>
            </tr>
            {this.state.movies.map((m)=><tr>
              {m.title&&<td>{m.title}</td>}
              {m.vote_average&&<td>{m.vote_average}</td>}
              {m.vote_count&&<td>{m.vote_count}</td>}
            </tr>)}
        </table>
      </>
      // this.state.movies.map((m)=>
      // <div style={{backgroundColor:"blue",margin:"10px"}}>
      //   <div>Title : {m.title}</div>
      //   <div>Vote Average : {m.vote_average}</div>
      //   <div>Vote Count : {m.vote_count}</div>
      // </div>
      // )
    )
      
            
  }
}
export default Movies2;
