// import connection
import db from "../config/database.js";

// insert Order
export const insertOrderedFood = (data, result) => {
  db.query("INSERT INTO ordered_foods SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      console.log(insertId);
      result(null, results.insertId);
    }
  });
};
