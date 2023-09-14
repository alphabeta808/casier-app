const Items = require("../../Models/Items/itemsModel");
const { nanoid } = require("nanoid");

const addItems = async (req, res) => {
  try {
    const {
      itemCode,
      itemName,
      buyPrice,
      sellPrice,
      itemStok,
      sellerName,
      expiredDate,
    } = req.body;
    const id = nanoid();
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;

    await Items.create({
      id: id,
      itemcode: itemCode,
      itemname: itemName,
      buyprice: buyPrice,
      sellprice: sellPrice,
      itemstok: itemStok,
      sellername: sellerName,
      expireddate: expiredDate,
      createdat: createdAt,
      updatedat: updatedAt,
    });
    res.status(201).json(`Item added with ID: ${id} `);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const getItems = await Items.findAll();
    res.status(200).json(getItems);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const getItemById = async (req, res) => {
  const id = req.params.id;
  const item = await Items.findOne({
    where: {
      id: id,
    },
  });
  if (item === null) {
    res.status(404).json("Item not found");
  } else {
    res.status(200).json(item);
  }
};

const updateItem = async (req, res) => {
  const updatedAt = new Date().toISOString();
  const id = req.params.id;
  const item = {
    itemcode: req.body.itemcode,
    itemname: req.body.itemname,
    buyprice: req.body.buyprice,
    sellprice: req.body.sellprice,
    itemstok: req.body.itemstok,
    sellername: req.body.sellername,
    expireddate: req.body.expireddate,
    updatedat: updatedAt,
  };

  const newId = await Items.findOne({ where: { id: id } });

  if (newId === null) {
    res.status(404).json("Item not found");
  } else if (newId !== null) {
    await Items.update(item, { where: { id: id } }).then(
      res.status(201).json("Item updated")
    );
  } else {
    res.status(400).json("update failed");
  }
};

const deleteItem = async (req, res) => {
  const id = req.params.id;
  const deleteItem = await Items.destroy({ where: { id: id } });

  if (deleteItem === null) {
    return res.status(404).json("Item not found");
  } else if (deleteItem) {
    return res.status(201).json("Item Deleted");
  } else {
    return res.status(400).json("Item not deleted");
  }
};

module.exports = { getItems, addItems, getItemById, updateItem, deleteItem };
