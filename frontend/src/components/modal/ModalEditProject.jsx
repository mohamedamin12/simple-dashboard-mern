/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";


const ModalEditProject = ({ isModalOpen, toggleModal, projectData }) => {

  const [formData, setFormData] = useState({});

  useEffect(() => {
    setFormData(projectData || {});
  }, [projectData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Updated:", formData);
    toggleModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">تعديل بيانات المشروع</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              اسم المشروع
            </label>
            <input
              type="text"
              name="title"
              value={formData.title || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
               وصف المشروع
            </label>
            <textarea
              value={formData.description || ""}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              نوع المشروع
            </label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
              name="role"
              value={formData.type || ""}
            >
              <option disabled value="">
                اختر نوع المشروع
              </option>
              <option value="admin">ويب</option>
              <option value="user">موبايل</option>
            </select>
          </div>
          <div className="flex justify-end gap-4">
            <button
              type="button"
              onClick={toggleModal}
              className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            >
              إلغاء
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              حفظ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalEditProject;
