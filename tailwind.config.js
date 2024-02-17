/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      100: 'auto 120%',
      110: 'auto calc(120% * 1.15)',
    },
    fontFamily: {
      nutino: ['Nunito Sans'],
      josefin: ['Josefin Sans'],
      ysabeau: ['Ysabeau Office'],
    },
    extend: {
      aspectRatio: {
        '5/6': '5 / 6',
      },
    },
  },
  plugins: [],
};
