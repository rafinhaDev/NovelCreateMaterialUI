import React from 'react';
import { makeStyles} from '@material-ui/core/styles'
import ReadCard from './ReadCard';

const useStyles = makeStyles((theme) => ({
    root:{
        minHeight: '100vh',

    },

}))

export default function Tovisit(){
    const classes =useStyles()
    return (
        <div className={classes.root}>
            <ReadCard />



        </div>
    )
}