/* eslint-disable react/prop-types */
const ModalAddProject = ({ isModalOpen, toggleModal }) => {
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("User Added");
    toggleModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">إضافة مشروع جديد</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">اسم المشروع</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2"> وصف المشروع</label>
            <textarea
              className="w-full h-48 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">نوع المشروع</label>
            <select
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            >
            <option disabled value="">اختر نوع المشروع</option>
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
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              إضافة
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ModalAddProject;
