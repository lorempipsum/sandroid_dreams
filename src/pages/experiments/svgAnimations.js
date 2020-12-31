import * as React from 'react';

import Layout from '../../components/Layout';
import animated3DPrinter from './animated_3d_printer.svg';
import animatedLogoSvgator from './animated_logo_svgator.svg';
import animatedStarBounce from './starField64pxAnimatedBounce.svg';

import styles from './svgAnimations.module.css'

const svgAnimations = ({}) => {
    return (
        <Layout title="Experiments - SVG Animations">
            <p>
        <span>
          Playing around with some svg animations
        </span>
            </p>
            <p>The first example animated SVG from loaf.exe (https://getloaf.io/): </p>
            <pre><code>
          {`import animated3DPrinter from './animated_3d_printer.svg'; 
<img src={animated3DPrinter}/></div>`}

</code></pre>
            <div>
                <img src={animated3DPrinter}/></div>
            <p>Test two: animating an SVG I made with Inkscape with <a
                href="https://app.svgator.com/editor#/25b2c40e3c774899b30ddacca45f568a">SVGator</a></p>
            <div>
                <img style={{width: '50px'}} src={animatedLogoSvgator}/></div><a>sadas</a>
            <p>Test Three: A long, frame by frame SVG made in Inkscape
                (https://www.smashingmagazine.com/2015/03/different-ways-to-use-svg-sprites-in-animation/) </p>
            <div>
                <p>SVG with even steps: </p>
                <div className={styles.bounce}/>
                <p>SVG without steps (smoothly scroll from top to bot): </p>
                <div className={styles.scrollBounce}/>
                <p>Scrolling starfield </p>
                <div className={styles.starField}/>
                <p>Star bounce animated with SVGator </p>
                <div>
                    <img style={{width: '50px'}} src={animatedStarBounce}/></div>
            </div>
        </Layout>
    );
};

export default svgAnimations;
