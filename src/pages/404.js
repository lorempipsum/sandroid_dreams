import * as React from "react";
import { Link } from 'gatsby';

import Layout from '../components/Layout';
// styles

const centered = {
    gridColumn: '2',
    marginTop: 0,
    textAlign: 'center',
    justifySelf: 'center',

};

// markup
const NotFoundPage = () => {
    return (
        <Layout>
            <div style={centered}>
                <p>Sorry, there's nothing here.</p>
                <p><span><Link className="inlineLink" to="/">Click here</Link> to go back.</span></p>
            </div>
        </Layout>
    );
}

export default NotFoundPage
