import React, {Fragment} from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

// CSS \\
import styles from "./Cards.module.css";

const Cards = ({
    data: { confirmed, deaths, recovered, lastUpdate},
    country,
}) => {
    if(!confirmed){
        return "Retrieving Data...";
    }
    const active = confirmed["value"] - recovered["value"] - deaths["value"];
    let cardDetails = [
        {
            style: styles.infected,
            text: "Infected",
            value: confirmed.value,
            bottomText: "Total Number of COVID Infections",
        },
        {
            style: styles.recovered,
            text: "Recovered",
            value: recovered.value,
            bottomText: "Number of COVID Recoveries",
        },
        {
            style: styles.deaths,
            text: "Deaths",
            value: deaths.value,
            bottomText: "Number of COVID related Deaths",
        },
        {
            style: styles.active,
            text: "Active",
            value: active,
            bottomText: "Active Number of COVID Cases"
        }
    ];
    return(
        <Fragment>
        <div className ={styles.container}>
            <Grid container spacing={4} justify="center">
                {cardDetails.map((detail, index) => (
                    <Grid item component={Card} xs={12} md={2} className={cx(styles.Card, detail.style)} key={index} style={{ margin: "0px 23.675px", padding: "10px"}}>
                        <CardContent>
                            <Typography color="textPrimary" gutterBottom>
                                <b>{detail.text}</b>
                            </Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={detail.value} duration={2} separator=","/>
                            </Typography>
                            <Typography color="textPrimary"> Last Updated: </Typography> 
                            <Typography color="textSecondary" variant="body2">
                                {new Date(lastUpdate).toDateString()}
                            </Typography>
                            <Typography variant="body2">{detail.bottomText}</Typography>
                            <Typography color="textPrimary">{country}</Typography>
                        </CardContent>
                    </Grid>
                ))}
            </Grid>
        </div>
        </Fragment>
    );
};

export default Cards;