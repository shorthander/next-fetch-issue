import {getData, getDataWORKAROUND} from "@/actions/getData";
import {headers} from "next/headers";


export default async function Home() {
    const {data, error} = await getData();
    const {data: workaroundData, error: workaroundError} = await getDataWORKAROUND()

    return (
        <div className={'flex flex-col gap-6'}>
            <div>
                <pre><code>Bug - fetch(finalUrl, {headers: headers()});</code></pre>
                <div className={'border border-white rounded'}>data: {data.text}</div>
                <div className={'border border-white rounded'}>error: {error}</div>
            </div>
            <div>
                <pre><code>Bug - fetch(finalUrl, {headers: new Headers(headers())});</code></pre>
                <div className={'border border-white rounded'}>data: {workaroundData.text}</div>
                <div className={'border border-white rounded'}>error: {workaroundError}</div>
            </div>

        </div>
    );
}
