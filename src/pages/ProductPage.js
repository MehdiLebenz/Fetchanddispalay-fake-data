import axios from "axios";
import { useEffect, useState } from "react";

export function Products() {
  const [productList, setProductList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const {
          data: { products }
        } = await axios.get("/api/products");
        setProductList(products);
      } catch (e) {
        console.error(e);
      }
      setIsLoading(false);
    })();
  }, []);

  async function addToWishList(product) {
    const dataAdded = await axios.post("/api/wishes", { wish: product });
  }

  return (
    <div style={{ backgroundColor: "white" }}>
      <h1> {isLoading ? "Products are loading..." : "Products"} </h1>
      <div className="container-card">
        {productList.map((product) => (
          <div className="card-modal">
            <img src={product.image} alt="product" />
            <h3>{product.name}</h3>
            <div className="price">Rs. {product.price}</div>
            <button onClick={() => addToWishList(product)}>Wishlist</button>
          </div>
        ))}
      </div>
    </div>
  );
}
