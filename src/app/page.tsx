import {getData, getDataWORKAROUND} from "@/actions/getData";
import {headers} from "next/headers";


export default async function Home() {
    const {data, error} = await getData();
    const {data: workaroundData, error: workaroundError} = await getDataWORKAROUND()

    return (
        <div className={'space-y-6 divide-y-2 '}>
            <div className={'flex flex-col gap-2'}>
                <pre><code>{`Bug - fetch(finalUrl, {headers: headers()});`}</code></pre>
                <div className={'p-4 border border-white rounded'}>data: {data.text}</div>
                <div className={'p-4 border border-red-500 rounded'}>error: {error}</div>
            </div>
            <div className={'space-y-2 pt-6'}>
                <pre><code>{`Bug - fetch(finalUrl, {headers: new Headers(headers())});`}</code></pre>
                <div className={'p-4 border border-white rounded'}>data: {workaroundData.text}</div>
                <div className={'p-4 border border-red-500 rounded'}>error: {workaroundError}</div>
            </div>
        </div>

    );
}
