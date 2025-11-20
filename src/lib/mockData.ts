import { User, Course, Grade, Assignment, Event, NewsArticle } from '../types';

export const MOCK_USERS: User[] = [
  {
    id: '1',
    email: 'admin@school.edu',
    name: 'Dr. Sarah Johnson',
    role: 'admin',
    createdAt: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    email: 'john.smith@school.edu',
    name: 'Prof. John Smith',
    role: 'teacher',
    createdAt: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    email: 'emily.davis@school.edu',
    name: 'Dr. Emily Davis',
    role: 'teacher',
    createdAt: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    email: 'michael.brown@school.edu',
    name: 'Prof. Michael Brown',
    role: 'teacher',
    createdAt: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    email: 'alice.wilson@student.school.edu',
    name: 'Alice Wilson',
    role: 'student',
    createdAt: '2024-01-05T00:00:00Z'
  },
  {
    id: '6',
    email: 'bob.martinez@student.school.edu',
    name: 'Bob Martinez',
    role: 'student',
    createdAt: '2024-01-06T00:00:00Z'
  },
  {
    id: '7',
    email: 'carol.anderson@student.school.edu',
    name: 'Carol Anderson',
    role: 'student',
    createdAt: '2024-01-07T00:00:00Z'
  }
];

export const MOCK_COURSES: Course[] = [
  {
    id: '1',
    title: 'Introduction to Computer Science',
    description: 'Learn the fundamentals of programming, algorithms, and data structures. This course covers Python, problem-solving techniques, and computational thinking.',
    teacherId: '2',
    teacherName: 'Prof. John Smith',
    schedule: 'Mon, Wed, Fri 9:00 AM - 10:30 AM',
    capacity: 30,
    enrolled: 24,
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-10T00:00:00Z'
  },
  {
    id: '2',
    title: 'Advanced Mathematics',
    description: 'Explore calculus, linear algebra, and differential equations. Develop strong analytical and problem-solving skills for STEM fields.',
    teacherId: '3',
    teacherName: 'Dr. Emily Davis',
    schedule: 'Tue, Thu 10:00 AM - 11:30 AM',
    capacity: 25,
    enrolled: 22,
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-11T00:00:00Z'
  },
  {
    id: '3',
    title: 'English Literature',
    description: 'Study classic and contemporary literature, develop critical analysis skills, and explore diverse literary traditions and cultural contexts.',
    teacherId: '4',
    teacherName: 'Prof. Michael Brown',
    schedule: 'Mon, Wed 2:00 PM - 3:30 PM',
    capacity: 28,
    enrolled: 26,
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-12T00:00:00Z'
  },
  {
    id: '4',
    title: 'Physics: Mechanics and Thermodynamics',
    description: 'Understand the laws of motion, energy, heat, and their applications. Includes laboratory experiments and real-world problem solving.',
    teacherId: '2',
    teacherName: 'Prof. John Smith',
    schedule: 'Tue, Thu 1:00 PM - 2:30 PM',
    capacity: 24,
    enrolled: 20,
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-13T00:00:00Z'
  },
  {
    id: '5',
    title: 'World History',
    description: 'Journey through major historical events, civilizations, and cultural movements that shaped our modern world.',
    teacherId: '3',
    teacherName: 'Dr. Emily Davis',
    schedule: 'Mon, Wed, Fri 11:00 AM - 12:00 PM',
    capacity: 32,
    enrolled: 28,
    image: 'https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=800',
    createdAt: '2024-01-14T00:00:00Z'
  }
];

export const MOCK_GRADES: Grade[] = [
  {
    id: '1',
    studentId: '5',
    courseId: '1',
    courseName: 'Introduction to Computer Science',
    grade: 'A',
    percentage: 92,
    semester: 'Fall 2024',
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '2',
    studentId: '5',
    courseId: '2',
    courseName: 'Advanced Mathematics',
    grade: 'B+',
    percentage: 87,
    semester: 'Fall 2024',
    createdAt: '2024-01-21T00:00:00Z'
  },
  {
    id: '3',
    studentId: '5',
    courseId: '3',
    courseName: 'English Literature',
    grade: 'A-',
    percentage: 90,
    semester: 'Fall 2024',
    createdAt: '2024-01-22T00:00:00Z'
  },
  {
    id: '4',
    studentId: '6',
    courseId: '1',
    courseName: 'Introduction to Computer Science',
    grade: 'B',
    percentage: 85,
    semester: 'Fall 2024',
    createdAt: '2024-01-23T00:00:00Z'
  },
  {
    id: '5',
    studentId: '6',
    courseId: '4',
    courseName: 'Physics: Mechanics and Thermodynamics',
    grade: 'A',
    percentage: 94,
    semester: 'Fall 2024',
    createdAt: '2024-01-24T00:00:00Z'
  }
];

export const MOCK_ASSIGNMENTS: Assignment[] = [
  {
    id: '1',
    courseId: '1',
    courseName: 'Introduction to Computer Science',
    title: 'Python Programming Project',
    description: 'Create a command-line application that implements a data structure of your choice.',
    dueDate: '2024-02-15T23:59:00Z',
    status: 'pending',
    createdAt: '2024-01-25T00:00:00Z'
  },
  {
    id: '2',
    courseId: '2',
    courseName: 'Advanced Mathematics',
    title: 'Calculus Problem Set',
    description: 'Complete problems 1-20 from Chapter 5. Show all work and explain your reasoning.',
    dueDate: '2024-02-10T23:59:00Z',
    status: 'submitted',
    createdAt: '2024-01-26T00:00:00Z'
  },
  {
    id: '3',
    courseId: '3',
    courseName: 'English Literature',
    title: 'Literary Analysis Essay',
    description: 'Write a 5-page analysis of the themes in the assigned novel. Include citations.',
    dueDate: '2024-02-20T23:59:00Z',
    status: 'graded',
    grade: 'A-',
    createdAt: '2024-01-27T00:00:00Z'
  },
  {
    id: '4',
    courseId: '4',
    courseName: 'Physics: Mechanics and Thermodynamics',
    title: 'Lab Report: Pendulum Motion',
    description: 'Document your experimental findings and analyze the results.',
    dueDate: '2024-02-12T23:59:00Z',
    status: 'pending',
    createdAt: '2024-01-28T00:00:00Z'
  },
  {
    id: '5',
    courseId: '5',
    courseName: 'World History',
    title: 'Research Paper: Industrial Revolution',
    description: 'Investigate the social and economic impacts of the Industrial Revolution.',
    dueDate: '2024-02-25T23:59:00Z',
    status: 'pending',
    createdAt: '2024-01-29T00:00:00Z'
  }
];

export const MOCK_EVENTS: Event[] = [
  {
    id: '1',
    title: 'Spring Semester Begins',
    description: 'Welcome back students! First day of classes for the Spring 2024 semester.',
    date: '2024-02-01',
    time: '8:00 AM',
    location: 'Campus Wide',
    type: 'academic',
    createdAt: '2024-01-15T00:00:00Z'
  },
  {
    id: '2',
    title: 'Science Fair',
    description: 'Annual science fair showcasing student research projects and experiments.',
    date: '2024-02-14',
    time: '10:00 AM - 4:00 PM',
    location: 'Main Auditorium',
    type: 'academic',
    createdAt: '2024-01-16T00:00:00Z'
  },
  {
    id: '3',
    title: 'Basketball Championship',
    description: 'Final game of the season. Come support our team!',
    date: '2024-02-18',
    time: '6:00 PM',
    location: 'Sports Complex',
    type: 'sports',
    createdAt: '2024-01-17T00:00:00Z'
  },
  {
    id: '4',
    title: 'Cultural Festival',
    description: 'Celebrate diversity with performances, food, and art from around the world.',
    date: '2024-02-22',
    time: '12:00 PM - 8:00 PM',
    location: 'Campus Quad',
    type: 'cultural',
    createdAt: '2024-01-18T00:00:00Z'
  },
  {
    id: '5',
    title: 'Presidents Day Holiday',
    description: 'No classes. Campus offices closed.',
    date: '2024-02-19',
    time: 'All Day',
    location: 'Campus Wide',
    type: 'holiday',
    createdAt: '2024-01-19T00:00:00Z'
  },
  {
    id: '6',
    title: 'Parent-Teacher Conference',
    description: 'Meet with teachers to discuss student progress and goals.',
    date: '2024-02-28',
    time: '3:00 PM - 7:00 PM',
    location: 'Various Classrooms',
    type: 'meeting',
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '7',
    title: 'Career Day',
    description: 'Professionals from various industries share insights about their careers.',
    date: '2024-03-05',
    time: '9:00 AM - 3:00 PM',
    location: 'Conference Center',
    type: 'academic',
    createdAt: '2024-01-21T00:00:00Z'
  }
];

export const MOCK_NEWS: NewsArticle[] = [
  {
    id: '1',
    title: 'Students Win National Robotics Competition',
    excerpt: 'Our robotics team brought home first place at the National STEM Challenge.',
    content: 'We are thrilled to announce that our school\'s robotics team has won first place at the prestigious National STEM Challenge. The team, consisting of 8 dedicated students, competed against 150 teams from across the country. Their innovative robot design and flawless performance in the competition rounds impressed judges and spectators alike. This victory is a testament to the hard work, creativity, and technical skills of our students, as well as the excellent guidance provided by our STEM faculty.',
    author: 'Dr. Sarah Johnson',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'achievement',
    publishedAt: '2024-01-25T00:00:00Z',
    createdAt: '2024-01-25T00:00:00Z'
  },
  {
    id: '2',
    title: 'New Library Wing Opens Next Month',
    excerpt: 'State-of-the-art learning spaces and digital resources coming soon.',
    content: 'We are excited to announce the opening of our new library wing, scheduled for February 15th. This expansion includes modern study spaces, collaborative work areas, a digital media lab, and an expanded collection of books and resources. The new wing features comfortable seating, natural lighting, and the latest technology to support student learning. A grand opening ceremony will be held on opening day, and all students, faculty, and families are invited to attend.',
    author: 'Admin Team',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'announcement',
    publishedAt: '2024-01-22T00:00:00Z',
    createdAt: '2024-01-22T00:00:00Z'
  },
  {
    id: '3',
    title: 'Spring Musical Auditions Announced',
    excerpt: 'Join us for this year\'s production of "The Sound of Music".',
    content: 'The Drama Department is thrilled to announce auditions for our spring musical production of "The Sound of Music". Auditions will be held on February 5th and 6th in the Main Auditorium. We are looking for talented singers, actors, and dancers to bring this beloved classic to life. No prior experience is necessary - just enthusiasm and a love for performing! Rehearsals will begin in mid-February, with performances scheduled for April 12-14. Sign up sheets are available in the Drama office.',
    author: 'Prof. Michael Brown',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'event',
    publishedAt: '2024-01-20T00:00:00Z',
    createdAt: '2024-01-20T00:00:00Z'
  },
  {
    id: '4',
    title: 'School Implements New Sustainability Initiative',
    excerpt: 'Going green with solar panels and recycling programs.',
    content: 'As part of our commitment to environmental responsibility, the school is launching a comprehensive sustainability initiative. Solar panels will be installed on the main building roof, expected to reduce our energy consumption by 40%. We are also expanding our recycling program to include composting in the cafeteria and implementing a campus-wide plastic reduction policy. Student volunteers are needed to help with these initiatives. Join the Green Team to make a difference!',
    author: 'Dr. Sarah Johnson',
    image: 'https://images.pexels.com/photos/1181216/pexels-photo-1181216.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'announcement',
    publishedAt: '2024-01-18T00:00:00Z',
    createdAt: '2024-01-18T00:00:00Z'
  },
  {
    id: '5',
    title: 'Alumni Spotlight: Tech Entrepreneur Returns',
    excerpt: 'Former student shares journey from classroom to Silicon Valley.',
    content: 'We were honored to welcome back alumna Jennifer Chen, Class of 2015, who is now a successful tech entrepreneur in Silicon Valley. Jennifer spoke to current students about her journey from our computer science program to founding her own AI startup. She emphasized the importance of perseverance, continuous learning, and the strong foundation she received at our school. Jennifer also announced a new scholarship fund to support students pursuing careers in technology.',
    author: 'Admin Team',
    image: 'https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=800',
    category: 'achievement',
    publishedAt: '2024-01-15T00:00:00Z',
    createdAt: '2024-01-15T00:00:00Z'
  }
];

export const USE_MOCK_DATA = import.meta.env.VITE_USE_MOCK_DATA === 'true';
