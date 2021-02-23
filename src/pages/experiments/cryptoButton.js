import React, { useState } from 'react';

import Layout from '../../components/Layout';

const Rule30 = () => {
  const [times, setTimes] = useState(8);
  const [
    overlay,
    setOverlay,
  ] = useState({
  });

  const newOverlay = {
    position: 'fixed',
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
            setOverlay(newOverlay);
            setTimeout(setOverlay(nextOverlay), 100)
          }}
        >
          Activate
        </button>
      </Layout>
    </div>
  );
};

export default Rule30;
