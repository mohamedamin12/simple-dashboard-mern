import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gray-800 text-white h-full w-64 fixed">
      <h2 className="text-center text-2xl font-bold p-4 border-b border-gray-700">
        لوحة التحكم
      </h2>
      <ul className="mt-6">
        <li>
          <Link
            to="/"
            className="block px-6 py-3 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            الصفحة الرئيسية
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="block px-6 py-3 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            المستخدمين
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="block px-6 py-3 hover:bg-gray-700"
            activeClassName="bg-gray-700"
          >
            المشاريع
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
