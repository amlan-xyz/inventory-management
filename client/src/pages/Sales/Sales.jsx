import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../actions/items.actions";
import { addSale, fetchSales } from "../../actions/sales.actions";

import "./Sales.css";

export const Sales = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  const items = useSelector((state) => state.items);

  const [form, setForm] = useState({
    itemId: "",
    quantity: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(addSale(form));
    setForm({
      itemId: "",
      quantity: "",
    });
  };

  useEffect(() => {
    dispatch(fetchSales());
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <section className="sales__section">
      <h1>Sales Page</h1>

      <form onSubmit={handleSubmit} className="sales__form">
        <label htmlFor="item">Select Item</label>
        <select
          id="item"
          onChange={(e) => {
            setForm((form) => ({ ...form, itemId: e.target.value }));
          }}
          value={form.itemId}
        >
          <option>Select</option>
          {items.map(({ _id, item_name, quantity }) => (
            <option key={_id} value={_id}>
              {item_name}
            </option>
          ))}
        </select>
        <label htmlFor="qty">Quantity</label>
        <input
          type="number"
          id="qty"
          onChange={(e) =>
            setForm((form) => ({ ...form, quantity: e.target.value }))
          }
          value={form.quantity}
        />
        <button type="submit">Submit</button>
      </form>
      <hr />
      <table className="sales__table">
        <tr>
          <th>Id</th>
          <th>Item Name</th>
          <th>Price/Qty</th>
          <th>Quantity</th>
          <th>Total Value</th>
        </tr>
        {sales &&
          sales.map((sale) => {
            const { _id, saleId, item, price, quantity } = sale;
            return (
              <tr key={_id}>
                <td>{saleId}</td>
                <td>{item}</td>
                <td>{price}</td>
                <td>{quantity}</td>
                <td>{quantity * price}</td>
              </tr>
            );
          })}
      </table>
    </section>
  );
};
