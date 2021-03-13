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