function ProjectsTable() {
  return (
    <div className="p-6 ml-64 ">
      <h1 className="text-3xl font-bold mb-6">جدول المشاريع</h1>
      <table className="w-full border-collapse bg-white shadow-md">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-4 text-left border">ID</th>
            <th className="p-4 text-left border">اسم المشروع</th>
            <th className="p-4 text-left border">الوصف</th>
            <th className="p-4 text-left border">الإجراءات</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-4 border">1</td>
            <td className="p-4 border">مشروع 1</td>
            <td className="p-4 border">وصف المشروع</td>
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
}

export default ProjectsTable;
