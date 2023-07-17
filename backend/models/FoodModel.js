// import connection
import db from "../config/database.js";

// get all Foods
export const getFoods = (result) => {
  // Get Foods
  db.query(
    "SELECT foods.id, foods.title, foods.description, foods.image, foods.price, foods.available, categories.type, categories.text  FROM foods as foods left join categories as categories ON foods.category_id=categories.id",
    (err, foods) => {
      if (err) {
        console.log(err);
        return result(err, null);
      }
      foods.map((food) => {
        //Get addon options
        db.query(
          "SELECT addons.text, addons.price FROM `foods_addons` as foods_addons left join addons as addons on foods_addons.addon_id = addons.id where food_id=" +
            food.id,
          (err, addonOptions) => {
            if (err) {
              console.log(err);
              return result(err, null);
            }
            food.options.addon = addonOptions;
          }
        );
        //Get size options
        db.query(
          "SELECT size as text, price FROM `food_size_price` where food_id=" +
            food.id,
          (err, sizeOptions) => {
            if (err) {
              console.log(err);
              return result(err, null);
            }
            food.options.size = sizeOptions;
          }
        );
      });
      result(null, foods);
    }
  );
};

//get all Categories
export const getCategories = (result) => {
  db.query("select * from categories", (err, categories) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, categories);
    }
  });
};

// get single Foods
export const getFoodById = (id, result) => {
  db.query("SELECT * FROM food WHERE food_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// insert Food
export const insertFood = (data, result) => {
  db.query("INSERT INTO food SET ?", data, (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results[0]);
    }
  });
};

// update Food
export const updateFoodById = (data, id, result) => {
  db.query(
    "UPDATE food SET food_name = ?, food_price = ? WHERE food_id = ?",
    [data.food_name, data.food_price, id],
    (err, results) => {
      if (err) {
        console.log(err);
        result(err, null);
      } else {
        result(null, results);
      }
    }
  );
};

// delete Food
export const deleteFoodById = (id, result) => {
  db.query("DELETE FROM food WHERE food_id = ?", [id], (err, results) => {
    if (err) {
      console.log(err);
      result(err, null);
    } else {
      result(null, results);
    }
  });
};
