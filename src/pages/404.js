import React, {useState} from 'react';
import {Link} from 'gatsby';

import Layout from '../components/Layout';
import RawText from '../components/RawText';

import '../styles/animations.css';
import './404.css';
// styles

// markup
const NotFoundPage = () => {
    const defaultFlavorText = <span className="fadeIn slowFadeIn">You enter an area of vast nothingness.</span>;
    const defaultOption1 = <Link className="inlineLink fadeIn slowFadeIn" to="/"><span style={{marginRight: '1ch', display: "inline-block"}}>a)</span>Flee this place</Link>;
    const defaultOption2 = <span onClick={() => tryRemembering()}
                                 className="inlineLink fadeIn slowFadeIn"><span style={{marginRight: '1ch', display: "inline-block"}}>b)</span>Look around the space.</span>;

    const newFlavorText =
        <p
            className="fadeIn slowFadeIn">You see a small screen displaying a three digit number.</p>;

    const newOption = <p><span onClick={() => readTheScreen()}
                               className="inlineLink fadeIn slowFadeIn"><span style={{marginRight: '1ch', display: "inline-block"}}>b)</span>Read the screen.</span></p>;

    const flavor404 = <p className="typewriter slowFadeIn">4 0 4</p>;
    const [flavorText, setFlavorText] = useState(defaultFlavorText);
    const [option1, setOption1] = useState(defaultOption1);
    const [option2, setOption2] = useState(defaultOption2);

    // If the HTML structure of the options is identical except for the content then the fade animation
    // doesn't work. Therefore wrap things in divs or not in an alternating fashion
    // to ensure the HTML structure is always somewhat different.
    const [wrapInADiv, setWrapInADiv] = useState(false);

    const tryRemembering = () => {
        setWrapInADiv(!wrapInADiv);
        setFlavorText(newFlavorText);
        setOption2(newOption);

    }

    const readTheScreen = () => {
        setFlavorText(flavor404);
        setOption2(undefined);
    }


    return (
        <Layout title={flavorText}>
            <div className="centered">
                <p className="option1">{option1}</p>
                <p className="option2">{option2}</p>

            </div>
        </Layout>
    );
}

export default NotFoundPage
