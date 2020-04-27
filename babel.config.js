module.exports = {
  presets: [
    "@babel/preset-env", // altera código javascript que o navegador venha entender
    "@babel/preset-react" // transforma funcionalidades do jsx para os navegadores endeder
  ],
  plugins: [
    '@babel/plugin-proposal-class-properties'
  ]
};