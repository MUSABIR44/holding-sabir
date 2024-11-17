import React from 'react';
import { BookOpen, Users, Calendar, Trophy } from 'lucide-react';

const Dashboard = () => {
  const stats = [
    { icon: BookOpen, label: 'Dersler', value: '8', color: 'bg-blue-500' },
    { icon: Users, label: 'Öğretmenler', value: '12', color: 'bg-green-500' },
    { icon: Calendar, label: 'Devamsızlık', value: '3', color: 'bg-yellow-500' },
    { icon: Trophy, label: 'Başarı Puanı', value: '85.4', color: 'bg-purple-500' },
  ];

  const recentGrades = [
    { subject: 'Matematik', grade: 90, date: '2024-03-15', type: 'Yazılı Sınav' },
    { subject: 'Fizik', grade: 85, date: '2024-03-14', type: 'Sözlü' },
    { subject: 'Kimya', grade: 95, date: '2024-03-13', type: 'Proje' },
    { subject: 'Biyoloji', grade: 88, date: '2024-03-12', type: 'Yazılı Sınav' },
  ];

  const upcomingExams = [
    { subject: 'Türkçe', date: '2024-03-20', time: '09:00' },
    { subject: 'Tarih', date: '2024-03-22', time: '10:30' },
    { subject: 'İngilizce', date: '2024-03-25', time: '13:00' },
  ];

  return (
    <main className="flex-1 overflow-y-auto bg-gray-50 p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center">
                <div className={`${stat.color} p-3 rounded-lg`}>
                  <Icon className="h-6 w-6 text-white" />
                </div>
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-500">{stat.label}</p>
                  <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Son Notlar</h2>
          <div className="space-y-4">
            {recentGrades.map((grade, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{grade.subject}</p>
                  <p className="text-sm text-gray-500">{grade.type}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-blue-600">{grade.grade}</p>
                  <p className="text-sm text-gray-500">{grade.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Yaklaşan Sınavlar</h2>
          <div className="space-y-4">
            {upcomingExams.map((exam, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">{exam.subject}</p>
                  <p className="text-sm text-gray-500">{exam.date}</p>
                </div>
                <div className="bg-blue-100 px-4 py-2 rounded-lg">
                  <p className="text-blue-700 font-medium">{exam.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;