import { useState } from "react";
import ModalAddUser from "./modal/ModalAddUser ";
import ModalEditUser from "./modal/ModalEditUser";


const UsersTable = () => {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, username: "احمد", email: "a@gmail.com", phone: "0100055288", date: "12/05/2021", role: "user" },
  ];

  const toggleAddModal = () => {
    setIsAddModalOpen(!isAddModalOpen);
  };

  const toggleEditModal = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    toggleEditModal();
  };

  return (
    <div className="p-4 mr-[300px] sm:p-6">
      <h1 className="text-3xl font-bold mb-6">جدول المستخدمين</h1>

      <div className="flex justify-between items-center mb-4">
        <button
          onClick={toggleAddModal}
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
        >
          إضافة مستخدم
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-md text-sm sm:text-base">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 sm:p-4 text-left border">ID</th>
              <th className="p-2 sm:p-4 text-left border">اسم المستخدم</th>
              <th className="p-2 sm:p-4 text-left border">البريد الإلكتروني</th>
              <th className="p-2 sm:p-4 text-left border">رقم الهاتف</th>
              <th className="p-2 sm:p-4 text-left border">تاريخ التسجيل</th>
              <th className="p-2 sm:p-4 text-left border">نوع المستخدم</th>
              <th className="p-2 sm:p-4 text-left border">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="p-2 sm:p-4 border">{user.id}</td>
                <td className="p-2 sm:p-4 border">{user.username}</td>
                <td className="p-2 sm:p-4 border">{user.email}</td>
                <td className="p-2 sm:p-4 border">{user.phone}</td>
                <td className="p-2 sm:p-4 border">{user.date}</td>
                <td className="p-2 sm:p-4 border">{user.role}</td>
                <td className="p-2 sm:p-4 border flex gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    تعديل
                  </button>
                  <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalAddUser isModalOpen={isAddModalOpen} toggleModal={toggleAddModal} />

      <ModalEditUser isModalOpen={isEditModalOpen} toggleModal={toggleEditModal} userData={selectedUser} />
    </div>
  );
};

export default UsersTable;

