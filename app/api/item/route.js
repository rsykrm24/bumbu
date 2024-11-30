import supabase from "../../libs/supabase/supabase.js"
import { NextRequest, NextResponse } from "next/server"

export async function GET() {
  try {
    const { data, err } = await supabase.from("bumbu").select("*")
    if(err) {
      return NextResponse.json({status:404,data:supabase,message:"Data tidak ada"},{status:404})
    }
    return NextResponse.json({status:200,data:data,message:"Data berhasil didapatkan"},{status:200})
  }
  catch(err) {
    return NextResponse.json({status:500,data:supabase,message:"Data gagal didapatkan"},{status:500})
  }
}