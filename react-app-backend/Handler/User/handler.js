const Users = require('../../Models/Users/userModel');
const { nanoid } = require('nanoid')

const addUser = async (req, res) => {
    try {
        const { userName, password, email } = req.body;
        const user_id = nanoid();
        const createdAt = new Date().toISOString();
        const updatedAt = createdAt;

        await Users.create({
            "user_id": user_id,
            "username": userName,
            "password": password,
            "email": email,
            "createdat": createdAt,
            "updatedat": updatedAt
        })
        res.status(201).json(`User added with ID: ${user_id} `);
    } catch (error) {
        res.json({ message: error.message });
    }
}

const getAll = async (req, res) => {
    try {
        const getUsers = await Users.findAll();
        res.status(200).json(getUsers);
    } catch (error) {
        res.json({ message: error.message })
    }
};

// const getItemByIdHandler = async (req, res) => {
//     const id = req.params.id;
//     const item = await Items.findOne({
//         where: {
//             id: id
//         }
//     });
//     if (item === null) {
//         res.status(404).json('Item not found');
//     } else {
//         res.status(200).json(item);
//     }
// }

// const updateItemHandler = async (req, res) => {
//     const updatedAt = new Date().toISOString();
//     const id = req.params.id;
//     const item = {
//         itemcode: req.body.itemcode,
//         itemname: req.body.itemname,
//         buyprice: req.body.buyprice,
//         sellprice: req.body.sellprice,
//         itemstok: req.body.itemstok,
//         sellername: req.body.sellername,
//         expireddate: req.body.expireddate,
//         updatedat: updatedAt
//     }

//     const newId = await Items.findOne({ where: { id: id } })

//     if (newId === null) {
//         res.status(404).json('Item not found');
//     } else if (newId !== null) {
//         await Items.update(item, { where: { id: id } }).then(res.status(201).json('Item updated'));
//     } else {
//         res.status(400).json('update failed');
//     }
// }

// const deleteItemHandler = async (req, res) => {
//     const id = req.params.id;
//     const deleteItem = await Items.destroy({ where: { id: id } });

//     if (deleteItem === null) {
//         return res.status(404).json('Item not found');
//     } else if (deleteItem) {
//         return res.status(201).json('Item Deleted');
//     } else {
//         return res.status(400).json('Item not deleted');
//     }
// }

module.exports = { getAll, addUser };