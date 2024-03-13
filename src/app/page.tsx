import {getData} from "@/actions/getData";


export default async function Home() {
    const {data, error} = await getData();
    return (
        <div className={''}>

            <div className={'border border-white rounded'}>data: {data.text}</div>
            <div className={'border border-white rounded'}>error: {error}</div>


        </div>
    );
}
