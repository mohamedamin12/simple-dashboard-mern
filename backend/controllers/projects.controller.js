const Projects = require("../models/project.model");
const asyncHandler = require("express-async-handler");
const ApiError = require("../utils/apiError");

/**
 * @desc  Create a new product
 * @route   /api/products/
 * @method  POST
 * @access  private (only admin)
 */
exports.createProject = asyncHandler(async (req, res, next) => {
  const project = await Projects.create(req.body);

  res.status(201).json({
    message: "Project created successfully",
    data: project,
  });
});

/**
 * @desc  Get all Projects
 * @route   /api/Projects/
 * @method  GET
 */
exports.getProjects = asyncHandler(async (req, res) => {
  const projects = await Projects.find({});
  res.json({ data: projects });
});

/**-----------------------------------------------
 * @desc    Get projects Count
 * @route   /api/projects/count
 * @method  GET
 ------------------------------------------------*/
 exports.getProjectsCount = asyncHandler(async (req, res) => {
  const count = await Projects.countDocuments();
  res.status(200).json(count);
});

/**
 * @desc     update projects
 * @route   /api/projects/:id
 * @method  PUT
 */
exports.updateProjects = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const updateProjects = await Projects.findByIdAndUpdate(
    { _id: id },
    req.body,
    {
      new: true,
    }
  );

  if (!updateProjects) {
    return next(new ApiError(`No project for this id ${id}`, 404));
  }

  res.json({ message: "Projects updated successfully", data: updateProjects });
});

/**
 * @desc     delete Projects
 * @route   /api/projects/:id
 * @method  DELETE
 */
exports.deleteProjects = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const projects = await Projects.findByIdAndDelete({ _id: id });
  if (!projects) {
    return next(new ApiError(`No project for this id ${id}`, 404));
  }
  res.json({ message: "Projects deleted successfully" });
});
