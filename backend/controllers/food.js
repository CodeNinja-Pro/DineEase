// import functions from Food model

import {
  getFoods,
  getCategories,
  getFoodById,
  insertFood,
  updateFoodById,
  deleteFoodById,
} from "../models/FoodModel.js";

// get all Foods
export const showFoods = (req, res) => {
  getFoods((err, foods) => {
    if (err) {
      return res.send(err);
    }
    getCategories((err, categories) => {
      if (err) {
        return res.send(err);
      }
      const menu = {
        food: foods,
        category: categories,
      };
      res.json(menu);
    });
  });
};

// get single Food
export const showFoodById = (req, res) => {
  getFoodById(req.params.id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// create Food
export const createFood = (req, res) => {
  const data = req.body;
  insertFood(data, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// update Food
export const updateFood = (req, res) => {
  const data = req.body;
  const id = req.params.id;
  updateFoodById(data, id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};

// delete Food
export const deleteFood = (req, res) => {
  const id = req.params.id;
  deleteFoodById(id, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      res.json(results);
    }
  });
};
