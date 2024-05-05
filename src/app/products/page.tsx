import ProductCard from "@/components/product-components/product-card";
import dbContext from "../../../database/db-api";
import NewProduct from "@/components/product-components/new-product";
import dummyAuthorizationApi from "../../../database/dummy-authorization-api";

export default async function Products() {
  const _dbContext = new dbContext();
  const products = _dbContext.getAllProducts();
  const _userApi = new dummyAuthorizationApi();
  const user = _userApi.getUserCredentials(true);

  return (
    <div className="flex flex-col justify-center items-center p-6">
      <div className="w-full px-2">
        <h1 className="my-2 font-CinzelDecorative font-semibold text-2xl text-amber-950">
          Products Page
        </h1>
      </div>
      <div className="my-2 grid grid-cols-4 gap-4">
        {(await products).map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
        {user !== undefined ? <NewProduct /> : null}
      </div>
    </div>
  );
}
