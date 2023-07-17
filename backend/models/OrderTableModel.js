// import connection
import db from "../config/database.js";

// insert Order
export const insertOrder = (data, result) => {
  const order = {
    ordered_by: data.orderBy,
    ordered_at: data.orderedAt,
    due_at: data.dueAt,
  };
  db.query("INSERT INTO orders SET ?", order, (err, results) => {
    console.log(results);
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results.insertId);
    }
  });
};
// get All Orders
// export const getOrders = () => {};
