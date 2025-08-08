/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:'#1A1A1A',
          800:'#333333',
          700:'#4D4D4D',
          600:'#666666',
          500: '#808080',
          400: '#999999',
          300 : '#B3B3B3',
          200 : '#CCCCCC',
          100 : '#E6E6E6',
          0 : '#FFFFFF'
        },
      
        secondary:{
          DEFAULT:'#1877F2'
        }


      },
      fontFamily: {
        Poppins: "Poppins",
        'Poppins-Thin': "Poppins-Thin",
        'Poppins-Light': "Poppins-Light",
        "Poppins-Bold": ["Poppins-Bold"],
        "Poppins-BlackItalic": ["Poppins-BlackItalic"],
        "Poppins-BoldItalic": ["Poppins-BoldItalic"],
        "Poppins-ExtraBold": ["Poppins-ExtraBold"],
        "Poppins-SemiBold": ["Poppins-SemiBold"],
        "Poppins-Regular": ["Poppins-Regular"],
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
