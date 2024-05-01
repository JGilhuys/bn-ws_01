export default function ProductDetails({params}: {params: {productId: string}}) {
    return(
        <div>
            <h1>This is a Product</h1>
            <p>{params.productId}</p>
        </div>
    );
}