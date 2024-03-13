import {fetchDataOnServer} from "@/lib/serverUtils";

export async function getData() {
    try {
        const {data} = await fetchDataOnServer({
            url: `/api/test`,
        });
        return {
            data: data,
            error: undefined,
        };
        // return await fetch('http://localhost:3000/api/test');
    } catch (error: any) {
        console.log(error);
        return {data: [], error: error.message || 'Unknown error'};
    }
}