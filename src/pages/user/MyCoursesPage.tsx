import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { mockProducts } from '../../data/mockProducts';
import { BookOpenIcon, PlayIcon, DownloadIcon, AwardIcon } from 'lucide-react';

export function MyCoursesPage() {
  const myCourses = mockProducts.slice(0, 4);

  return (
    <div className="min-h-screen">
      <div className="container-1280 px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
            Kursus <span className="gradient-text">Saya</span>
          </h1>
          <p className="text-slate-600">
            Kelola dan lanjutkan pembelajaran Anda
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-purple-600">{myCourses.length}</p>
            <p className="text-sm text-slate-600 mt-1">Kursus Terdaftar</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-emerald-600">2</p>
            <p className="text-sm text-slate-600 mt-1">Sedang Dipelajari</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-cyan-600">1</p>
            <p className="text-sm text-slate-600 mt-1">Selesai</p>
          </Card>
          <Card className="p-6 text-center">
            <p className="text-3xl font-bold text-amber-600">12</p>
            <p className="text-sm text-slate-600 mt-1">Jam Belajar</p>
          </Card>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {myCourses.map((course) => {
            const progress = Math.floor(Math.random() * 100);
            const isCompleted = progress === 100;

            return (
              <Card key={course.id} className="overflow-hidden hover:shadow-xl hover:shadow-purple-500/10 hover:-translate-y-1 transition-all duration-300">
                <div className="flex">
                  {/* Image */}
                  <div className="w-48 flex-shrink-0">
                    <img
                      src={course.featuredImage}
                      alt={course.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 p-6">
                    <div className="flex items-start justify-between mb-2">
                      <Badge variant="info">{course.category}</Badge>
                      {isCompleted && (
                        <Badge variant="success">Selesai</Badge>
                      )}
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {course.name}
                    </h3>

                    <p className="text-sm text-slate-600 mb-3 line-clamp-2">
                      {course.shortDescription}
                    </p>

                    <div className="flex items-center gap-4 text-sm text-slate-600 mb-4">
                      <span>{course.modules} Modul</span>
                      <span>•</span>
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>

                    {/* Progress */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between text-sm mb-1">
                        <span className="text-slate-600">Progress</span>
                        <span className={`font-medium ${isCompleted ? 'text-emerald-600' : 'text-purple-600'}`}>
                          {progress}%
                        </span>
                      </div>
                      <div className="w-full bg-slate-200 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            isCompleted
                              ? 'bg-gradient-to-r from-emerald-500 to-teal-500'
                              : 'bg-gradient-to-r from-purple-500 to-indigo-600'
                          }`}
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex gap-2">
                      {!isCompleted ? (
                        <>
                          <Button size="sm" className="flex-1">
                            <PlayIcon className="w-4 h-4 mr-2" />
                            Lanjut Belajar
                          </Button>
                          <Link to={`/courses/${course.slug}`}>
                            <Button variant="outline" size="sm">
                              Detail
                            </Button>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Button size="sm" className="flex-1" variant="outline">
                            <DownloadIcon className="w-4 h-4 mr-2" />
                            Download Sertifikat
                          </Button>
                          <Button size="sm" className="flex-1">
                            <AwardIcon className="w-4 h-4 mr-2" />
                            Ulangi Kursus
                          </Button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {myCourses.length === 0 && (
          <Card className="p-12 text-center">
            <BookOpenIcon className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Belum ada kursus
            </h3>
            <p className="text-slate-600 mb-6">
              Anda belum terdaftar di kursus manapun.
            </p>
            <Link to="/courses">
              <Button>
                <BookOpenIcon className="w-5 h-5 mr-2" />
                Jelajahi Kursus
              </Button>
            </Link>
          </Card>
        )}
      </div>
    </div>
  );
}
