import Link from "next/link";

export default function AccountPage() {
    return(
        <div>
            
        <h1>Account Page</h1>
        <p>
            <Link href={"/account/orders"}>Orders</Link>
        </p>
        </div>

    );
}