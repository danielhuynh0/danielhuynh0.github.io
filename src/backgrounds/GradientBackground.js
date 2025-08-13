// backgrounds/GradientBackground.js
import React from 'react';

const GradientBackground = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-800 via-indigo-900 to-gray-900 animate-gradient bg-cover bg-fixed -z-10" />
  );
};

export default GradientBackground;

// // Tailwind animation in your CSS or tailwind.config.js:
// const plugin = require('tailwindcss/plugin');
// export default {
//   theme: {
//     extend: {
//       animation: {
//         gradient: 'gradientMove 10s ease infinite',
//       },
//       keyframes: {
//         gradientMove: {
//           '0%, 100%': { backgroundPosition: '0% 50%' },
//           '50%': { backgroundPosition: '100% 50%' },
//         },
//       },
//     },
//   },
// };
