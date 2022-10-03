import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_GENRES,
  UPDATE_CURRENT_GENRE,
} from '../../utils/actions';
import Grid from "@mui/material/Grid";
import { QUERY_GENRES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';
import GenreButton from '../GenreButton';
import { Link } from 'react-router-dom';

const GenreCards = () => {
    const [state, dispatch] = useStoreContext();

  const { genres } = state;

  const { loading, data: genreData } = useQuery(QUERY_GENRES);

  useEffect(() => {
    if (genreData) {
      dispatch({
        type: UPDATE_GENRES,
        genres: genreData.genres,
      });
      genreData.genres.forEach((genre) => {
        idbPromise('genres', 'put', genre);
      });
    } else if (!loading) {
      idbPromise('genres', 'get').then((genres) => {
        dispatch({
          type: UPDATE_GENRES,
          genres: genres,
        });
      });
    }
  }, [genreData, loading, dispatch]);

  const handleGenreClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_GENRE,
      currentGenre: id,
    });
  };

  let displayGenres = [{genre: 'Rock', url: 'https://pbs.twimg.com/media/Fdtw-v-XgAES02U?format=jpg&name=large'},
  {genre: 'Pop', url: 'https://res.cloudinary.com/daheygjio/image/upload/v1664758535/albumcovers/10C7A57E-18F5-4FAB-87FB-DA25CD07AFA3_1_201_a_fee8fs.jpg'},
  {genre: 'Hip Hop', url: 'https://res.cloudinary.com/daheygjio/image/upload/v1664663346/albumcovers/B37FE2DA-1431-4651-A94A-2F70DFAF5D7B_1_201_a_ldgplz.jpg'},
  {genre: 'Country / Folk', url: 'https://res.cloudinary.com/daheygjio/image/upload/v1664665294/albumcovers/FCB82979-17BF-47A6-B910-9BF58435D653_1_201_a_b4r33a.jpg'}]

  function getGenreIds(allGenres) {
    let genreList = [...displayGenres];
    genreList.forEach(object => {
      for (let i=0; i<allGenres.length; i++) {
        if (allGenres[i].name === object.genre) {
          object._id = allGenres[i]._id
          return
        }
      }
    })
    return genreList
  }
  displayGenres = getGenreIds(genres)
  return (
    <Grid container >
        {displayGenres.map(item => (
          <Grid item xs={12} md={3}>
            <Link to='/vinyls'>
                <GenreButton className="genre" handleClick = {() => handleGenreClick(item._id)} genre={item.genre} url={item.url} key = {item.id} _id={item._id} alt="#"/>  
            </Link>        
          </Grid>
        ))}
    </Grid>
  )

}
export default GenreCards
