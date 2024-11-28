import { useState } from "react";
import ModalAddProject from "./modal/ModelAddProject";
import ModalEditProject from "./modal/ModalEditProject";

function ProjectsTable() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { id: 1, title: "مشروع 1", description: "تفاصيل المشروع", type: "ويب" },
  ];

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEdit = (user) => {
    setSelectedProject(user);
    toggleEditModal();
  };

  return (
    <div className="p-6 mr-[300px] sm:p-6">
      <h1 className="text-3xl font-bold mb-6">جدول المشاريع</h1>
      <div className="flex justify-between items-center mb-4">
        <button
          onClick={toggleAddModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          إضافة مشروع
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-4 text-left border">ID</th>
              <th className="p-4 text-left border">اسم المشروع</th>
              <th className="p-4 text-left border">الوصف</th>
              <th className="p-4 text-left border">نوع المشروع</th>
              <th className="p-4 text-left border">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td className="p-4 border">{project.id}</td>
                <td className="p-4 border">{project.title}</td>
                <td className="p-4 border">{project.description}</td>
                <td className="p-4 border">{project.type}</td>
                <td className="p-4 border flex gap-2">
                  <button
                    onClick={() => handleEdit(project)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                  >
                    تعديل
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalAddProject isModalOpen={isAddModalOpen} toggleModal={toggleAddModal} />

      <ModalEditProject isModalOpen={isEditModalOpen} toggleModal={toggleEditModal} projectData={selectedProject} />

    </div>
  );
}

export default ProjectsTable;
