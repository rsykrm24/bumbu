import { NextRequest, NextResponse } from "next/server"

export async function POST(req) {
  let data = await req.json()
  return NextResponse.json({status:200,message:"Komentar berhasil ditambahkan"},{status:200})
}