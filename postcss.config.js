// ✅ NEW CONFIG for Tailwind CSS v4+
module.exports = {
  plugins: [
    require('@tailwindcss/postcss')({
      // Optional: pass config here
    }),
    require('autoprefixer'),
  ],
}
