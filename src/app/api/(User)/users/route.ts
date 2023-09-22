import prisma from '@/utils/connect';
import { NextResponse } from 'next/server';


export async function GET(){
    try {
        const data = await prisma.user.findMany();
        return NextResponse.json(data,{status:200});
    } catch (error) {
        return NextResponse.json("wrong",{status:404});
    }
}