module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#243c5a',
      },
      boxShadow: {
        'contact-shadow': '0px 0px 10px #09090908',
        "blog-post-shadow":"box-shadow: 0px 0px 30px #00000038"
      }
    }
  },
  plugins: [],
}
