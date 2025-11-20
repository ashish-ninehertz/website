export interface User {
  id: string;
  email: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  avatar?: string;
  createdAt: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  teacherName: string;
  schedule: string;
  capacity: number;
  enrolled: number;
  image?: string;
  materials?: CourseMaterial[];
  createdAt: string;
}

export interface CourseMaterial {
  id: string;
  courseId: string;
  title: string;
  type: 'pdf' | 'video' | 'link' | 'document';
  url: string;
  uploadedAt: string;
}

export interface Grade {
  id: string;
  studentId: string;
  courseId: string;
  courseName: string;
  grade: string;
  percentage: number;
  semester: string;
  createdAt: string;
}

export interface Assignment {
  id: string;
  courseId: string;
  courseName: string;
  title: string;
  description: string;
  dueDate: string;
  status: 'pending' | 'submitted' | 'graded';
  grade?: string;
  createdAt: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: 'academic' | 'sports' | 'cultural' | 'holiday' | 'meeting';
  createdAt: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  author: string;
  image?: string;
  category: 'announcement' | 'achievement' | 'event' | 'general';
  publishedAt: string;
  createdAt: string;
}
