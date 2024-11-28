const router = require("express").Router();
const {
  createProjectValidate,
  deleteProjectValidate,
  updateProjectValidate,
} = require("../utils/validation/projectsValidation");

const {
  createProject,
  deleteProjects,
  getProjects,
  updateProjects,
} = require("../controllers/projects.controller");

router.route("/").get(getProjects).post(createProjectValidate, createProject);
router
  .route("/:id")
  .put(updateProjectValidate, updateProjects)
  .delete(deleteProjectValidate, deleteProjects);

module.exports = router;
