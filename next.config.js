/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['links.papareact.com'],
  },
  env: {
    mapbox_key: 'pk.eyJ1IjoidG9ueTM2OTAiLCJhIjoiY2w1Zmp5cDF3MTBvaTNicDh5enhkeXQ3ZCJ9.F6QfFc2UahwupYZc_jWdRw'
  }
}

module.exports = nextConfig
