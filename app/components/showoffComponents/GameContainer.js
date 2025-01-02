import React, { useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import { Card, CardHeader, CardContent, FormHelperText } from '@mui/material';
import { makeStyles } from '@mui/styles';
import GuessGame from './GuessGame';

const useStyles = makeStyles({
    helperText: {
        color: 'red',
        background: 'none',
        boxShadow: 'none',
    }
});


const GameContainer = () => {
    const [randomNumber, changeRandomNumber] = useState('');
    const [difficulty, changeDifficulty] = useState('');
    const [helperText, setHelperText] = useState('');
    const [started, changeGameStatus] = useState(false);
    const [max, changeMax] = useState(0);
    const classes = useStyles();

    const startGame = () => {

        if (difficulty === '') {
            setHelperText("Please choose a difficulty!")
        }
        else {
            switch (difficulty) {
                case "easy":
                    changeRandomNumber(Math.floor(Math.random() * 10));
                    changeMax(10);
                    break;
                case "medium":
                    changeRandomNumber(Math.floor(Math.random() * 100));
                    changeMax(100);
                    break;
                case "hard":
                    changeRandomNumber(Math.floor(Math.random() * 1000))
                    changeMax(1000);
                    break;
                default:
                    break;
            }
            changeGameStatus(true);
        }

    };



    const handleRadioChange = (event) => {
        changeDifficulty(event.target.value);
    };

    return (
        <Card className='guess-number-card' id='gameContainer'>
            <CardHeader
                title="Guess the number"
            />
            {!started ? <CardContent>
                <form>
                    <FormControl sx={{ m: 3 }} variant="standard">
                        <FormLabel id="demo-error-radios">choose difficulty:</FormLabel>
                        <RadioGroup
                            aria-labelledby="demo-error-radios"
                            name="numberGame"
                            onChange={handleRadioChange}
                        >
                            <FormControlLabel value="easy" control={<Radio />} label={"Easy(0-10)"} />
                            <FormControlLabel value="medium" control={<Radio />} label={"Medium(0-100)"} />
                            <FormControlLabel value="hard" control={<Radio />} label={"Hard(0-1000)"} />
                        </RadioGroup>
                        <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
                        <Button
                            onClick={startGame}
                            sx={{ mt: 1, mr: 1 }}
                            variant="outlined">
                            Let's do it
                        </Button>
                    </FormControl>
                </form>
            </CardContent> : <GuessGame data={randomNumber} max={max} />}
        </Card>
    )

};

export default GameContainer;