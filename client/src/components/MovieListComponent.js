import React,{Fragment} from 'react';
import { useHistory, withRouter} from 'react-router-dom';
import { Card, CardGroup} from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { useStyles } from '../styles/styles';

const MoviesListComponent = ({ filter,movies}) => {

    const classes = useStyles();
    const history = useHistory() ;

    const sendToMovie = (movie) => {
      history.push({
        pathname : "/movie", 
        state : {
          movie 
        }
      });
    }

    return (
      <Fragment>
        <div className={classes.root}>
          <Grid container spacing={3}>
            {movies?.map((movie) => {
              return (
                <CardGroup key={movie?.id} onClick={() => sendToMovie(movie)} className={classes.card}>
                  <Card
                    style={{ width: "18rem" }}
                    className="box"
                    id={movie.id}
                    value={movie}
                  >
                    {movie.poster !== undefined ? (
                      <Card.Img
                        variant="top"
                        src={movie.poster}
                        style={{ height: "390px", width: "285px" }}
                      />
                    ) : (
                      <h1
                        style={{
                          fontSize: "4rem",
                          height: "390px",
                          width: "285px",
                        }}
                      >
                        Not Available
                      </h1>
                    )}
                    <Card.Body style={{height: '115px', marginTop: '10px'}}>
                      <Card.Title>{movie?.title} </Card.Title>
                       <Card.Text>
                       <b>IMDB Rating :</b> {movie?.imdb?.rating?.["$numberDouble"]}
                      </Card.Text> 
                    </Card.Body>
                  </Card>
                </CardGroup>  
              );
            })}
          </Grid>
        </div>
      </Fragment>
      
    );
  };

  export default withRouter(MoviesListComponent);