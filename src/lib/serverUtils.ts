import {buildUrl} from "@/lib/utils";
import {headers} from "next/headers";


export const fetchDataOnServer = async ({url, id}: { url: string; id?: string | number }) => {
    try {
        const finalUrl = buildUrl(url, id);
        console.log(finalUrl)
        const res = await fetch(finalUrl, {headers: headers()});

        if (!res.ok) {
            throw new Error(res.statusText);
        }

        const data = await res.json();
        return {data, error: null};
    } catch (error) {
        console.error('Error in fetchData', {url, error});
        throw error;
    }
};