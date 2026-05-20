import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { Input } from '../../components/ui/Input';
import {
  AwardIcon,
  BellIcon,
  ShieldIcon,
  GlobeIcon,
  EditIcon,
  CheckIcon,
  TrendingUpIcon,
  BookOpenIcon,
  ShoppingCartIcon,
  StarIcon
} from 'lucide-react';

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [twoFactor, setTwoFactor] = useState(false);

  const [formData, setFormData] = useState({
    firstName: 'Nayla',
    lastName: 'Sasha Meliana',
    jobTitle: 'Financial Analyst',
    department: 'Finance',
    bio: 'Financial enthusiast and lifelong learner. Passionate about helping others achieve financial freedom.'
  });

  const handleSaveProfile = () => {
    setIsEditing(false);
  };

  const achievements = [
    {
      id: 1,
      title: 'Top Contributor',
      description: 'Most articles Q1 2024',
      gradient: 'from-orange-500 to-amber-500'
    },
    {
      id: 2,
      title: 'Student Favorite',
      description: 'Highest rated instructor',
      gradient: 'from-pink-500 to-purple-500'
    },
    {
      id: 3,
      title: 'Early Adopter',
      description: 'Member since Jan 2023',
      gradient: 'from-teal-500 to-cyan-500'
    },
    {
      id: 4,
      title: 'Verified User',
      description: 'Account verified',
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'article',
      title: 'Published article',
      description: 'Investment Strategies 2024',
      time: '2 hours ago',
      color: 'blue'
    },
    {
      id: 2,
      type: 'course',
      title: 'Updated course',
      description: 'Personal Finance Mastery',
      time: '1 day ago',
      color: 'purple'
    },
    {
      id: 3,
      type: 'feedback',
      title: 'Received feedback',
      description: '5-star review from student',
      time: '2 days ago',
      color: 'emerald'
    },
    {
      id: 4,
      type: 'product',
      title: 'Created product',
      description: 'Financial Planning Workbook',
      time: '3 days ago',
      color: 'rose'
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
              My <span className="gradient-text">Profile</span>
            </h1>
            <p className="text-slate-600">
              Kelola profil dan preferensi akun Anda
            </p>
          </div>
          <Link to="/dashboard">
            <Button variant="outline" size="sm">
              Kembali ke Dashboard
            </Button>
          </Link>
        </div>

        {/* Profile Hero */}
        <Card className="p-8 mb-6 bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-600 text-white">
          <div className="flex items-start gap-6">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <img
                  src="/images/Photo-Profile-Nayla-Sasha-Meliana.png"
                  alt="Profile"
                  className="w-20 h-20 object-cover rounded-full" />
            </div>
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-1">Nayla Sasha Meliana</h2>
              <p className="text-white/80 mb-3">@naylasasha</p>
              <div className="flex flex-wrap gap-2 mb-3">
                <Badge className="bg-white/20 text-white border-0">Royal Buyer</Badge>
                <Badge className="bg-white/20 text-white border-0">Verified</Badge>
                <Badge className="bg-white/20 text-white border-0">Pro Member</Badge>
              </div>
              <div className="flex items-center gap-6 text-sm text-white/80">
                <span>📅 Joined January 2023</span>
                <span>🏢 FinTrace Platform</span>
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
        <div className="grid md:grid-cols-4 gap-4 mb-6">
          <Card className="p-6 text-center">
            <ShoppingCartIcon className="w-8 h-8 text-purple-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">30</p>
            <p className="text-sm text-slate-600">Articles Bought</p>
          </Card>
          <Card className="p-6 text-center">
            <BookOpenIcon className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">8</p>
            <p className="text-sm text-slate-600">Courses Read</p>
          </Card>
          <Card className="p-6 text-center">
            <TrendingUpIcon className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">Rp 1.2M</p>
            <p className="text-sm text-slate-600">Total Spending</p>
          </Card>
          <Card className="p-6 text-center">
            <StarIcon className="w-8 h-8 text-amber-500 mx-auto mb-2" />
            <p className="text-2xl font-bold text-slate-900">4.9</p>
            <p className="text-sm text-slate-600">Avg Rating</p>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Personal Information */}
            <Card className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-slate-900">
                  Personal Information
                </h3>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsEditing(!isEditing)}
                >
                  <EditIcon className="w-4 h-4" />
                </Button>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="First Name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    />
                    <Input
                      label="Last Name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    />
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input
                      label="Job Title"
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                    />
                    <Input
                      label="Department"
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">
                      Bio
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2.5 border border-slate-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Tulis bio Anda..."
                      value={formData.bio}
                      onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                    />
                  </div>
                  <div className="flex gap-3">
                    <Button size="sm" onClick={handleSaveProfile}>Simpan</Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setIsEditing(false)}
                    >
                      Batal
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">First Name</p>
                      <p className="font-medium text-slate-900">John</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Last Name</p>
                      <p className="font-medium text-slate-900">Doe</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Job Title</p>
                      <p className="font-medium text-slate-900">Software Engineer</p>
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 mb-1">Department</p>
                      <p className="font-medium text-slate-900">Engineering</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-slate-600 mb-1">Bio</p>
                    <p className="text-slate-900">
                      Financial enthusiast and lifelong learner. Passionate about helping others achieve financial freedom.
                    </p>
                  </div>
                </div>
              )}
            </Card>

            {/* Achievements */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Achievements
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {achievements.map((achievement) => (
                  <div
                    key={achievement.id}
                    className={`p-4 rounded-2xl bg-gradient-to-r ${achievement.gradient} text-white`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <AwardIcon className="w-5 h-5" />
                      <h4 className="font-semibold">{achievement.title}</h4>
                    </div>
                    <p className="text-sm text-white/90">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* Preferences & Security */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Preferences & Security
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <BellIcon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Email Notifications
                      </p>
                      <p className="text-sm text-slate-600">
                        Receive updates via email
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setNotifications(!notifications)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      notifications ? 'bg-purple-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        notifications ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-rose-100 flex items-center justify-center">
                      <ShieldIcon className="w-5 h-5 text-rose-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Two-Factor Authentication
                      </p>
                      <p className="text-sm text-slate-600">
                        Extra layer of security
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setTwoFactor(!twoFactor)}
                    className={`relative w-12 h-6 rounded-full transition-colors ${
                      twoFactor ? 'bg-purple-600' : 'bg-slate-300'
                    }`}
                  >
                    <div
                      className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        twoFactor ? 'translate-x-7' : 'translate-x-1'
                      }`}
                    />
                  </button>
                </div>

                <div className="flex items-center justify-between p-4 bg-slate-50 rounded-2xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center">
                      <GlobeIcon className="w-5 h-5 text-cyan-600" />
                    </div>
                    <div>
                      <p className="font-medium text-slate-900">
                        Language & Region
                      </p>
                      <p className="text-sm text-slate-600">
                        Indonesian (ID) • WIB
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column - Contact & Activity */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-sm text-slate-600 mb-1">Username</p>
                  <p className="font-medium text-slate-900">@naylasasha</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Email</p>
                  <p className="font-medium text-slate-900">nayla.sasha.meliana@gmail.com</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Phone</p>
                  <p className="font-medium text-slate-900">+62 812 3456 7890</p>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-1">Location</p>
                  <p className="font-medium text-slate-900">Jakarta, Indonesia</p>
                </div>
              </div>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Recent Activity
              </h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-3">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.color === 'blue'
                          ? 'bg-blue-100 text-blue-600'
                          : activity.color === 'purple'
                          ? 'bg-purple-100 text-purple-600'
                          : activity.color === 'emerald'
                          ? 'bg-emerald-100 text-emerald-600'
                          : 'bg-rose-100 text-rose-600'
                      }`}
                    >
                      {activity.type === 'article' && (
                        <BookOpenIcon className="w-4 h-4" />
                      )}
                      {activity.type === 'course' && (
                        <StarIcon className="w-4 h-4" />
                      )}
                      {activity.type === 'feedback' && (
                        <CheckIcon className="w-4 h-4" />
                      )}
                      {activity.type === 'product' && (
                        <ShoppingCartIcon className="w-4 h-4" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium text-slate-900 text-sm">
                        {activity.title}
                      </p>
                      <p className="text-xs text-slate-600 truncate">
                        {activity.description}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">
                        {activity.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
