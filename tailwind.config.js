module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    'src/**/*.html',
    'src/**/*.css',
  ],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
  experimental: {
    darkModeVariant: true
  },
  dark: 'class',
}
