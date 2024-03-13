function absoluteUrl(path: string) {
    if (!process.env.NEXT_PUBLIC_APP_URL) {
        throw new Error('env variable NEXT_PUBLIC_APP_URL is not defined.');
    }

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL.replace(/\/$/, '');
    const sanitizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${baseUrl}${sanitizedPath}`;
}

export const buildUrl = (routePath: string, id?: string | number | null) => {
    const url = absoluteUrl(routePath);
    const sanitizedBaseUrl = url.replace(/\/+$/, '');
    return id ? `${sanitizedBaseUrl}/${id}` : sanitizedBaseUrl;
};
