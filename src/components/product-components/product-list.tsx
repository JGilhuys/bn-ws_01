import ProductCard from "./product-card";

export default function ProductList() {
    return (
        <ul className="flex flex-row gap-4">
            <ProductCard title="Mede" description="A drink from the band!" />
            <ProductCard title="T-shirt" description="Show your support!" />
            <ProductCard title="CD 1" description="Listen!" />
            <ProductCard title="CD 2" description="Listen more!" />
        </ul>
    );
}