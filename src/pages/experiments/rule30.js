import React from 'react';

import Layout from '../../components/Layout';
import StateVariablesBox from './StateVariables';

import styles from './rule30.module.css';

const rule30 = () => {

    const initialConfig = new Array(20).fill(0);
    initialConfig[10] = 1;
    console.log(initialConfig);
    return <Layout title="Experiments - Rule 30">
        <div><p>Genuary day 2 test</p></div>
        <StateVariablesBox variables={{initialConfig: initialConfig}} />
        <p><span>Stupid amount of boxes in an AUTO grid: </span></p>
        <div className="gridContainer">
            {[...Array(15)].map((e, i) => <div className={styles.flexBox}/>
            )
            }

        </div>

    </Layout>
}

export default rule30;