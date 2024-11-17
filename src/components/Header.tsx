import React from 'react';
import { CheckSquare } from 'lucide-react';

const Header = () => {
  return (
    <div className="flex items-center justify-center mb-8">
      <CheckSquare className="h-8 w-8 text-blue-600 mr-2" />
      <h1 className="text-3xl font-bold text-gray-800">Yapılacaklar Listesi</h1>
    </div>
  );
};

export default Header;