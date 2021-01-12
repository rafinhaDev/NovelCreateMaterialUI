import React, { useEffect, useState } from 'react';
import {makeStyles} from '@material-ui/core/styles'
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



const useStyles = makeStyles((theme) => ({
    root:{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120vh',
        fontFamily: 'Yusei Magic',
    },
    appbar:{
        background: 'none',
        fontFamily: 'Yusei Magic',
    },
    appbarWrapper:{
        width: '80%',
        margin: '0 auto',
    },
    icon:{
      color: '#fff', 
      fontSize: '2rem',
    },
    appbarTitle:{
        flexGrow:'1',
    },
    colorText:{
        color:"#30ECE1"
    },
    container:{
        textAlign:'center'
    },
    title:{
      color: "#fff",
      fontSize: '2.5rem'  
    },
    goDown:{
        color:"#30ECE1",
        fontSize: "4rem",
    },

}))
export default function Header(){
    const classes = useStyles()
    const [checked, setChecked] =useState(false)
    useEffect(() =>{
        setChecked(true)
    },[])
    return(
        <div className={classes.root}>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                <h1 className={classes.appbarTitle}>Novel
                <span className={classes.colorText}>Create </span></h1>
                <IconButton>
                    <SortIcon className={classes.icon}/>
                </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse
            in={checked}
            { ...(true ? {timeout: 3200} : {})}
            collapsedHeight={50}
            >
            <div className={classes.container}>
                <h1 className={classes.title}>Welcome To  <br /> Novel
                <span className={classes.colorText}>Create </span>
                </h1>
                <IconButton>
                    <ExpandMoreIcon className={classes.goDown}/>
                </IconButton>

            </div>
            </Collapse>
        </div>
    )
}