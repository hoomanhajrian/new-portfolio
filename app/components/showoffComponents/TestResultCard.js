import React from 'react';
import { Card } from '@material-ui/core';
import { ResponsivePie } from '@nivo/pie';

// function rotateLeft(arr) {
//     let first = arr.shift();
//     return arr;
// };


const TestResultCard = (props) => {
    const answers = props.data;
    answers[0] = '';
    const totalQuestions = props.totalQuestions;

    const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
    const rightAnswer = countOccurrences(answers, true);
    const wrongAnswer = (totalQuestions - rightAnswer);

    const data = [
        {
            "id": "right",
            "label": "Right",
            "value": `${rightAnswer}`,
            "color": "hsl(99, 72%, 48%)"
        },
        {
            "id": "wrong",
            "label": "Wrong",
            "value": `${wrongAnswer}`,
            "color": "hsl(33, 59%, 34%)"
        }]


    return (
        <Card className='test-card-result'>
            <ResponsivePie
                data={data}
                margin={{ top: 30, right: 80, bottom: 80, left: 80 }}
                innerRadius={.7}
                padAngle={0.7}
                cornerRadius={3}
                activeOuterRadiusOffset={8}
                borderWidth={1}
                borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
                arcLinkLabelsSkipAngle={10}
                arcLinkLabelsTextColor="#333333"
                arcLinkLabelsThickness={2}
                arcLinkLabelsColor={{ from: 'color' }}
                arcLabelsSkipAngle={10}
                arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 2]] }}
                defs={[
                    {
                        id: 'dots',
                        type: 'patternDots',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        size: 4,
                        padding: 1,
                        stagger: true
                    },
                    {
                        id: 'lines',
                        type: 'patternLines',
                        background: 'inherit',
                        color: 'rgba(255, 255, 255, 0.3)',
                        rotation: -45,
                        lineWidth: 6,
                        spacing: 10
                    }
                ]}
                fill={[
                    {
                        match: {
                            id: 'right'
                        },
                        id: 'lines'
                    },
                    {
                        match: {
                            id: 'wrong'
                        },
                        id: 'dots'
                    },
                ]}
                legends={[
                    {
                        anchor: 'bottom',
                        direction: 'row',
                        justify: false,
                        translateX: 0,
                        translateY: 56,
                        itemsSpacing: 0,
                        itemWidth: 100,
                        itemHeight: 18,
                        itemTextColor: '#999',
                        itemDirection: 'left-to-right',
                        itemOpacity: 1,
                        symbolSize: 18,
                        symbolShape: 'circle',
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemTextColor: '#000'
                                }
                            }
                        ]
                    }
                ]}
            />

        </Card>
    )

};

export default TestResultCard;