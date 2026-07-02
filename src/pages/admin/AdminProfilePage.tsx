import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Modal } from '../../components/ui/Modal';
import { useAuthContext } from '../../context/AuthContext';
import {
  EditIcon,
  FileTextIcon,
  BookOpenIcon,
  UsersIcon,
  StarIcon,
  AwardIcon,
  ShieldIcon,
  BellIcon,
  LogOutIcon
} from 'lucide-react';

export function AdminProfilePage() {
  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  
  const { user } = useAuthContext();
  const [isEditing, setIsEditing] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [notificationSettings, setNotificationSettings] = useState({
    email: true,
    push: true,
    newUser: true,
    newArticle: true,
    newProduct: true
  });

  const stats = {
    articlesWritten: 127,
    coursesCreated: 8,
    totalStudents: 2456,
    avgRating: 4.9
  };

  const achievements = [
    {
      id: 1,
      title: 'Administrator',
      description: 'Full access to admin panel',
      gradient: 'from-purple-500 to-indigo-600',
      icon: ShieldIcon
    },
    {
      id: 2,
      title: 'Verified',
      description: 'Account verified by FinTrace',
      gradient: 'from-emerald-500 to-teal-500',
      icon: AwardIcon
    },
    {
      id: 3,
      title: 'Pro Member',
      description: 'Premium content creator',
      gradient: 'from-amber-500 to-orange-500',
      icon: StarIcon
    },
    {
      id: 4,
      title: 'Top Contributor',
      description: 'Most articles in Q4 2024',
      gradient: 'from-pink-500 to-rose-500',
      icon: FileTextIcon
    }
  ];

  const recentContent = [
    {
      id: 1,
      type: 'article',
      title: 'Cara Mengelola Keuangan untuk Mahasiswa',
      views: 45200,
      date: '15 Jan 2024',
      status: 'published'
    },
    {
      id: 2,
      type: 'course',
      title: 'Personal Finance Mastery',
      students: 387,
      date: '12 Jan 2024',
      status: 'published'
    },
    {
      id: 3,
      type: 'article',
      title: 'Investasi Saham untuk Pemula',
      views: 38750,
      date: '10 Jan 2024',
      status: 'draft'
    },
    {
      id: 4,
      type: 'course',
      title: 'Debt Management Course',
      students: 156,
      date: '08 Jan 2024',
      status: 'published'
    }
  ];

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="min-h-screen">
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-6 lg:mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-1 sm:mb-2">
              Admin <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-sm sm:text-base text-slate-600">
              Kelola profil dan pengaturan admin
            </p>
          </div>
          <div className="flex gap-2 w-full sm:w-auto">
            <Link to="/admin/dashboard" className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                Dashboard
              </Button>
            </Link>
          </div>
        </div>

        {/* Profile Hero */}
        <Card className="p-4 lg:p-8 mb-6 bg-gradient-to-r from-purple-600 via-indigo-600 to-pink-600 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
            <div className="w-16 h-16 sm:w-24 sm:h-24 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0">
              {user?.avatar ? (
                <img
                  src={user.avatar}
                  alt="Profile"
                  className="w-14 h-14 sm:w-20 sm:h-20 object-cover rounded-full"
                />
              ) : (
                <span className="text-2xl sm:text-4xl font-bold">{getInitials(user?.fullName || 'Admin')}</span>
              )}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-xl sm:text-2xl font-bold mb-1">{user?.fullName || 'Admin'}</h2>
              <p className="text-white/80 mb-2 sm:mb-3 text-sm sm:text-base">Admin | Content Creator</p>
              <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                {achievements.slice(0, 3).map((achievement) => (
                  <Badge key={achievement.id} className="bg-white/20 text-white border-0">
                    {achievement.title}
                  </Badge>
                ))}
              </div>
            </div>
            <Button
              variant="outline"
              className="bg-white text-purple-600 border-white hover:bg-white/90"
              onClick={() => setIsEditing(!isEditing)}
            >
              <EditIcon className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </Card>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-6">
          <Card className="p-6 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-shadow">
            <FileTextIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">
              {stats.articlesWritten}
            </p>
            <p className="text-sm text-slate-600">Articles Written</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-shadow">
            <BookOpenIcon className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">
              {stats.coursesCreated}
            </p>
            <p className="text-sm text-slate-600">Courses Created</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-shadow">
            <UsersIcon className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">
              {stats.totalStudents.toLocaleString('id-ID')}
            </p>
            <p className="text-sm text-slate-600">Total Students</p>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg hover:shadow-purple-500/10 transition-shadow">
            <StarIcon className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <p className="text-3xl font-bold text-slate-900">{stats.avgRating}</p>
            <p className="text-sm text-slate-600">Avg Rating</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mb-6">
          {/* Achievements */}
          <Card className="p-6">
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Achievements
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement) => {
                const Icon = achievement.icon;
                return (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.gradient} text-white`}
                  >
                    <Icon className="w-6 h-6 mb-2" />
                    <h4 className="font-semibold text-sm">{achievement.title}</h4>
                    <p className="text-xs text-white/90 mt-1">
                      {achievement.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </Card>

          {/* Notification Settings */}
          <Card className="p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-slate-900">
                Notification Settings
              </h3>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowModal(true)}
              >
                <BellIcon className="w-4 h-4 mr-1" />
                Edit
              </Button>
            </div>

            <div className="space-y-3">
              {Object.entries(notificationSettings).map(([key, value]) => (
                <div
                  key={key}
                  className="flex items-center justify-between p-3 bg-slate-50 rounded-xl"
                >
                  <div className="flex items-center gap-3">
                    <BellIcon className="w-5 h-5 text-purple-600" />
                    <span className="font-medium text-slate-900 capitalize">
                      {key === 'email'
                        ? 'Email Notifications'
                        : key === 'push'
                        ? 'Push Notifications'
                        : key === 'newUser'
                        ? 'New User Signup'
                        : key === 'newArticle'
                        ? 'New Article Published'
                        : 'New Course Created'}
                    </span>
                  </div>
                  <button
                    onClick={() =>
                      setNotificationSettings((prev) => ({
                        ...prev,
                        [key]: !value
                      }))
                    }
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      value ? 'bg-purple-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        value ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Recent Content */}
        <Card className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-slate-900">
              Recent Content
            </h3>
            <Link to="/admin/articles">
              <span className="text-sm text-purple-600 hover:text-purple-700 cursor-pointer">
                Lihat Semua
              </span>
            </Link>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-slate-50 border-b border-slate-200">
                <tr>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                    Title
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                    Type
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                    {''}
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                    Date
                  </th>
                  <th className="px-4 py-3 text-left text-sm font-semibold text-slate-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {recentContent.map((content) => (
                  <tr
                    key={content.id}
                    className="hover:bg-slate-50 transition-colors"
                  >
                    <td className="px-4 py-3">
                      <p className="font-medium text-slate-900">
                        {content.title}
                      </p>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          content.type === 'article'
                            ? 'bg-blue-100 text-blue-700'
                            : 'bg-purple-100 text-purple-700'
                        }`}
                      >
                        {content.type === 'article' ? 'Article' : 'Course'}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {content.type === 'article' ? (
                        <>
                          <FileTextIcon className="w-4 h-4 inline mr-1" />
                          {content.views.toLocaleString('id-ID')} views
                        </>
                      ) : (
                        <>
                          <UsersIcon className="w-4 h-4 inline mr-1" />
                          {content.students} students
                        </>
                      )}
                    </td>
                    <td className="px-4 py-3 text-sm text-slate-600">
                      {content.date}
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          content.status === 'published'
                            ? 'bg-emerald-100 text-emerald-700'
                            : 'bg-amber-100 text-amber-700'
                        }`}
                      >
                        {content.status === 'published' ? 'Published' : 'Draft'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* Logout Button */}
        <div className="mt-6 text-right">
          <button className="inline-flex items-center px-6 py-2.5 rounded-lg font-medium bg-rose-500 text-white hover:bg-rose-600 transition-colors">
            <LogOutIcon className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

      {/* Notification Settings Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Notification Settings"
      >
        <div className="space-y-4">
          {Object.entries(notificationSettings).map(([key, value]) => (
            <div
              key={key}
              className="flex items-center justify-between p-4 bg-slate-50 rounded-xl"
            >
              <div className="flex items-center gap-3">
                <BellIcon className="w-5 h-5 text-purple-600" />
                <span className="font-medium text-slate-900 capitalize">
                  {key === 'email'
                    ? 'Email Notifications'
                    : key === 'push'
                    ? 'Push Notifications'
                    : key === 'newUser'
                    ? 'New User Signup'
                    : key === 'newArticle'
                    ? 'New Article Published'
                    : 'New Course Created'}
                </span>
              </div>
              <button
                onClick={() =>
                  setNotificationSettings((prev) => ({
                    ...prev,
                    [key]: !value
                  }))
                }
                className={`relative w-12 h-6 rounded-full transition-colors ${
                  value ? 'bg-purple-600' : 'bg-slate-300'
                }`}
              >
                <div
                  className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                    value ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
          ))}

          <div className="flex gap-3 pt-4">
            <Button className="flex-1">Save Changes</Button>
            <Button
              variant="outline"
              className="flex-1"
              onClick={() => setShowModal(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}
