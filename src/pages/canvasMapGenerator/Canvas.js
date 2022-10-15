import React, { useRef, useEffect } from 'react'
import { createNoise2D } from 'simplex-noise';

import styles from './canvasMapGenerator.module.css';

const TILE_WIDTH = 4;
const MAP_WIDTH = 500;
const NUMBER_OF_TILES = MAP_WIDTH / TILE_WIDTH;

const NOISE_SEED = 2512421;
const noise2D = createNoise2D();

/**
 *
 * Function to draw lakes by using perlin noise. Uses the package perlin.js.
 * You can install it with npm install perlin.js
 *
 */
function drawLakes(ctx, player) {
  ctx.fillStyle = 'blue';
  for (let x = player.x; x < NUMBER_OF_TILES; x+=TILE_WIDTH) {
    for (let y = player.y; y < NUMBER_OF_TILES; y+=TILE_WIDTH) {
      if (noise2D(x , y ) > 0.2) {
        ctx.fillRect(x * TILE_WIDTH - player.x, y * TILE_WIDTH - player.y, TILE_WIDTH, TILE_WIDTH);
      }
    }
  }
}

function fillMapWithGreen (ctx) {
  ctx.fillStyle = 'green';
  for (let x = 0; x < NUMBER_OF_TILES; x++) {
    for (let y = 0; y < NUMBER_OF_TILES; y++) {
      ctx.fillRect(x * TILE_WIDTH, y * TILE_WIDTH, TILE_WIDTH, TILE_WIDTH);
    }
  }
}


const Canvas =() => {
  const [player, updatePlayer] = React.useState({ x: 0, y: 0 });
  const [frameCount, updateFrameCount] = React.useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    let animationFrameId;
    const render = () => {
       //updateFrameCount(frameCount + 1);
       updatePlayer({ x: frameCount*TILE_WIDTH, y: 0 });
      draw(context, frameCount);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();
    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [frameCount]);

  const canvasRef = useRef(null)
  const draw = (ctx, frameCount) => {
    console.log(frameCount)
    console.log(JSON.stringify(player));
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    fillMapWithGreen(ctx);
    drawLakes(ctx, player);
  };



  return <canvas className={styles.canvas} width={JSON.stringify(MAP_WIDTH) + "px"} height={JSON.stringify(MAP_WIDTH) + "px"} ref={canvasRef} />;
}
export default Canvas