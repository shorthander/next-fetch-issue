import {getData} from "@/actions/getData";


export default async function Home() {
    const {data} = await getData();
    return (
        <div>
            {data.text}
        </div>
    );
}
