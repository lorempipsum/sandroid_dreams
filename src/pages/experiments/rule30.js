import React, {useEffect, useState} from 'react';

import Layout from '../../components/Layout';
import StateVariablesBox from './StateVariables';

import styles from './rule30.module.css';
import ButtonContainer from "./ButtonContainer";

const Rule30 = () => {

    const initialConfig = new Array(100).fill(0);
    initialConfig[50] = 1;

    const [config, setConfig] = useState(initialConfig);
    const [configs, setConfigs] = useState([initialConfig]);
    const [time, setTime] = useState(0);
    const [lastInterval, setLastInterval] = useState(0);

    const getNewConfig = (config) => {
        let new_config = new Array(100).fill(0);
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
        if (time < 100) {
            let interval = setInterval(() => {
                setTime(time => time + 1);
                let newConfig = getNewConfig(config);
                setConfig(newConfig);
                setConfigs(configs => [...configs, newConfig]);

            }, 1000);

            return () => clearInterval(interval);
        }

    }, [config])

    const startSimulation = () => {
        alert("This button not implemented")
    }

    console.log(config);
    console.log(configs);
    return <Layout title="Experiments - Rule 30">
        <div><p>Genuary day 2 test</p></div>
        <ButtonContainer>
            <button className="flexButton" onClick={() => startSimulation()} id="partyButton">Party Mode
            </button>
        </ButtonContainer>
        <StateVariablesBox variables={{lastInterval: lastInterval, config: config, time: time}}/>
        <p><span>Rule 30 running on one row: </span></p>
        <div className={styles.oneRowGridContainer}>
            {config.map((e, i) => {
                    if (config[i] === 0) {
                        return <div className={`${styles.flexBox}`}/>
                    }
                    if (config[i] === 1) {
                        return <div className={`${styles.flexBox} + ' ' + ${styles.blackBox}`}/>
                    } else {
                        return <div className={`${styles.flexBox} + ' ' + ${styles.redBox}`}/>
                    }
                }
            )
            }

        </div>
        <p><span>Rule 30 running on all the rows: </span></p>
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