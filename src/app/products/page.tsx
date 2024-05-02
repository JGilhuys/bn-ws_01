import DbContext from "../../../database/db-api";

export default async function Products() {

    const _dbcontext = new DbContext();
    const allProducts = await _dbcontext.getAllProducts();

    return (
        <div className="flex flex-col justify-center items-center h-full p-6">
            <div className="w-full px-2"><h1 className="my-2 font-CinzelDecorative font-semibold text-2xl text-amber-950">Products Page</h1></div>
            <div className="my-2 grid grid-cols-4 gap-4">
            {allProducts.map((product, index) => (
                <div key={index} className="p-4 bg-white border border-stone-200 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <p className="font-CinzelDecorative font-semibold text-xl text-amber-950">{product.title}</p>
                    <p className="text-sm text-stone-400">{product.subtitle}</p>
                    <p>{product.summary}</p>
                </div>
            ))}
            </div>
        </div>
    );
}