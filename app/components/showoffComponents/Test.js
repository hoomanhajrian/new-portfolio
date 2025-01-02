import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@material-ui/core';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import FormHelperText from '@mui/material/FormHelperText';
import TestResultCard from './TestResultCard';


// sample data
const testData = [
    {
        id: 0,
        name: 'Continent',
        question: 'Which continent is Canada located in?',
        answers: ['Asia', 'America', 'Africa', 'I do not know'],
        answer: "America"
    },
    {
        id: 1,
        name: 'Province',
        question: 'Where is British columbia located?',
        answers: ['West', 'East', 'North', 'South'],
        answer: "West"
    },
    {
        id: 2,
        name: 'Coding',
        question: 'Which Language is not OOP?',
        answers: ['C++', 'C#', 'JavaScript', 'HTML'],
        answer: "HTML"
    }
]

const userAnswers = [];

const Test = () => {
    const questions = testData;
    const [questionNumber, changeQuestionNumber] = useState(0);
    const [question, changeQuestion] = useState(questions[0]);
    const [value, setValue] = useState('');
    const [error, setError] = useState(false);
    const [helperText, setHelperText] = useState('');
    const [submited, changeSubmited] = useState(false);



    // on change on radio buttons
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setError(false);
    };




    // check if its a right answer and add it to answers
    const checkAnswer = () => {

        if (value.toLocaleLowerCase() === question.answer.toLocaleLowerCase()) {
            // const johnIndex = persons.data.findIndex(p => p.name === "John")
            userAnswers.push(true);
        }
        else {
            userAnswers.push(false);
        }
    };


    const nextSubmit = (event) => {
        const buttonName = event.target.innerText.toLowerCase();

        if (buttonName === "next") {
            if (value === '') {
                setHelperText("Please choose a value!");
            }
            else {
                changeQuestionNumber(questionNumber + 1);
                changeQuestion(questions[questionNumber]);
                checkAnswer();
                setValue('');
            }
        }
        else {
            if (value === '') {
                setHelperText("Please choose a value!");
            }
            else {
                checkAnswer();
                changeSubmited(true);
            }
        }
    };

    const handlePrevious = () => {
        changeQuestionNumber(questionNumber - 1);
        changeQuestion(questions[questionNumber]);
        console.log(questionNumber);
    };

    const qNum = () => `Question number: ${question.id + 1}/${questions.length}`;


    if (!submited) {
        return (
            <Card className="test-card">
                <CardHeader
                    title={question.name}
                    subheader={qNum()}
                />
                <CardContent>
                    <form>
                        <FormControl sx={{ m: 3 }} error={error} variant="standard">
                            <FormLabel id="demo-error-radios">{question.question}</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-error-radios"
                                name="test"
                                value={value}
                                onChange={handleRadioChange}
                            >
                                {question.answers.map((answer) => {
                                    return <FormControlLabel key={answer} value={answer} control={<Radio />} label={answer} />
                                })}
                            </RadioGroup>
                            <FormHelperText>{helperText}</FormHelperText>
                            <Button
                                disabled={question.id === 0}
                                onClick={handlePrevious}
                                sx={{ mt: 1, mr: 1 }}
                                variant="outlined">
                                Previous
                            </Button>
                            <Button onClick={nextSubmit} sx={{ mt: 1, mr: 1 }} variant="outlined">
                                {question.id === questions.length - 1 ? "Submit" : "Next"}
                            </Button>
                        </FormControl>
                    </form>
                </CardContent>
            </Card>
        )
    } else {
        return (<TestResultCard data={userAnswers} totalQuestions={questions.length} />)
    }

};

export default Test;