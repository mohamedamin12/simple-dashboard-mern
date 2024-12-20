import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { createUser } from "../../redux/apiCalls/userApiCall";

/* eslint-disable react/prop-types */
const ModalAddUser = ({ isModalOpen, toggleModal  }) => {
  
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("username is required");
    if (email.trim() === "") return toast.error("email is required");
    if (phone.trim() === "") return toast.error("username is required");
    
    dispatch(createUser({ username, email, phone }));

    toggleModal();
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">إضافة مستخدم جديد</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">اسم المستخدم</label>
            <input
              type="text"
              value={username}
              onChange={(e)=> setUsername(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2"> رقم الهاتف</label>
            <input
              type="text"
              value={phone}
              onChange={(e)=> setPhone(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
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

export default ModalAddUser;
