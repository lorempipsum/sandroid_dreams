import React, {useState} from 'react';

import Layout from '../../components/Layout';
import StateVariablesBox from './StateVariables';
import ButtonContainer from "./ButtonContainer";
import './CssTests.css';


// Generate more pleasant random colors.
// Thanks bendc @ https://gist.github.com/bendc/76c48ce53299e6078a76
const randomColor = () => {
    // Why didn't importing this from an external file work?
    "use strict";

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const h = randomInt(0, 360);
    const s = randomInt(42, 98);
    const l = randomInt(40, 90);

    return `hsl(${h},${s}%,${l}%)`;
};

const setColors = (color) => {
    const boxes = document.getElementsByClassName('flexBox');
    const inputColor = color;
    const step = 20;

    for (let i = 0; i < boxes.length; i++) {
        const timeoutLength = 100;
        const color = inputColor?.length ? inputColor : randomColor();
        setTimeout(() => {
            boxes[i].style.backgroundColor = color;
        }, i * timeoutLength - i * i * step);
    }
    //.style.backgroundColor="#" + randomColor;
}

// Start or stop the party depending on whether it is party mode
const party = (isPartyMode) => {

    const boxes = document.getElementsByClassName('flexBox');
    if (isPartyMode) {
        let interval = window.setInterval(() => {
            let color = undefined;
            if (Math.random() > 0.7) {
                color = '#ffffff';
            }
            setColors(color);
        }, 200 + 100 * Math.random())
        console.log(`Setting interval ${interval}`);
        return interval;
    } else {
        console.log("party already happenin");//for clearing all intervals
    }
}


const resetBackground = (interval) => {
    console.log(`Clearing interval ${interval}`);
    clearInterval(interval);
    setColors('#ffffff');
}

const CssTests = (
    {}
) => {
    const [isPartyMode, setIsPartyMode] = useState(false);
    const [lastInterval, setLastInterval] = useState(0);

    const flipPartyMode = (partyMode) => {
        let interval = party(!isPartyMode);
        setLastInterval(interval);
        if (isPartyMode) {
            resetBackground(lastInterval);
        }
        return setIsPartyMode((!partyMode));
    }

    return (<Layout>
        <ButtonContainer>
            <button className="flexButton" onClick={() => flipPartyMode(isPartyMode)} id="partyButton">Party Mode
            </button>
            <button className="flexButton" onClick={() => setColors()} id="generateColors">Colour the boxes</button>
            <button className="flexButton" onClick={() => resetBackground(lastInterval)} id="resetColors">Reset
                colors
            </button>
        </ButtonContainer>

        <StateVariablesBox
            variables={{isPartyMode: JSON.stringify(isPartyMode), lastInterval: JSON.stringify(lastInterval)}}/>

        <p><span>A lovely flex container and a centered flexbox: </span></p>
        <div className="flexContainer justifyCenter">
            <div className="flexBox"/>
        </div>


        <p><span>Flex container with three flexboxes with even spacing: </span></p>
        <div className="flexContainer justifySpaceEvenly">
            <div className="flexBox"/>
            <div className="flexBox"/>
            <div className="flexBox"/>
        </div>

        <p><span>Stupid amount of boxes: </span></p>
        <div className="flexContainer justifySpaceEvenly">
            {[...Array(50)].map((e, i) => <div className="flexBox"/>
            )
            }
        </div>
        <div className="spacer"/>

        <p><span>Stupid amount of boxes in an AUTO grid: </span></p>
        <div className="gridContainer justifySpaceEvenly">
            {[...Array(200)].map((e, i) => <div className="flexBox small"/>
            )
            }

        </div>

    </Layout>)
}

export default CssTests;
