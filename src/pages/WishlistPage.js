import axios from "axios";
import { useEffect, useState } from "react";

export function Wishlist() {
  const [currentWishlist, setCurrentWishlist] = useState([]);

  useEffect(() => {
    (async () => {
      const {
        data: { wishes }
      } = await axios.get("/api/wishes");
      setCurrentWishlist(wishes);
    })();
  }, []);

  async function deleteThisProduct(someProduct) {
    const { status } = await axios.delete(`api/wishes/${someProduct.id}`);

    status === 204 &&
      setCurrentWishlist((currentWishlist) =>
        currentWishlist.filter((item) => item.id !== someProduct.id)
      );
  }

  return (
    <div style={{ backgroundColor: "gray" }}>
      <h1>Wishlist</h1>
      <div className="container-card">
        {currentWishlist.map((product) => (
          <div className="card-modal">
            <img src={product.image} alt="product" />
            <h3>{product.name}</h3>
            <div className="price">Rs. {product.price}</div>
            <button onClick={() => deleteThisProduct(product)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

// const { status } = await axios.delete(`api/addresses/${newAddress.id}`);
