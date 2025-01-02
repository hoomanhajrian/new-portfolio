import React from 'react';
import { ResponsiveRadar } from '@nivo/radar'

const Radar = (props) => {
    const data = props.data;
    return (
        <ResponsiveRadar
            data={data}
            keys={['chardonay']}
            indexBy="taste"
            valueFormat=">-.2f"
            margin={{ top: 50, right: 80, bottom: 250, left: 80 }}
            borderColor={{ from: 'color' }}
            gridLabelOffset={36}
            dotSize={10}
            dotColor={{ theme: 'background' }}
            dotBorderWidth={2}
            colors={{ scheme: 'nivo' }}
            blendMode="multiply"
            motionConfig="wobbly"
            legends={[
                {
                    anchor: 'top-left',
                    direction: 'column',
                    translateX: -50,
                    translateY: -40,
                    itemWidth: 80,
                    itemHeight: 20,
                    itemTextColor: '#777',
                    symbolSize: 12,
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
    )
};

export default Radar;