import { useEffect } from "react";
import { BsBoxSeam, BsGraphUpArrow } from "react-icons/bs";
import { TfiMoney } from "react-icons/tfi";
import { useDispatch, useSelector } from "react-redux";
import { fetchItems } from "../../actions/items.actions";
import { fetchSales } from "../../actions/sales.actions";
import { Loader } from "../../components/Loader/Loader";
import "./Dashboard.css";
export const Dashboard = () => {
  const dispatch = useDispatch();
  const sales = useSelector((state) => state.sales);
  const inventory = useSelector((state) => state.items);
  const loading = useSelector((state) => state.loading);

  const calculateInventory = inventory.reduce(
    (acc, curr) => acc + curr.quantity,
    0
  );

  const calculateRevenue = sales.reduce(
    (acc, curr) => curr.price * curr.quantity + acc,
    0
  );

  const calculateSales = sales.reduce((acc, curr) => acc + 1, 0);

  useEffect(() => {
    dispatch(fetchItems());
    dispatch(fetchSales());
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <section className="dashboard_section">
          <header className="section__header">Dashboard</header>
          <div className="dashboard__cards">
            <div className="dashboard__cards-body">
              <span className="dashboard__cards-icon">
                <TfiMoney />
              </span>
              <p className="dashboard__cards-value">{calculateRevenue}</p>
              <p className="dashboard__cards-info">Revenue</p>
            </div>
            <div className="dashboard__cards-body">
              {" "}
              <span className="dashboard__cards-icon">
                <BsBoxSeam />
              </span>
              <p className="dashboard__cards-value">{calculateInventory}</p>
              <p className="dashboard__cards-info">Inventory</p>
            </div>
            <div className="dashboard__cards-body">
              {" "}
              <span className="dashboard__cards-icon">
                <BsGraphUpArrow />
              </span>
              <p className="dashboard__cards-value">{calculateSales}</p>
              <p className="dashboard__cards-info">Sales</p>
            </div>
          </div>
        </section>
      )}
    </>
  );
};
