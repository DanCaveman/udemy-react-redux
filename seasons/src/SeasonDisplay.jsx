import './SeasonDisplay.css';
import React from 'react';



const seasonConfig = {
    summer: {
        seasonName: "summer",
        displayText: "Let's hit the beach!",
        iconName: "sun"
    },
    winter: {
        seasonName: "winter",
        displayText: "Burr it is cold!",
        iconName: "snowflake"
    }
};
const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 
            ? seasonConfig.summer 
            : seasonConfig.winter;
    }
    else{
        return lat > 0
            ? seasonConfig.winter
            : seasonConfig.summer
    }
};

const SeasonDisplay = (props) =>{
    const season = getSeason(props.position.latitude, new Date().getMonth());
    return (
        <div className={`season-display ${season.seasonName}`} >
            <i className={`icon-left massive ${season.iconName} icon`} />
            <h1>{season.displayText}</h1>
            <i className={`icon-right massive ${season.iconName} icon`} />
        </div>
    );
};

export default SeasonDisplay;