const asyncHandler = require("express-async-handler");
const User = require("../models/user.model");
const ApiError = require("../utils/apiError");


/**
 * @desc    git all Users
 * @route   /api/auth/users
 * @method  GET
 **/
exports.getUsers = asyncHandler(async (req, res) => {
  const users = await User.find({});
  res.status(200).json({ data: users });
});


/**
 *  @desc    create a new user
 *  @route   /api/auth/users
 *  @method  POST
 **/
exports.createUser = asyncHandler(async (req, res) => {
  const { username, email , phone  } = req.body;
  const users = await User.create({
    username,
    email,
    phone,
  });
  res.status(201).json({ message: "User created successfully", data: users });
});

/**-----------------------------------------------
 * @desc    Get Users Count
 * @route   /api/users/count
 * @method  GET
 ------------------------------------------------*/
 exports.getUsersCount = asyncHandler(async (req, res) => {
  const count = await User.countDocuments();
  res.status(200).json(count);
});

/**
 *  @desc    update user
 *  @route   /api/auth/users/:id
 *  @method  PUT
 **/
exports.updateUser = asyncHandler(async (req, res, next) => {
  const document = await User.findByIdAndUpdate(
    req.params.id,
    {
      username: req.body.username,
      phone: req.body.phone,
      email: req.body.email,
      role: req.body.role,
    },
    {
      new: true,
    }
  );

  if (!document) {
    return next(new ApiError(`No document for this id ${req.params.id}`, 404));
  }
  res.status(200).json({ data: document });
});

/**
 *  @desc    delete user
 *  @route   /api/auth/users/:id
 *  @method  DELETE
 **/
exports.deleteUser = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const user = await User.findByIdAndDelete(id);
  if (!user) {
    return next(new ApiError(`No delete for this id ${id}`, 404));
  }
  res.json({ message: "Delete deleted successfully" });
});
