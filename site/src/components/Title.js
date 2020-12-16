import * as React from "react"

// styles
const headingStyles = {
  marginTop: 0,
  textAlign: 'center',
  justifySelf: 'center',
  fontSize: '2rem',
  marginTop: '3vh',

};

export const Title = ({title}) => {
  return (
    <div>
      <title>{title}</title>
      <p style={headingStyles}>
        {title}
      </p>
    </div>
  );
};

export default Title