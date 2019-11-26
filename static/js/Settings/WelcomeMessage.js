import React from 'react';
import { AppContext } from '../AppProvider';

export default function ({firstVisit}){
    return (
        <AppContext.Consumer>            
            {({firstVisit}) =>             
                firstVisit ? <div> Welcome to Dash, please select your favorite coins {' '}</div> : null                
            }
            
        </AppContext.Consumer>
    )
}
