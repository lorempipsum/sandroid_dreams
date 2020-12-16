import React from 'react';
import Title from './Title';

const main = {
  fontFamily:
    '-apple-system, Roboto, sans-serif, serif',
  display: 'grid',
  margin: 'auto',
  marginTop: '20vh',
  gridTemplateColumns:
    'minmax(0, auto) fit-content(800px) minmax(0, auto)',
};

const header = {
  gridColumn: '2',
  gridRow: '1',
  marginTop: 0,
  textAlign: 'center',
  justifySelf: 'center',
};

const content = {
  marginTop: '10vh',
  gridColumn: '2',
  gridRow: '2',
  justifyContent: 'center',
  minWidth: 'min(95vw, 700px)',
};

const Layout = ({
  children,
  title,
}) => {
  return (
    <>
      <div style={main}>
        <div style={header}>
          <Title title={title}></Title>
        </div>
        <div style={content}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
