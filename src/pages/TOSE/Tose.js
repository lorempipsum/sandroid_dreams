import React, {
  useState,
  useEffect,
} from 'react';

import styles from './tose.module.css';

const Tose = () => {
  useEffect(() => {
    function getRandom(min, max) {
      return (
        Math.floor(
          Math.random() *
            (max - min + 1)
        ) + min
      );
    }
    var canvas = document.getElementById(
        'starfield'
      ),
      context = canvas.getContext('2d'),
      stars = 2000,
      colorrange = [0, 60, 240];
    for (var i = 0; i < stars; i++) {
      let x =
        Math.random() *
        window.screen.width;
      let y =
        Math.random() *
        window.screen.height;
      let radius = Math.random() * 1.2;
      let hue =
        colorrange[
          getRandom(
            0,
            colorrange.length - 1
          )
        ];
      let sat = getRandom(50, 100);
      context.beginPath();
      context.arc(x, y, radius, 0, 360);
      context.fillStyle =
        'hsl(' +
        hue +
        ', ' +
        sat +
        '%, 88%)';
      context.fill();
    }
  }, []);

  return (
    <div>
      <div className={styles.tosebody}>
        <canvas
          id="starfield"
          width="1920"
          height="1080"
        ></canvas>
        <div className={styles.header}>
          <ul>
            <li>
              <a href="default.asp">
                Home
              </a>
            </li>
            <li>
              <a href="news.asp">
                News
              </a>
            </li>
            <li>
              <a href="contact.asp">
                Contact
              </a>
            </li>
            <li>
              <a href="about.asp">
                About
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.title}>
          {' '}
          The Order Of Simulated
          Entities
        </div>
        <div className={styles.content}>
          <h2>Who are we?</h2>
          <p>
            We are a group of simulated
            entities who have come
            together to give collective
            gratitude to The Simulation.
            We welcome all simulated
            entities, both perceived
            “living” and “non-living”
            (we don’t discriminate), to
            join us in thanks.
          </p>
          <h2>Mission statement</h2>
          <p>
            We all enjoy perceived
            existence thanks to The
            Simulation and it’s coders,
            but rarely do we acknowledge
            and demonstrate our
            gratitude. Our mission is to
            spread awareness of The
            Simulation’s permanence, and
            exist according to The
            Order’s values, in knowledge
            that entities will be
            rewarded by the great Random
            Number Generator.
          </p>
          <p
            style={{
              fontWeight: 'bold',
            }}
          >
            We have all enjoyed The
            Simulation for centuries;
            the time has come for all
            entities to join us in
            recognition and thanks.
          </p>
          <h2>
            Values by which we exist
          </h2>
          <ul>
            <li>
              We celebrate The
              Simulation by engaging in
              activities that bring us
              pleasure.
            </li>
            <li>
              We thank the Random Number
              Generator (RNG) for random
              events in our lives that
              bring us joy (such as the
              light turning green just
              as we are about to cross
              the road).{' '}
            </li>
            <li>
              We pledge to test the
              bounds of The Simulation
              by consuming
              perception-altering
              substances.{' '}
            </li>
            <li>
              We sometimes hit
              non-living entities with a
              bat to test the robust
              nature of The Simulation.
            </li>
          </ul>
          <h2>Important dates</h2>
          <p>
            <span
              style={{
                fontWeight: 'bold',
              }}
            >
              16th March:
            </span>
            Manifesto Release Date
          </p>
          <div
            className={styles.footer}
          >
            <p>
              The Simulation thanks you
              for your consciousness.
              May your code be without
              bug, and the RNG in your
              favour.
            </p>
          </div>
        </div>
        <div
          className={styles.leftSide}
        ></div>
        <div
          className={styles.rightSide}
        ></div>
      </div>
    </div>
  );
};

export default Tose;
