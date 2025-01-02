import React, { useState } from "react";
import Card from '@material-ui/core/Card';
import Slider from '@mui/material/Slider';
import { CardHeader } from '@mui/material';
import CardMedia from '@material-ui/core/CardMedia';
import { Button } from 'antd';
import { makeStyles } from '@mui/styles';
// const axios = require("axios");

const useStyles = makeStyles({
    musicImg: {
        width: '60%',
        height: '40%',
        marginTop: '1rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        objectFit: 'fill',
    }
});


let sampleMusics = [
    {
        id: 1,
        name: "Track One",
        artist: "Good Boy",
        color: "red",
        pic: 'https://picsum.photos/seed/picsum/200/300',
        length: 233
    },
    {
        id: 2,
        name: "Track Two",
        artist: "Bad Boy",
        color: "green",
        pic: "https://picsum.photos/200/300?grayscale",
        length: 120
    },
    {
        id: 3,
        name: "Track Three",
        artist: "Medium Boy",
        color: "blue",
        pic: "https://picsum.photos/id/870/200/300?grayscale&blur=2",
        length: 146
    },
    {
        id: 4,
        name: "Track Four",
        artist: "Lonely One",
        color: "purple",
        pic: "https://picsum.photos/id/237/200/300",
        length: 130
    },
    {
        id: 5,
        name: "Track Five",
        artist: "Firefly",
        color: "yellow",
        pic: "https://picsum.photos/id/1/200/300",
        length: 100
    },
];


const MusicPlayer = () => {
    const classes = useStyles();
    const [barLoc, changeBarLoc] = useState(0);
    const [selectedMusic, changeSelectedMusic] = useState(5);
    const loadedList = sampleMusics
    const [playingInterval, setPlayingInterval] = useState();
    const [playButton, changePlayButton] = useState(true);
    const random = false;

    // const getSampleMusic = async () => {
    //     try {
    //         const result = await axios.get(`https://shazam.p.rapidapi.com/charts/track`, {
    //             params: { locale: 'en-US', pageSize: '20', startFrom: '0' }, headers: {
    //                 'x-rapidapi-host': 'shazam.p.rapidapi.com',
    //                 'x-rapidapi-key': '2368c1128cmsh5ce9ce868b89400p17eb24jsnadb112ab5492'
    //             }
    //         });
    //         changeList(result.data);
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const changeBar = (e) => {
        changeBarLoc(e.target.value);
    };

    const play = () => {
        const id = setInterval(
            () => {
                const newBarLoc = barLoc => barLoc;
                console.log(newBarLoc);
                console.log(barLoc, "<=", loadedList[selectedMusic - 1].length);
                if (barLoc <= loadedList[selectedMusic - 1].length) {
                    changeBarLoc(barLoc => barLoc + 1);
                }
                else {
                    next();
                }
            }, 1000
        );
        setPlayingInterval(id);
        changePlayButton(false);
    };

    const pause = () => {
        clearInterval(playingInterval);
        changePlayButton(true);
    };

    const stop = () => {
        changeBarLoc(0);
        clearInterval(playingInterval);
        changePlayButton(true);
    };

    const musicIds = [];
    sampleMusics.forEach(x => musicIds.push(x.id));

    const previous = () => {

        if (musicIds.includes(selectedMusic - 1) || (musicIds.includes(selectedMusic + 1) && selectedMusic !== musicIds[musicIds.length - 1] && selectedMusic !== musicIds[0])) {
            changeSelectedMusic(selectedMusic - 1);
        }
        else {
            changeSelectedMusic(musicIds.length);
        }
        changeBarLoc(0);
    };

    const next = () => {
        if (selectedMusic < musicIds.length && selectedMusic > musicIds[0]) {
            changeSelectedMusic(selectedMusic + 1);
        }
        else if (selectedMusic === musicIds.length) {
            changeSelectedMusic(1);
        }
        else if (selectedMusic === musicIds[0]) {
            changeSelectedMusic(selectedMusic + 1);
        }
        else {
            changeSelectedMusic(1);
        }
        changeBarLoc(0);
    };

    const repeat = () => {

    };

    // useEffect(() => {
    //     getSampleMusic();
    // }, [])

    return (
        <Card className="music-card">
            <CardHeader
                title="Music Player"
                subheader={loadedList[selectedMusic - 1].artist}
                className="music-card-header"
                style={{ color: "white" }}
            />
            <Slider
                aria-label="Small steps"
                className="slider-bitter"
                defaultValue={0}
                value={barLoc}
                onChange={changeBar}
                step={1}
                min={0}
                max={loadedList[selectedMusic - 1].length}
                valueLabelDisplay="off"
            /><div className="music-time-wrapper">
                <p className="time-elapsed">{`${Math.floor(barLoc / 60)}:${(barLoc % 60)}`}</p>
                <p className="total-time">{`${Math.floor(loadedList[selectedMusic - 1].length / 60)}:${(loadedList[selectedMusic - 1].length % 60)}`}</p>
            </div>
            <div className="music-controller-container">
                <Button onClick={!random} className="music-controller-button random-button"><i className="fas fa-random"></i></Button>
                <Button onClick={previous} className="music-controller-button previous-button"><i className="fas fa-backward"></i></Button>
                {playButton ? <Button onClick={play} className="music-controller-button play-button"><i className="fas fa-play"></i></Button> : <Button onClick={pause} className="music-controller-button pause-button"><i className="fas fa-pause"></i></Button>}

                <Button onClick={stop} className="music-controller-button stop-button"><i className="fas fa-stop"></i></Button>
                <Button onClick={next} className="music-controller-button next-button"><i className="fas fa-forward"></i></Button>
                <Button onClick={repeat} className="music-controller-button repeat-button"><i className="fas fa-redo-alt"></i></Button>
            </div>
            <CardMedia
                component="img"
                className={classes.musicImg}
                src={loadedList[selectedMusic - 1].pic}
                alt={loadedList[selectedMusic - 1].pic}
            />
        </Card >
    )


};

export default MusicPlayer;