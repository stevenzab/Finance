const itemService = require("../service/itemService");

exports.getItems = async (req, res) => {
  const items = await itemService.getItems();
  res.json(items);
};

exports.createItem = async (req, res) => {
  const item = await itemService.createItem(req.body);
  res.json(item);
};

exports.updateItem = async (req, res) => {
  const item = await itemService.updateItem(req.params.id, req.body);
  res.json(item);
};

exports.deleteItem = async (req, res) => {
  await itemService.deleteItem(req.params.id);
  res.json({ message: "Item deleted" });
};
