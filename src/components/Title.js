import * as React from 'react';
import {Link} from 'gatsby';
import styles from './Title.module.css';

import Logo from './Logo';

// styles

export const Title = ({title}) => {
    // TODO reinstate the friends, about and instagram pages at some point?
    const showLinks = false;
    return (
        <div>
            <title>{title}</title>
            <Link
                className={styles.headingStyles}
                to="/"
            >
                <Logo/>
                {title}
            </Link>
            {showLinks && <p>
                <Link
                    to="/about"
                    className={
                        styles.subtitleText
                    }
                >
                    About
                </Link>
                <Link
                    to="/friends"
                    className={
                        styles.subtitleText
                    }
                >
                    Friends
                </Link>
                <a
                    href="https://instagram.com/sandroid_dreams"
                    className={
                        styles.subtitleText
                    }
                >
                    Instagram
                </a>
            </p>}
        </div>
    );
};

export default Title;
