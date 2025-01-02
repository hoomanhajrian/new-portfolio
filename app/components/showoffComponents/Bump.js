import React from 'react';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@mui/material';
import { ResponsiveBump } from '@nivo/bump'
const data = [
    {
        "id": "Serie 1",
        "data": [
            {
                "x": 2000,
                "y": 9
            },
            {
                "x": 2001,
                "y": 10
            },
            {
                "x": 2002,
                "y": 7
            },
            {
                "x": 2003,
                "y": 4
            },
            {
                "x": 2004,
                "y": 1
            }
        ]
    },
    {
        "id": "Serie 4",
        "data": [
            {
                "x": 2000,
                "y": 11
            },
            {
                "x": 2001,
                "y": 12
            },
            {
                "x": 2002,
                "y": 5
            },
            {
                "x": 2003,
                "y": 15
            },
            {
                "x": 2004,
                "y": 7
            }
        ]
    },
    {
        "id": "Serie 5",
        "data": [
            {
                "x": 2000,
                "y": 8
            },
            {
                "x": 2001,
                "y": 2
            },
            {
                "x": 2002,
                "y": 4
            },
            {
                "x": 2003,
                "y": 3
            },
            {
                "x": 2004,
                "y": 4
            }
        ]
    },
    {
        "id": "Serie 9",
        "data": [
            {
                "x": 2000,
                "y": 1
            },
            {
                "x": 2001,
                "y": 4
            },
            {
                "x": 2002,
                "y": 10
            },
            {
                "x": 2003,
                "y": 6
            },
            {
                "x": 2004,
                "y": 6
            }
        ]
    },
    {
        "id": "Serie 10",
        "data": [
            {
                "x": 2000,
                "y": 6
            },
            {
                "x": 2001,
                "y": 3
            },
            {
                "x": 2002,
                "y": 12
            },
            {
                "x": 2003,
                "y": 2
            },
            {
                "x": 2004,
                "y": 12
            }
        ]
    },
    {
        "id": "Serie 11",
        "data": [
            {
                "x": 2000,
                "y": 2
            },
            {
                "x": 2001,
                "y": 9
            },
            {
                "x": 2002,
                "y": 11
            },
            {
                "x": 2003,
                "y": 9
            },
            {
                "x": 2004,
                "y": 8
            }
        ]
    },
    {
        "id": "Serie 12",
        "data": [
            {
                "x": 2000,
                "y": 3
            },
            {
                "x": 2001,
                "y": 11
            },
            {
                "x": 2002,
                "y": 9
            },
            {
                "x": 2003,
                "y": 7
            },
            {
                "x": 2004,
                "y": 3
            }
        ]
    }
];

const Bump = () => {
    return (
        <Card className="bump-card">
            <CardHeader
                title="Trends"
            />
            <ResponsiveBump
                data={data}
                margin={{ top: 40, right: 100, bottom: 80, left: 60 }}
                xPadding={0.15}
                xOuterPadding={0}
                yOuterPadding={0.9}
                colors={{ scheme: 'paired' }}
                lineWidth={3}
                activeLineWidth={10}
                inactiveLineWidth={7}
                opacity={0.65}
                activeOpacity={0.4}
                inactiveOpacity={0.15}
                startLabelPadding={17}
                pointSize={7}
                activePointSize={10}
                inactivePointSize={0}
                pointColor={{ theme: 'background' }}
                pointBorderWidth={3}
                activePointBorderWidth={3}
                pointBorderColor={{ from: 'serie.color' }}
                axisTop={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: -36
                }}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: '',
                    legendPosition: 'middle',
                    legendOffset: 32
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'ranking',
                    legendPosition: 'middle',
                    legendOffset: -40
                }}
            />
        </Card>
    )
}

export default Bump;