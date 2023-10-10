import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addItem,
  deleteItem,
  fetchItems,
  updateItem,
} from "../../actions/items.actions";

import "./Items.css";

import { LuClipboardEdit, LuTrash2 } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";
import { Loader } from "../../components/Loader/Loader";

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
  const [editShow, setEditShow] = useState(false);

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
    setShow(false);
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
    setEditShow(false);
  };

  useEffect(() => {
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <section className="items__section">
      <header className="section__header">Inventory</header>
      <div className="items__body">
        <button onClick={() => setShow(true)} className="primary__btn">
          Add Item
        </button>
      </div>

      {loading ? (
        <Loader />
      ) : (
        <table className="items__list">
          <tr className="items__list-header ">
            <th>Item Name</th>
            <th>Category</th>
            <th>Price/Qty</th>
            <th>Quantity</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {items &&
            items.map((item) => {
              const { _id, item_name, quantity, price, category } = item;
              return (
                <tr className="">
                  <td key={_id} className="items__list-item">
                    {item_name}
                  </td>
                  <td className="items__list-item">{category}</td>
                  <td className="items__list-item">{price}</td>
                  <td className="items__list-item">{quantity}</td>
                  <td className="items__list-item">
                    <button
                      onClick={() => {
                        setEditForm({
                          price: item.price,
                          quantity: item.quantity,
                        });
                        setItemId(item._id);
                        setEditShow(true);
                      }}
                    >
                      <LuClipboardEdit />
                    </button>
                  </td>
                  <td className="items__list-item">
                    <button onClick={() => dispatch(deleteItem(_id))}>
                      <LuTrash2 />
                    </button>
                  </td>
                </tr>
              );
            })}
        </table>
      )}
      {show && (
        <div className="modal">
          <div className="modal_wrapper"></div>
          <div className="modal_container">
            <button className="modal_close-btn" onClick={() => setShow(!show)}>
              <RxCross2 />
            </button>
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
                <option>Select</option>
                <option value="jackets">Jackets</option>
                <option value="t-shirts">T-Shirts</option>
                <option value="jeans">Jeans</option>
              </select>
              <button className="items__form-btn">Submit</button>
            </form>
          </div>
        </div>
      )}
      {editShow && (
        <div className="modal">
          <div className="modal_wrapper"></div>
          <div className="modal_container">
            <button
              className="modal_close-btn"
              onClick={() => setEditShow(false)}
            >
              <RxCross2 />
            </button>
            <form className="items__form" onSubmit={handleEdit}>
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
              <button className="items__form-btn">Update</button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
