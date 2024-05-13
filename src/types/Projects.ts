type ProjectId = | 1 | 2 | 3;
type ProjectName = | "CryptoMarket" | "HomeServer" | "SpotifyClone";
type ProjectWebsite = | "https://getcryptomarket.vercel.app" | "https://spotifyclone-astro.vercel.app";
type ProjectRepo = | "https://github.com/juanplldev/CryptoMarket" | "https://github.com/juanplldev/HomeServer" | "https://github.com/juanplldev/spotify-clone";

export interface Projects
{
    id: ProjectId,
    name: ProjectName,
    website?: ProjectWebsite,
    repo: ProjectRepo,
    image?:
    {
        width: number,
        height: number,
    },
};