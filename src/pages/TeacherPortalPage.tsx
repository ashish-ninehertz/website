import { motion } from 'framer-motion';
import { BookOpen, Users, FileText, Calendar, Upload } from 'lucide-react';
import { MOCK_COURSES, MOCK_ASSIGNMENTS } from '../lib/mockData';

export default function TeacherPortalPage() {
  const teacherId = '2'; // Mock teacher ID
  const teacherCourses = MOCK_COURSES.filter(c => c.teacherId === teacherId);
  const totalStudents = teacherCourses.reduce((sum, c) => sum + c.enrolled, 0);
  const teacherAssignments = MOCK_ASSIGNMENTS.filter(a => 
    teacherCourses.some(c => c.id === a.courseId)
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-primary text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Teacher Portal</h1>
            <p className="text-xl text-white/90">Welcome back, Prof. John Smith!</p>
          </motion.div>
        </div>
      </section>

      {/* Dashboard */}
      <section className="section-padding">
        <div className="container-custom">
          {/* Stats Cards */}
          <div className="grid md:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">My Courses</p>
                  <p className="text-3xl font-bold text-primary">{teacherCourses.length}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Total Students</p>
                  <p className="text-3xl font-bold text-secondary">{totalStudents}</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <Users className="w-6 h-6 text-secondary" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Active Assignments</p>
                  <p className="text-3xl font-bold text-accent">{teacherAssignments.length}</p>
                </div>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-accent" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm mb-1">Pending Reviews</p>
                  <p className="text-3xl font-bold text-warning">
                    {teacherAssignments.filter(a => a.status === 'submitted').length}
                  </p>
                </div>
                <div className="w-12 h-12 bg-warning/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-warning" />
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* My Courses */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">My Courses</h2>
                <button className="btn-primary flex items-center space-x-2">
                  <Upload className="w-4 h-4" />
                  <span>Upload Material</span>
                </button>
              </div>
              <div className="space-y-4">
                {teacherCourses.map((course) => (
                  <div key={course.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{course.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{course.schedule}</p>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {course.enrolled} students
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                        <div
                          className="bg-primary h-2 rounded-full"
                          style={{ width: `${(course.enrolled / course.capacity) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">
                        {Math.round((course.enrolled / course.capacity) * 100)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Assignments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Assignments</h2>
                <button className="btn-secondary">Create New</button>
              </div>
              <div className="space-y-4">
                {teacherAssignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{assignment.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{assignment.courseName}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        assignment.status === 'pending' ? 'bg-accent/10 text-accent' :
                        assignment.status === 'submitted' ? 'bg-warning/10 text-warning' :
                        'bg-success/10 text-success'
                      }`}>
                        {assignment.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      Due: {new Date(assignment.dueDate).toLocaleDateString()}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card lg:col-span-2"
            >
              <h2 className="text-2xl font-bold mb-6">Quick Actions</h2>
              <div className="grid md:grid-cols-3 gap-4">
                <button className="p-6 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors text-left">
                  <Upload className="w-8 h-8 text-primary mb-3" />
                  <h3 className="font-semibold mb-1">Upload Materials</h3>
                  <p className="text-sm text-gray-600">Add course materials and resources</p>
                </button>
                <button className="p-6 bg-secondary/10 rounded-lg hover:bg-secondary/20 transition-colors text-left">
                  <FileText className="w-8 h-8 text-secondary mb-3" />
                  <h3 className="font-semibold mb-1">Create Assignment</h3>
                  <p className="text-sm text-gray-600">Set up new assignments for students</p>
                </button>
                <button className="p-6 bg-accent/10 rounded-lg hover:bg-accent/20 transition-colors text-left">
                  <Users className="w-8 h-8 text-accent mb-3" />
                  <h3 className="font-semibold mb-1">Manage Students</h3>
                  <p className="text-sm text-gray-600">View and manage student enrollments</p>
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
