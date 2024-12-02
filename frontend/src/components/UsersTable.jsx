/* eslint-disable react-hooks/exhaustive-deps */
import { useState } from "react";
import ModalAddUser from "./modal/ModalAddUser ";
import ModalEditUser from "./modal/ModalEditUser";
import swal from "sweetalert";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {fetchUserData , deleteUser  } from "../redux/apiCalls/userApiCall";



const UsersTable = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.users);

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);


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

  useEffect(()=>{
    dispatch(fetchUserData());
  },[])

    //** Delete User Handler
    const deleteUserHandler = (userId) => {
      swal({
        title: "هل انت متأكد ؟",
        text: "انت الان علي وشك حذف هذا المستخدم هل انت متأكد من ذلك",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((isOk) => {
        if (isOk) {
          dispatch(deleteUser(userId));
        }
      });
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
              <th className="p-2 sm:p-4 text-left border">الإجراءات</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user , index) => (
              <tr key={user.id}>
                <td className="p-2 sm:p-4 border">{index + 1}</td>
                <td className="p-2 sm:p-4 border">{user.username}</td>
                <td className="p-2 sm:p-4 border">{user.email}</td>
                <td className="p-2 sm:p-4 border">{user.phone}</td>
                <td className="p-2 sm:p-4 border">{new Date(user.createdAt).toLocaleDateString()}</td>
                <td className="p-2 sm:p-4 border flex gap-2">
                  <button
                    onClick={() => handleEdit(user)}
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
                  >
                    تعديل
                  </button>
                  <button onClick={()=>deleteUserHandler(user._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition">
                    حذف
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <ModalAddUser isModalOpen={isAddModalOpen} toggleModal={toggleAddModal}  />

      <ModalEditUser isModalOpen={isEditModalOpen} toggleModal={toggleEditModal} userData={selectedUser} users= {users} />
    </div>
  );
};

export default UsersTable;

