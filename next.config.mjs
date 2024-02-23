// @ts-check
import fs from 'fs';
import dotenvJSON from 'dotenv-json';
const dotenvFile = '.env.json';
if (fs.existsSync(dotenvFile)) {
    dotenvJSON({
        path: dotenvFile
    });
}

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    images: {
        domains: [
            'cdn.discordapp.com',
            'avatars.githubusercontent.com',
            'i.imgur.com'
        ]
    }
};

export default nextConfig;