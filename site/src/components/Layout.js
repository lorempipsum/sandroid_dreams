import React from 'react';
import Title from './Title';

const main = {
    fontFamily:
        'consolas, monaco, courier, "courier new", fixed-width',
    display: 'grid',
    margin: 'auto',
    marginTop: '3vh',
    gridTemplateColumns:
        'minmax(0, auto) min(600px, 95vw) minmax(0, auto)',
    paddingLeft: 'calc(100vw - 100%)',
};

const header = {
    gridColumn: '2',
    gridRow: '1',
    marginTop: 0,
    textAlign: 'center',
    justifySelf: 'center',
};

const content = {
    gridColumn: '2',
    gridRow: '2',
    justifyContent: 'center',
    minWidth: 'min(95vw, 600px)',
};

const articleHeading = {
    fontFamily:
        'consolas, monaco, courier, "courier new", fixed-width',
    fontSize: '1.5em',
    textAlign: 'center',
};

const Layout = ({children, title}) => {
    return (
        <>
            <div style={main}>
                <div style={header}>
                    <Title
                        title={'sandroid.dev'}
                    />
                </div>
                <div style={content}>
                    {title && <p style={articleHeading}>{title}</p>}
                    {children}
                </div>
            </div>
        </>
    );
};

export default Layout;
