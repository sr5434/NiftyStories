import { NextResponse } from 'next/server'
import { getAuth } from '@clerk/nextjs/server';
const sql = require('mssql');

export async function GET(req){
  const {userId} = getAuth(req);
  if(!userId){
    return new Response("Unauthorized", { status: 401 });
  }
  //Connect to database
  await sql.connect(process.env.CONN_STR);
  const result = await sql.query`SELECT * FROM [Posts].[Post] ORDER BY [Timestamp] DESC;`;
  // Sample curl request to test this: curl -X POST -H "Content-Type: application/json" -d '{"post":"..."}' http://localhost:3000/api/newPost
  return NextResponse.json({ result: result.recordsets[0] });
}