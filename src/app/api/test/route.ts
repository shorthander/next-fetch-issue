import {NextResponse} from "next/server";

export async function GET() {
    try {
        return NextResponse.json({text: 'This is data fetched from API'}, {status: 200});
    } catch (error) {
        console.error('Error while receiving all Trade Reviews', error);
        return NextResponse.json({error: error.message}, {status: 500});
    }
}