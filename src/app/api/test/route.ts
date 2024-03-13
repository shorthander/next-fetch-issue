import {NextResponse} from "next/server";

export async function GET() {
    try {
        return NextResponse.json({text: 'This is data fetched from API'}, {status: 200});
    } catch (error: any) {
        console.error('Returned Error', error);
        console.log(error.message)
        return NextResponse.json(error.message, {status: 500});
    }
}