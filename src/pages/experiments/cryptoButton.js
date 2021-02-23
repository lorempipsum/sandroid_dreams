import React, { useState } from 'react';

import Layout from '../../components/Layout';

// Generate more pleasant random colors.
// Thanks bendc @ https://gist.github.com/bendc/76c48ce53299e6078a76
const randomColor = () => {
  // Why didn't importing this from an external file work?
  'use strict';

  const randomInt = (min, max) => {
    return (
      Math.floor(
        Math.random() * (max - min + 1)
      ) + min
    );
  };

  const h = randomInt(0, 360);
  const s = randomInt(42, 98);
  const l = randomInt(40, 90);

  return `hsl(${h},${s}%,${l}%)`;
};

const setColors = (color) => {
  const boxes = document.getElementsByClassName(
    'flexBox'
  );
  const inputColor = color;
  const step = 20;

  for (
    let i = 0;
    i < boxes.length;
    i++
  ) {
    const timeoutLength = 20;
    const color = inputColor?.length
      ? inputColor
      : randomColor();
    setTimeout(() => {
      boxes[
        i
      ].style.backgroundColor = color;
    }, i * timeoutLength - i * i * step);
  }
  //.style.backgroundColor="#" + randomColor;
};

// Start or stop the party depending on whether it is party mode
const party = (isPartyMode) => {
  const boxes = document.getElementsByClassName(
    'flexBox'
  );
  if (isPartyMode) {
    let interval = window.setInterval(
      () => {
        let color = undefined;
        if (Math.random() > 0.7) {
          color = '#ffffff';
        }
        setColors(color);
      },
      200 + 40 * Math.random()
    );
    console.log(
      `Setting interval ${interval}`
    );
    return interval;
  } else {
    console.log(
      'party already happenin'
    ); //for clearing all intervals
  }
};

const Rule30 = () => {
  const [times, setTimes] = useState(8);
  const [
    overlay,
    setOverlay,
  ] = useState({});

  const [
    isPartyMode,
    setIsPartyMode,
  ] = useState(true);

  const [
    partyCubeSection,
    setPartyCubeSection,
  ] = useState(<div></div>);

  const partyCubes = (
    <div
      className="gridContainer justifySpaceEvenly"
    >
      {[...Array(400)].map((e, i) => (
        <div className="flexBox small" />
      ))}
    </div>
  );

  const newOverlay = {
    position: 'fixed',
    display: 'none',
    ZIndex: '100',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    opacity: '0',
    transition: 'opacity 5s linear',
  };
  const nextOverlay = {
    position: 'fixed',
    ZIndex: '100',
    width: '100vw',
    height: '100vh',
    backgroundColor: 'black',
    opacity: '1',
    transition: 'opacity 5s linear',
  };

  return (
    <div style={overlay}>
      {partyCubeSection}

      <Layout title="Experiments - Essence Container">
        <p>
          Please note you have activated
          the container{' '}
          <span
            style={{ color: 'red' }}
          >
            {times}
          </span>{' '}
          times this week.{' '}
          <span
            style={{ color: 'red' }}
          >
            Any further activations may
            result in unintended
            consequences.
          </span>
        </p>
        <button
          style={{
            marginLeft: '50%',
            transform:
              'translate3D(-50%, 0, 0)',
            width: '100px',
            height: '50px',
          }}
          onClick={() => {
            setTimes(times + 1);
            party(true);
            setOverlay(newOverlay);
            setTimeout(
              setOverlay(nextOverlay),
              100
            );
            setPartyCubeSection(
              partyCubes
            );
          }}
        >
          Activate
        </button>
      </Layout>
    </div>
  );
};

export default Rule30;
