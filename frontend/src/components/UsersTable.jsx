const UsersTable = () => {
  return (
    <div className="p-6 ml-64 ">
      <h1 className="text-3xl font-bold mb-6 ">جدول المستخدمين</h1>
      <table className="w-full border-collapse bg-white shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left border">ID</th>
            <th className="p-4 text-left border">اسم المستخدم</th>
            <th className="p-4 text-left border">البريد الإلكتروني</th>
            <th className="p-4 text-left border">تاريخ التسجيل</th>
            <th className="p-4 text-left border">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border">1</td>
            <td className="p-4 border">احمد</td>
            <td className="p-4 border">a@gmail.com</td>
            <td className="p-4 border">12/05/2021</td>
            <td className="p-4 border flex gap-2">
              <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600">
                تعديل
              </button>
              <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">
                حذف
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UsersTable;
