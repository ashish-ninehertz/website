import { motion } from 'framer-motion';
import { BookOpen, FileText, Award, Calendar, TrendingUp } from 'lucide-react';
import { MOCK_COURSES, MOCK_GRADES, MOCK_ASSIGNMENTS, MOCK_EVENTS } from '../lib/mockData';

export default function StudentPortalPage() {
  const studentId = '5'; // Mock student ID

  const studentCourses = MOCK_COURSES.slice(0, 3);
  const studentGrades = MOCK_GRADES.filter(g => g.studentId === studentId);
  const studentAssignments = MOCK_ASSIGNMENTS.slice(0, 3);
  const upcomingEvents = MOCK_EVENTS.slice(0, 3);

  const calculateGPA = () => {
    const gradePoints: Record<string, number> = {
      'A': 4.0, 'A-': 3.7, 'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7, 'D': 1.0, 'F': 0.0
    };
    const total = studentGrades.reduce((sum, g) => sum + (gradePoints[g.grade] || 0), 0);
    return (total / studentGrades.length).toFixed(2);
  };

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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Student Portal</h1>
            <p className="text-xl text-white/90">Welcome back, Alice Wilson!</p>
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
                  <p className="text-gray-500 text-sm mb-1">Current GPA</p>
                  <p className="text-3xl font-bold text-primary">{calculateGPA()}</p>
                </div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-primary" />
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
                  <p className="text-gray-500 text-sm mb-1">Enrolled Courses</p>
                  <p className="text-3xl font-bold text-primary">{studentCourses.length}</p>
                </div>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-secondary" />
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
                  <p className="text-gray-500 text-sm mb-1">Pending Assignments</p>
                  <p className="text-3xl font-bold text-accent">
                    {studentAssignments.filter(a => a.status === 'pending').length}
                  </p>
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
                  <p className="text-gray-500 text-sm mb-1">Upcoming Events</p>
                  <p className="text-3xl font-bold text-success">{upcomingEvents.length}</p>
                </div>
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-success" />
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
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                {studentCourses.map((course) => (
                  <div key={course.id} className="p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <h3 className="font-semibold mb-1">{course.title}</h3>
                    <p className="text-sm text-gray-600 mb-2">{course.teacherName}</p>
                    <p className="text-sm text-gray-500">{course.schedule}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recent Grades */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Recent Grades</h2>
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                {studentGrades.map((grade) => (
                  <div key={grade.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold">{grade.courseName}</h3>
                      <span className="text-2xl font-bold text-primary">{grade.grade}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span>{grade.semester}</span>
                      <span>{grade.percentage}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Assignments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Assignments</h2>
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                {studentAssignments.map((assignment) => (
                  <div key={assignment.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{assignment.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{assignment.courseName}</p>
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        assignment.status === 'pending' ? 'bg-accent/10 text-accent' :
                        assignment.status === 'submitted' ? 'bg-primary/10 text-primary' :
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

            {/* Upcoming Events */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="card"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold">Upcoming Events</h2>
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{event.title}</h3>
                        <p className="text-sm text-gray-600 mb-2">{event.location}</p>
                      </div>
                      <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium capitalize">
                        {event.type}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">
                      {new Date(event.date).toLocaleDateString()} at {event.time}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
