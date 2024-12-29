/** @type {import('next').NextConfig} */
const nextConfig = {
    images :{
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'cdn.sanity.io',
              port: '', // Optional; leave empty unless using a custom port
              pathname: '/**', // Matches all paths
            },
          ],
    }
};

export default nextConfig;
