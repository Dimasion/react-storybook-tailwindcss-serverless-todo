const tailwindcss = require('tailwindcss')
const purgecss = require('@fullhuman/postcss-purgecss')
const autoprefixer = require('autoprefixer')

const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  plugins: [
    tailwindcss('./tailwind.js'),
    isProduction && purgecss({ content: ['./src/**/*.js'] }),
    autoprefixer
  ]
}