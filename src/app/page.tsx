import {getData} from "@/actions/getData";
import {headers} from "next/headers";


export default async function Home() {
    const {data, error} = await getData();

    return (
        <div className={'space-y-6 divide-y-2 '}>
            <div className={'flex flex-col gap-2'}>
                <pre><code>{`Bug - fetch(finalUrl, {headers: headers()});`}</code></pre>
                <div className={'p-4 border border-white rounded'}>data: {data.text}</div>
                <div className={'p-4 border border-red-500 rounded'}>error: {error}</div>
            </div>
        </div>

    );
}
