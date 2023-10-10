import { useEffect, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../actions/items.actions";
import { addSale, fetchSales } from "../../actions/sales.actions";
import { Loader } from "../../components/Loader/Loader";
import "./Sales.css";

export const Sales = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  const items = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading);

  const [form, setForm] = useState({
    itemId: "",
    quantity: "",
  });
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addSale(form));
    setForm({
      itemId: "",
      quantity: "",
    });
    setShow(false);
  };

  useEffect(() => {
    dispatch(fetchSales());
    dispatch(fetchItems());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="sales__section">
          <header className="section__header">Sales History</header>
          <div className="items__body">
            <button onClick={() => setShow(true)} className="primary__btn">
              Add Sale
            </button>
          </div>
          <table className="items__list">
            <tr className="items__list-header" key="0">
              <th>Transaction ID</th>
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
                    <td className="items__list-item">{saleId}</td>
                    <td className="items__list-item">{item}</td>
                    <td className="items__list-item">{price}</td>
                    <td className="items__list-item">{quantity}</td>
                    <td className="items__list-item">$ {quantity * price}</td>
                  </tr>
                );
              })}
          </table>
          {show && (
            <div className="modal">
              <div className="modal_wrapper"></div>
              <div className="modal_container">
                <button
                  className="modal_close-btn"
                  onClick={() => setShow(false)}
                >
                  <RxCross2 />
                </button>
                <form onSubmit={handleSubmit} className="items__form">
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
                  <button className="items__form-btn" type="submit">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          )}
        </section>
      )}
    </>
  );
};
