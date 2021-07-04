const legacyMemes = [
  'jf2bfq8fthwgb4vh4ehq',
  'zs5vstj0nddxauev1ujc',
  'es7frhntkrmnatt2oe9m',
  'k0tswkxw2dsgceq17uy4',
  'yky8isyydi6pnqrguzch',
  'z4hzknckdeuvollsf8kc',
  'ohvysbjzic95ffrxiqbd',
];

module.exports = {
  i18n: {
    locales: ['en-gb'],
    defaultLocale: 'en-gb',
  },
  async rewrites() {
    return legacyMemes.map((legacyMeme) => ({
      source: `/memes/public/${legacyMeme}`,
      destination: `/legacy-memes/${legacyMeme}`,
    }));
  },
};
