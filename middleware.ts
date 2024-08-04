import { auth } from "@/auth"
import { NextResponse } from "next/server"

export default auth((req) => {

    const protectedPaths = ['/home', '/my-decks', '/notifications', '/create-deck', '/pratice-quiz']
    if(!req.auth && protectedPaths.includes(req.nextUrl.pathname)){
        return NextResponse.redirect(new URL('/sign-in', req.url))
    }
})