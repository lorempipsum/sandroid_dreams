import React, {useEffect, useState} from 'react';

import Layout from '../../components/Layout';
import Rule30Controls from "./Rule30Controls";
import Rule30OneRow from "./Rule30OneRow";

import styles from './rule30.module.css';

const Rule30 = () => {

    const lineLength = 50;
    const initialConfig = new Array(lineLength).fill(0);
    initialConfig[Math.floor(lineLength / 2)] = 1;

    const [config, setConfig] = useState(initialConfig);
    const [configs, setConfigs] = useState([initialConfig]);
    const [time, setTime] = useState(0);
    const [timeStep, setTimeStep] = useState(1000);
    const [isStarted, startStopSim] = useState(false);
    const [lastInterval, setLastInterval] = useState(0);

    const variables = {lastInterval: lastInterval, time: time, timeStep: timeStep};

    const getNewConfig = (config) => {
        let new_config = new Array(lineLength).fill(0);
        for (let i = 1; i < config.length - 1; i++) {
            // The formula is [left_cell XOR (central_cell OR right_cell)].
            // https://en.wikipedia.org/wiki/Rule_30

            const left_cell = config[i - 1];
            const center_cell = config[i];
            const right_cell = config[i + 1];

            const new_center_cell = left_cell ^ (center_cell || right_cell);
            new_config[i] = new_center_cell;
        }
        return new_config;
    }
    useEffect(() => {
        if (isStarted) {
            let interval = setInterval(() => {
                setTime(time => time + 1);
                if (time < lineLength / 2) {

                    let newConfig = getNewConfig(config);
                    setConfig(newConfig);
                    setConfigs(configs => [...configs, newConfig]);
                }

            }, timeStep);

            return () => clearInterval(interval);
        }


    }, [config, time, timeStep, isStarted])

    const speedUp = () => {
        setTimeStep(timeStep => timeStep / 2)
    }
    const slowDown = () => {
        setTimeStep(timeStep => timeStep * 1.5)
    }
    const reset = () => {
        setTimeStep(timeStep => 1000);
        setTime(0);
        setConfig(initialConfig);
        setConfigs([initialConfig]);
    }
    const startStop = () => {
        startStopSim(!isStarted);
    }
    const stop = () => {
        startStopSim(false);
    }
    const start = () => {
        startStopSim(true);
    }


    return <Layout title="Experiments - Rule 30">

        <p>I stumbled upon something called Genuary happening on the internet, which much like Inktober gives you a
            prompt for each day of the month to write some generative art code for. I have no illusions of taking part
            every day, but the prompt for January 2nd was "Rule 30", a cellular automata algorithm, which piqued my
            interest. </p>
        <p>I've always liked cellular automata, playing around with The Game of Life and watching videos of them, but
            had never given it a go at coding something myself. According to <a className="inlineLink"
                                                                                href="https://en.wikipedia.org/wiki/Rule_30">Wikipedia</a> Rule
            30 is one of the simplest cellular
            automata
            to get started with, and lends itself well to using CSS grid, so I thought I'd give it a go. </p>

        <p>It ended up taking about 2-3 hours in the end, quite a bit longer than I had anticipated. But that also
            involved making the page and the controls for it, which I hadn't factored in, but anyway. There it is.
        </p>
        <p>Click the buttons to speed up, slow down or reset the simulation respectively. It only creates new frames up
            to 25 seconds, as I found that to be about the max number of horizontal boxes I could fit on a typical
            mobile
            screen and still keep the look I was after. </p>
        <Rule30Controls variables={variables} speedUp={speedUp} slowDown={slowDown} reset={reset} startStop={startStop}
                        isStarted={isStarted}/>
        <p><span>Here it is running on a single row, with the new state replacing the old one at each timestep. </span>
        </p>
        <Rule30OneRow config={config}/>
        <p><span>Below, each subsequent frame is placed below the old one, creating the familiar structures that you see when searching for cellular automata. </span>
        </p>
        <div className={styles.gridContainer}>
            {configs.map((config) => {
                    return (
                        config.map((e, i) => {
                            if (config[i] === 0) {
                                return <div className={`${styles.flexBox}`}/>
                            }
                            if (config[i] === 1) {
                                return <div className={`${styles.flexBox} + ' ' + ${styles.blackBox}`}/>
                            } else {
                                return <div className={`${styles.flexBox} + ' ' + ${styles.redBox}`}/>
                            }
                        })
                    )

                }
            )
            }
        </div>

    </Layout>
}

export default Rule30;