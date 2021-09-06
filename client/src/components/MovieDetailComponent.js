import React,{Fragment} from 'react';
import { Card } from 'react-bootstrap';
import {useLocation} from 'react-router-dom' ;
import {useStyles } from '../styles/styles';
import { TextField } from '@material-ui/core';
import {Link} from 'react-router-dom';



const MovieDetailComponent = (props) => {
  const location = useLocation();
  const {movie} = location.state;
  const classes = useStyles();
  
  const [movieYear,setMovieYear] = React.useState();
  const [movieImdb,setMovieImdb] = React.useState({});
  const [movieCast,setMovieCast] = React.useState([]);
  const [movieGenres,setMovieGenres] = React.useState([]);

  const [data, setData] = React.useState({});

 
  const updateMovie = ()=>{
    fetch("/api/movies/updateMovie",
    {
      method: "POST",
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
      }
    ).then((response)=>{
      console.log("Response",response);
        return response.json();
    }).then((movie)=>{
            console.log(movie);
          });
  };

    var imdb = [];
    for(var o in movie.imdb) {
      imdb.push(movie.imdb[o]);
    }
  
    var casts=[];
    for(var c in movie.cast){
      casts.push(movie.cast[c]);
    }
    
    var genres=[];
    for(var g in movie.genres)
    {
      genres.push(movie.genres[g]);
    }

    const year= movie.year.split("-");

    const movieId = movie._id;
    console.log(movieId);
 
    const onCastChangeHandler = (ev) =>{
        let index = ev.currentTarget.getAttribute("id");
        setMovieCast(ev.currentTarget);
        setData({
          "id": movieId,
          "cast": movieCast
        });
      }
 
    
    const onYearChangeHandler = (ev) =>{
      setMovieYear(ev.currentTarget.value);
      setData({
        "id": movieId,
        "year": movieYear
      });
      updateMovie();
    }
    
    const onGenresChangeHandler = (ev) =>{
      let idx = ev.currentTarget.getAttribute("id");
      setMovieGenres(ev.currentTarget.value);
      setData({
        "id": movieId,
        "genres": movieGenres
      });
      updateMovie();
    }


    return (
      <>
      <Fragment >
      <Link to="/" className="btn btn-primary" style={{margin: "10px 0 0 10px"}}>Back</Link>
      <Card className={classes.MovieCard} border="info">
        <Card.Img
          variant="top"
          src={movie.poster}
          style={{ width: "18rem", marginTop: "10px", alignSelf: "center" }}
        />
        <Card.Body>
          <Card.Title><b>{movie.title}</b></Card.Title>
          <br/>
          <Card.Text>{movie.fullplot}</Card.Text>
        
          <Card.Text><strong>Year : </strong> 
          <TextField defaultValue={year[0]} onChange = {onYearChangeHandler} color="secondary"  variant="outlined" size="small"></TextField></Card.Text>
          <Card.Text><b>IMDB Rating : </b>
           <TextField defaultValue={ imdb[0] } color="secondary"  variant="outlined" size="small" > </TextField> 
           </Card.Text>
          <Card.Text><strong>Crew</strong></Card.Text>
          <Card.Text> 
            {
            casts.map((n,i)=>{
                return(
                <TextField key={i} id={i} defaultValue={n} onChange={onCastChangeHandler} style={{margin: '10px', width: 'auto'}} color="secondary"  variant="outlined" size="small" inputProps={{style:{textAlign: 'center', cursor: 'pointer'}}}  ></TextField>
                )
              })
            }</Card.Text>
           <Card.Text><strong>Genre</strong></Card.Text> 
          {
          genres.map((genre)=>{
          return(
            <TextField defaultValue={ genre }  onChange={onGenresChangeHandler} key={genre} style={{margin: '10px' }} variant="outlined" size="small" inputProps={{style: { textAlign: 'center', cursor: 'none' }}}></TextField>
            )
          })
          }
        </Card.Body>
      </Card>
      </Fragment>
    </>
    );
  };

  export default MovieDetailComponent;