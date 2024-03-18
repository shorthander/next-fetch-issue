import {buildUrl} from "@/lib/utils";
import {headers} from "next/headers";


export const fetchDataOnServer = async ({url, id}: { url: string; id?: string | number }) => {
    try {
        const finalUrl = buildUrl(url, id);
        console.log(finalUrl)
        const res = await fetch(finalUrl, {headers: new Headers(headers())});

        if (!res.ok) {
            throw new Error(await res.text());
        }

        const data = await res.json();
        return {data, error: null};
    } catch (error) {
        console.error('Error in fetchDataOnServer', {url, error});
        throw error;
    }
};