import Link from "next/link"
import Router, { useRouter } from "next/router"

function Home() {
    const router = useRouter()

    const handleClick=()=>{
        console.log("The order is placed")
        router.push('/product')
    }

    return (
        <div>
            <h1>Home Page</h1>
            <Link href='/blog'>
                Blog Page
            </Link>
            <br/>
            <Link href='/product'>
                Product Page
            </Link>
            <br/>
            <button onClick={handleClick}>Place Order</button>

        </div>
    )

}

export default Home