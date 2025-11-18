const Item = require("../models/ItemSchema");

exports.getItems = () => {
  return Item.find();
};

exports.createItem = (data) => {
  return Item.create(data);
};

exports.updateItem = (id, data) => {
  return Item.findByIdAndUpdate(id, data, { new: true });
};

exports.deleteItem = (id) => {
  return Item.findByIdAndDelete(id);
};
