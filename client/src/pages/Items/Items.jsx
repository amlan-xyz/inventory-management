import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, fetchItems } from "../../actions/items.actions";

export const Items = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading);

  const [form, setForm] = useState({
    itemName: "",
    price: "",
    quantity: "",
    category: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(addItem(form));
    setForm({
      itemName: "",
      price: "",
      quantity: "",
      category: "",
    });
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <section className="items__section">
      <h1>Items page</h1>
      <form onSubmit={handleSubmit} className="items__form">
        <label htmlFor="name">Item name</label>
        <input
          type="text"
          id="name"
          value={form.itemName}
          onChange={(e) =>
            setForm((form) => ({ ...form, itemName: e.target.value }))
          }
        />
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          value={form.price}
          onChange={(e) =>
            setForm((form) => ({ ...form, price: e.target.value }))
          }
        />
        <label htmlFor="qty">Quantity</label>
        <input
          type="number"
          id="qty"
          value={form.quantity}
          onChange={(e) =>
            setForm((form) => ({ ...form, quantity: e.target.value }))
          }
        />
        <label htmlFor="category">Category</label>
        <select
          id="category"
          value={form.category}
          onChange={(e) =>
            setForm((form) => ({ ...form, category: e.target.value }))
          }
        >
          <option value="jackets">Jackets</option>
          <option value="t-shirts">T-Shirts</option>
          <option value="jeans">Jeans</option>
        </select>
        <button>Submit</button>
      </form>
      {loading ? (
        "Loading"
      ) : (
        <ul className="items__list">
          {items &&
            items.map((item) => {
              const { _id, item_name, quantity, price, category } = item;
              return (
                <li key={_id} className="items__list-item">
                  {item_name} || {price} || {quantity} || {category}
                </li>
              );
            })}
        </ul>
      )}
    </section>
  );
};
