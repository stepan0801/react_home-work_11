import { useDispatch, useSelector } from "react-redux";
import { filteredList, addNewProduct } from "../../redux/slices/productsList";
import { useState } from "react";

const ProductListManager = () => {
  const productsList = useSelector((state) => state.productsList.filteredList);
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState("");
  const [filterValue, setFilterValue] = useState("");

  const addProduct = () => {
    if (newProduct.trim() !== "") {
      dispatch(addNewProduct(newProduct.trim()));
      setNewProduct("");
    }
  };

  const filterList = (e) => {
    setFilterValue(e.target.value);
    dispatch(filteredList(e.target.value));
  };

  return (
    <div>
      <h1>Список товарів</h1>
      <ul>
        {productsList.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>

      <div>
        <input
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="Додати товар"
        />
        <button onClick={addProduct}>Додати товар</button>
      </div>

      <div>
        <input
          value={filterValue}
          onChange={filterList}
          placeholder="Фільтрувати товар"
        />
        <label>Фільтрувати товар</label>
      </div>
    </div>
  );
};

export default ProductListManager;
