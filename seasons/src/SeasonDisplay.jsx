import React from 'react';

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 
            ? 'summer' 
            : 'winter';
    }
    else{
        return lat > 0
            ? 'winter'
            : 'summer'
    }
};

const SeasonDisplay = (props) =>{
    const season = getSeason(props.position.latitude, new Date().getMonth());
    const displayText = season === 'winter' ? 'Burr, it is chilly' : 'Lets hit the beach';
    const displayIcon = season === 'winter' ? 'snowflake' : 'sun';
    return (
        <div>
            <i className={`${displayIcon} icon`} />
            <h1>{displayText}</h1>
            <i className={`${displayIcon} icon`} />
        </div>
    );
};

export default SeasonDisplay;