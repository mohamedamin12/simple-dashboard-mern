
const DashboardHome = () => {
  return (
    <div className="p-6 ml-64">
    <h1 className="text-3xl font-bold mb-6">احصائيات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 cursor-pointer">
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:scale-[1.05]">
          <h2 className="text-2xl font-semibold">عدد المستخدمين</h2>
          <p className="text-4xl font-bold mt-4">150</p>
        </div>
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-md hover:scale-[1.05]">
        <h2 className="text-2xl font-semibold">عدد المشاريع</h2>
          <p className="text-4xl font-bold mt-4">25</p>
        </div>
      </div>
    </div>
  )
}

export default DashboardHome
