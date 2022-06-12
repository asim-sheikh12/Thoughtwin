module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        Rajdhani: ['Rajdhani'],
        Formular: ['PT Sans'],
      },
      colors: {
        red: '#FF0000',
        box: '#ccc',
        text: '#4f4f4f',
      },
      transitionProperty: {
        height: '0.25s',
        width: '0.25s',
      },
      backgroundSize: {
        auto: 'auto',
        cover: 'cover',
        contain: 'contain',
        '40%': '40%',
        16: '4rem',
      },
      backgroundImage: {
        python: "url('../assets/images/python.png')",
        python_hover: "url('../assets/images/python_hover.png')",
        rails: "url('../assets/images/rails.png')",
        rails_hover: "url('../assets/images/rails_hover.png')",
        nodejs: "url('../assets/images/nodejs.png')",
        nodejs_hover: "url('../assets/images/nodejs_hover.png')",
        angularjs: "url('../assets/images/angularjs.png')",
        angularjs_hover: "url('../assets/images/angularjs_hover.png')",
        react: "url('../assets/images/react.png')",
        react_hover: "url('../assets/images/react_hover.png')",
        php: "url('../assets/images/php.png')",
        php_hover: "url('../assets/images/php_hover.png')",
        android: "url('../assets/images/android.png')",
        android_hover: "url('../assets/images/android_hover.png')",
        ios: "url('../assets/images/ios.png')",
        ios_hover: "url('../assets/images/ios_hover.png')",
        blockchain: "url('../assets/images/blockchain.png')",
        blockchain_hover: "url('../assets/images/blockchain_hover.png')",
        ai: "url('../assets/images/ai.png')",
        ai_hover: "url('../assets/images/ai_hover.png')",
        dotnet: "url('../assets/images/dotnet.png')",
        dotnet_hover: "url('../assets/images/dotnet_hover.png')",
        react_native: "url('../assets/images/react_native.png')",
        react_native_hover: "url('../assets/images/react_native_hover.png')",
        white_arrowIcon: "url('../assets/images/white_arrow.png')",
        red_arrowIcon: "url('../assets/images/red_arrow.png')",
        about_us_banner: "url('../assets/images/aboutus_banner.png')",
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    },
  ],
};
