import path from 'path';

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@layouts': path.resolve(__dirname, 'src/layouts'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@theme': path.resolve(__dirname, 'src/theme'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@router': path.resolve(__dirname, 'src/router'),
      '@forms': path.resolve(__dirname, 'src/forms'),
      '@interfaces': path.resolve(__dirname, 'src/interfaces'),
    },
  },
  babel: {
    loaderOptions: {
      ignore: ['./node_modules/mapbox-gl/dist/mapbox-gl.js'],
    },
  },
};
