// Generate more pleasant random colors.
// Thanks bendc @ https://gist.github.com/bendc/76c48ce53299e6078a76

export const randomColor = () => {
  // Why didn't importing this from an external file work?
  const randomInt = (min, max) => {
    return (
      Math.floor(
        Math.random() * (max - min + 1)
      ) + min
    );
  };

  const h = randomInt(12, 300);
  const s = randomInt(42, 55);
  const l = randomInt(70, 90);

  return `hsl(${h},${s}%,${l}%)`;
};

// Check out this for more advanced colour plays https://github.com/bgrins/TinyColor ?
export const complementaryColor = (color) => {
  // Take in a color in the format `hsl(h, s%, l%)`
  // h - hue
  // s - saturation
  // l - luminosity
  // color: String

  const randomInt = (min, max) => {
    return (
      Math.floor(
        Math.random() * (max - min + 1)
      ) + min
    );
  };

  let re = /[0-9][0-9]*/g;
  console.log(color);
  const values = color.match(re);
  console.log(values);

  const h = values[0];
  const s = values[1]+1;
  const l = values[2];

  return `hsl(${h},${s}%,${l}%)`;
};