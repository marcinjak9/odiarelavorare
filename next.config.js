const withTM = require('next-transpile-modules')(["friendly-challenge"]);
// module.exports = {
//   reactStrictMode: true,
// }
const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
})
module.exports = withTM(withMDX({
  pageExtensions: ['js', 'jsx', 'md', 'mdx'],
  images: {
    domains: ['cdn.buymeacoffee.com', 'buymeacoffee.com'],
  },
}))