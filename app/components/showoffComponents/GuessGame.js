import React, { useState } from 'react';
import { CardContent } from '@mui/material';
import Slider from '@mui/material/Slider';
import { Button } from 'antd';
import { FormHelperText, Input, InputLabel } from '@mui/material';
import Confetti from 'react-confetti';

const GuessGame = (props) => {
    const height = document.getElementById('gameContainer').clientHeight;
    const width = document.getElementById('gameContainer').clientWidth;
    const [value, setValue] = useState(0);
    const { data: answer, max } = props;
    const [helperText, setHelperText] = useState('');
    const [answered, setAnswered] = useState(false);

    const marks = [
        {
            value: 0,
            label: '0',
        },
        {
            value: max,
            label: `${max}`,
        },
    ];


    const getSliderValue = (event) => {
        setValue(event.target.value);

    };

    const checkAnswer = () => {
        if (value > answer) {
            setHelperText("Go Lower!");
        }
        else if (value < answer) {
            setHelperText("Go Higher!");
        }
        else {
            setHelperText("Good Job you got it!");
            setAnswered(true);
        }

    };

    const setInputValue = (event) => {
        setValue(event.target.value);
    };



    return (
        <CardContent>
            <Slider
                disabled={answered}
                aria-label="Small steps"
                className="guessgame-slider"
                onChange={getSliderValue}
                step={1}
                value={value}
                min={0}
                max={max}
                valueLabelDisplay="auto"
                marks={marks}
            />
            <InputLabel
                focused
            /><Input
                disabled={answered}
                type='number'
                onChange={setInputValue}
                value={value}
            />
            <FormHelperText>{helperText}</FormHelperText>
            {!answered ? <Button
                onClick={checkAnswer}
                sx={{ mt: 1, mr: 1 }}
                variant="outlined">
                Submit Answer
            </Button> :
                <Confetti
                    className='confetti'
                    gravity={0.4}
                    run={true}
                    width={width}
                    height={height}
                />}
        </CardContent>
    )

};


export default GuessGame;