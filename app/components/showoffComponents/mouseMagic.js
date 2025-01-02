import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@mui/material';
import Ball from './Ball'


const useMove = () => {
    const [position, setPosition] = useState({ x: '200', y: '250' });

    const handleMouseMove = e => {
        e.persist()
        setPosition(position => ({ ...position, x: e.clientX, y: e.clientY }))
    }
    return {
        x: position.x,
        y: position.y,
        handleMouseMove,
    }
}



const MouseMagic = () => {
    const title = "Mouse Game";
    const subHeader = "Try to click on the red ball(not for mobile devices)";

    const { x, y, handleMouseMove } = useMove();

    return (
        <Card className="mouse-game-card" onMouseMove={handleMouseMove}>
            <CardHeader
                title={title}
                subheader={subHeader}
            />
            <Ball x={x} y={y} />
        </Card>
    );
};

export default MouseMagic;