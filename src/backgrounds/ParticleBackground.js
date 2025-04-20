import React, { useEffect, useRef } from 'react';

const CodeRainSideBackground = () => {
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  useEffect(() => {
    const setupCanvas = (canvas, alignRight = false) => {
      const ctx = canvas.getContext('2d');

      const resize = () => {
        canvas.width = 100;
        canvas.height = window.innerHeight;
        if (alignRight) {
          canvas.style.right = '0';
          canvas.style.left = 'auto';
        }
      };

      resize();
      window.addEventListener('resize', resize);

      const letters = '01'.split('');
      const fontSize = 14;
      const columns = Math.floor(canvas.width / fontSize);
      const drops = Array(columns).fill(0);

      const draw = () => {
        ctx.fillStyle = 'rgba(26, 26, 44, 0.08)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = '#00BFFF';
        ctx.font = `${fontSize}px monospace`;

        for (let i = 0; i < drops.length; i++) {
          const text = letters[Math.floor(Math.random() * letters.length)];
          const x = i * fontSize;
          const y = drops[i] * fontSize;

          ctx.fillText(text, x, y);

          if (y > canvas.height && Math.random() > 0.975) {
            drops[i] = 0;
          } else {
            drops[i]++;
          }
        }
      };

      const interval = setInterval(draw, 100);

      return () => {
        clearInterval(interval);
        window.removeEventListener('resize', resize);
      };
    };

    const cleanupLeft = setupCanvas(leftCanvasRef.current, false);
    const cleanupRight = setupCanvas(rightCanvasRef.current, true);

    return () => {
      cleanupLeft?.();
      cleanupRight?.();
    };
  }, []);

  return (
    <>
      <canvas
        ref={leftCanvasRef}
        className="fixed top-0 left-0 h-full z-0 pointer-events-none"
        style={{ width: '100px' }}
      />
      <canvas
        ref={rightCanvasRef}
        className="fixed top-0 right-0 h-full z-0 pointer-events-none"
        style={{ width: '100px' }}
      />
    </>
  );
};

export default CodeRainSideBackground;
