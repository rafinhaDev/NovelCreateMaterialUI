import React from 'react';
import { makeStyles} from '@material-ui/core/styles'
import ReadCard from './ReadCard';
import places from "../statics/places"
import useWindowPosition from '../hoook/useWindowPosition';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',

    },

}))

export default function Tovisit(){

    const classes =useStyles()
    const checked= useWindowPosition('header')
    return (
        <div className={classes.root} id="place-to-visit">
            <ReadCard place = {places[0]} checked={checked}  />
            <ReadCard place = {places[1]}   checked={checked}/>



        </div>
    )
}