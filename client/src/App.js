import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import Grid from "@material-ui/core/Grid";
import { Divider, Typography } from "@material-ui/core";
import { lookAndFeel } from "../src/styles/styles";
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MoviesListComponent from "./components/MovieListComponent";
import { getMovies } from "./api/index"

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  shape: {
    backgroundColor: theme.palette.primary.main,
    width: 40,
    height: 40,
  },
  shapeCircle: {
    borderRadius: '50%',
  },
}));

// const getMovies = () => {
//   const promise = new Promise((resolve) => {
//     fetch("/api/movies")
//       .then((response) => {
//         return response.json();
//       })
//       .then((movies) => {
//         resolve(movies);
//       });
//   });
//   return promise;
// };

const App = () => {
  const classes = useStyles();
  const [movies, setMovies] = React.useState([]);
  const [mode, setMode] = React.useState("movieList");

  const circle = <div className={clsx(classes.shape, classes.shapeCircle)} />;

  //have to done with saga
  React.useEffect(() => {
    getMovies().then((movies) => {
      setMovies(movies);
    }, (error) => { console.log(error) });
  }, []);


  const onChangeMode = () => {
    setMode("movieDetail");
  }


  const applyFilter = (f) => {
    setMovies(f);
  }

  const genres = [];
  for (var i = 0; i < movies.length; i++) {
    genres.push(movies[i].genres);
  }

  return (
    <>
      {
        mode === "movieList" && <Fragment>
          <div style={{ display: 'flex' }}>
            <Typography variant="h2" style={{ fontFamily: 'Calibri' }}>The Modern Data</Typography>
            <span style={{ marginLeft: 'auto', marginTop: '10px', marginRight: '10px' }}>
              {circle}
            </span>
          </div>
          <Divider />
          <SortByGenreComponent applyFilter={applyFilter} />
          <Divider />
          <MoviesListComponent movies={movies} onChangeMode={onChangeMode} />
        </Fragment>
      }
    </>
  );
};

const SortByGenreComponent = withStyles(lookAndFeel)(({ classes, applyFilter }) => {

  let genres = [];
  const [amovies, setAMovies] = React.useState([]);

  React.useEffect(() => {
    getMovies().then((movies) => {
      setAMovies(movies);
    }, (error) => { console.log(error) });
  }, []);

  for (var i = 0; i < amovies.length; i++) {
    genres.push(amovies[i].genres);
  }

  const moviesGenres = [...new Set(genres.flat(1))];

  var sortedMovies = [];

  const sortMovies = (ev) => {
    let genreName = ev.currentTarget.value;
    for (var i = 0; i < amovies.length; i++) {
      if (amovies[i].genres.includes(genreName)) {
        sortedMovies.push(amovies[i]);
      }
    }
    applyFilter(sortedMovies);
  };

  return (
    <>
      <Typography style={{ textAlign: "center", marginTop: "15px", fontWeight: 'bold' }}>Sort By Genre</Typography>
      <div className={classes.mainContainer}>
        <Grid container spacing={4}>
          <Grid item>
            {moviesGenres.map((genre, index) => {
              return (
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={sortMovies}
                  id={genre}
                  key={index}
                  value={genre}
                >
                  {genre}
                </Button>
              );
            })}
          </Grid>
        </Grid>
      </div>
    </>
  );
});


export default App;
