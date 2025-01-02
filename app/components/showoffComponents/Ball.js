import { Button } from 'antd';
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';



const Ball = (props) => {
    const [winner, setWinner] = useState(true);
    const WinnerObj = () => {
        return (
            <div>
                <p className="winning-message">You Won!</p>
                <Button type="primary" style={{
                    position: "relative",
                    top: `${props.y - 220}px`,
                    left: `${props.x - 100}px`,
                    padding: "2rem",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    '& span': {
                        display: "none",
                    },
                }} onClick={() => setWinner(!winner)}>reset</Button>
            </div>
        );
    };

    return (
        winner ? <Button onClick={() => setWinner(!winner)} style={{
            marginRight: 'auto',
            marginLeft: '30%',
            width: '100px'
        }}> </Button > : <WinnerObj />
    )
};

export default Ball;