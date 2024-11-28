const router = require("express").Router();

const {
  createUser,
  updateUser,
  getUsers,
  deleteUser,
} = require("../controllers/users.controller");

const {
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
} = require("../utils/validation/usersValidator");

router.route("/").get(getUsers).post(createUserValidator, createUser);

router
  .route("/:id")
  .put(updateUserValidator, updateUser)
  .delete(deleteUserValidator, deleteUser);

module.exports = router;
