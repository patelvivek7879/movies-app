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


    const onCastChangeHandler = (ev) =>{
        let attr = ev.currentTarget;
        let index = attr.getAttribute("id");
    }

    const year= movie.year.split("-");
    
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
          <TextField defaultValue={year[0]} color="secondary"  variant="outlined" size="small"></TextField></Card.Text>
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
            <TextField defaultValue={ genre }  key={genre} style={{margin: '10px' }} variant="outlined" size="small" inputProps={{style: { textAlign: 'center', cursor: 'none' }}}></TextField>
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