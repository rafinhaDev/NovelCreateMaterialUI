import React from 'react'; 
import {makeStyles} from '@material-ui/core/styles'
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import Tovisit from './components/Tovisit';

const useStyles = makeStyles ((theme) => ({
  root: {
    height: '250vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/libro.jpg'})`,
    backgroundRepeat: 'no-repear',
    backgroundSize: 'cover',

  },

}))
export default function App(){
  const classes = useStyles()
    return(
      <div className={classes.root}>
        <CssBaseline />
        <Header />
        <Tovisit />

      </div>
    )
  
}