import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Slider from '@mui/material/Slider';
import Radar from './Radar';
import { CardHeader } from '@mui/material';

const RadarController = () => {
    let [data, setData] = useState([
        {
            "taste": "fruity",
            "chardonay": 50
        },
        {
            "taste": "bitter",
            "chardonay": 50
        },
        {
            "taste": "heavy",
            "chardonay": 50
        },
        {
            "taste": "strong",
            "chardonay": 50
        },
        {
            "taste": "sunny",
            "chardonay": 50
        }
    ]);

    const getFruityValue = (e) => {
        let newData = [...data];
        newData[0].chardonay = e.target.value;
        setData(newData);
    };

    const getBitterValue = (e) => {
        let newData = [...data];
        newData[1].chardonay = e.target.value;
        setData(newData);
    };

    const getHeavyValue = (e) => {
        let newData = [...data];
        newData[2].chardonay = e.target.value;
        setData(newData);
    };

    const getStrongValue = (e) => {
        let newData = [...data];
        newData[3].chardonay = e.target.value;
        setData(newData);
    };

    const getSunnyValue = (e) => {
        let newData = [...data];
        newData[4].chardonay = e.target.value;
        setData(newData);
    };

    return (
        <Card className="radar-card">
            <CardHeader
                title="Radar"
            />
            <div className="sliders">
                <Slider
                    aria-label="Small steps"
                    className="slider-fruity"
                    defaultValue={50}
                    onChange={getFruityValue}
                    step={10}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                />
                <Slider
                    aria-label="Small steps"
                    className="slider-bitter"
                    defaultValue={50}
                    onChange={getBitterValue}
                    step={10}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                />
                <Slider
                    aria-label="Small steps"
                    className="slider-heavy"
                    defaultValue={50}
                    onChange={getHeavyValue}
                    step={10}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                />
                <Slider
                    aria-label="Small steps"
                    className="slider-strong"
                    defaultValue={50}
                    onChange={getStrongValue}
                    step={10}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                />
                <Slider
                    aria-label="Small steps"
                    className="slider-sunny"
                    defaultValue={50}
                    onChange={getSunnyValue}
                    step={10}
                    marks
                    min={0}
                    max={100}
                    valueLabelDisplay="auto"
                />
            </div>
            <Radar data={data} />
        </Card>
    )
};

export default RadarController;