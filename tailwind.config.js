/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    minWidth: {
      180: '180px',
      240: '240px',
      360: '360px',
      720: '720px',
      960: '960px',
      1080: '1080px',
    },
  },
  plugins: [],
}
