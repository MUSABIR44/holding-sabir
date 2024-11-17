import React from 'react';
import { LogOut } from 'lucide-react';

const Sidebar = ({ menuItems, currentPage, setCurrentPage }) => {
  return (
    <div className="w-64 bg-white border-r border-gray-200 flex flex-col">
      <div className="flex-1 py-6 flex flex-col">
        <nav className="px-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentPage(item.id)}
                className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg ${
                  currentPage === item.id
                    ? 'bg-blue-50 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="h-5 w-5 mr-3" />
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
      
      <div className="p-4 border-t border-gray-200">
        <button className="flex items-center px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50 rounded-lg w-full">
          <LogOut className="h-5 w-5 mr-3" />
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Sidebar;