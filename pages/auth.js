import Loading from "@/components/Loading";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react"



export default function Auth() {
    const { data: session, status } = useSession();
    const router = useRouter();

    if (status === "loading") {
        return <Loading />
    }


    
    return <>
        <Head>
            <title>Movie App | Backend</title>
        </Head>

        <div className="container">
            <div className="loginfront flex flex-center">
                <div className="loginbox flex flex-col">
                    <Image src='/img/loginimg_rk.jpg' width={250} height={250} />
                    <h1>Welcome Admin Of The MegaMovies </h1>
                    <p> Visit Movie Website <a href="www.megamovies.in">MegaMovies</a></p>
                    {session ? <button className="mt-2" onClick={signOut}>Log Out Here</button> : <button className="mt-2" onClick={signIn}>Log in with google</button>}
                </div>
            </div>
        </div>
     

    </>
}