// import connection
import db from "../config/database.js";

// insert Order
export const insertOrderedFoodOption = (data, result) => {
  db.query("INSERT INTO ordered_food_options SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
