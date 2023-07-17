import { insertOrder } from "../models/OrderTableModel.js";
import { insertOrderedFood } from "../models/OrderedFoodModal.js";
import { insertOrderedFoodOption } from "../models/OrderedFoodOptionsModal.js";

// create Booking
export const createOrder = (req, res) => {
  const data = req.body;
  console.log(data);
  console.log(data.orderedFoods[0].options);

  insertOrder(data, (err, insertedOrder) => {
    if (err) {
      res.send(err);
    } else {
      data.orderedFoods.map((orderedFood) => {
        console.log("insertedOrder", insertedOrder);
        const newOrderedFood = {
          order_id: insertedOrder,
          food_id: orderedFood.id,
          quantity: orderedFood.quantity,
        };
        insertOrderedFood(newOrderedFood, (err, insertedOrderedFood) => {
          if (err) {
            console.log(err);
            return res.send(err);
          }
          orderedFood.options.map((option) => {
            insertOrderedFoodOption(
              {
                ordered_food_id: insertedOrderedFood,
                key: option.key,
                value: option.value,
              },
              (err, result) => console.log(result)
            );
          });
        });
      });
      res.json(insertedOrder);
    }
  });
};
