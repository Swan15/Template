/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires
const withMDX = require('@next/mdx')()
const nextConfig = {
    // images: {
    //     remotePatterns: [
    //         {
    //             protocol: 'https',
    //             hostname: 'project-id.supabase.co',
    //             pathname: '/storage/v1/object/public/images/**',
    //         },
    //     ],
    // },
    pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
}
module.exports = withMDX(nextConfig)
