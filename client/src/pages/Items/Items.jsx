import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  fetchItems,
  updateItem,
} from "../../actions/items.actions";

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

  const [editForm, setEditForm] = useState({
    price: "",
    quantity: "",
  });

  const [show, setShow] = useState(false);

  const [itemId, setItemId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addItem(form));
    setForm({
      itemName: "",
      price: "",
      quantity: "",
      category: "",
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    dispatch(updateItem(itemId, editForm));
    setShow(false);
    setEditForm({
      price: "",
      quantity: "",
    });
    setItemId("");
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <section className="items__section">
      <h1>Items page</h1>
      {show && (
        <form onSubmit={handleEdit}>
          <label htmlFor="price">Price</label>
          <input
            type="number"
            id="price"
            value={editForm.price}
            onChange={(e) =>
              setEditForm((editForm) => ({
                ...editForm,
                price: e.target.value,
              }))
            }
          />
          <label htmlFor="qty">Quantity</label>
          <input
            type="number"
            id="qty"
            value={editForm.quantity}
            onChange={(e) =>
              setEditForm((editForm) => ({
                ...editForm,
                quantity: e.target.value,
              }))
            }
          />
          <button>Update</button>
        </form>
      )}
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
                  <button onClick={() => dispatch(deleteItem(_id))}>
                    Delete
                  </button>
                  <button
                    onClick={() => {
                      setEditForm({
                        price: item.price,
                        quantity: item.quantity,
                      });
                      setItemId(item._id);
                      setShow(true);
                    }}
                  >
                    Edit
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </section>
  );
};
