import { Task } from './models/Task';

export const tasks: Task[] = [
  { id: 1, title: "Design Main Page", status: "In Progress", progress: 60, dueDate: "2025-07-15", users: [101, 102] },
  { id: 2, title: "Setup DB", status: "In Progress", progress: 39, dueDate: "2025-07-20", users: [103, 104] },
  { id: 3, title: "Build Auth API", status: "Completed", progress: 100, dueDate: "2025-07-10", users: [105, 106] },
  { id: 4, title: "Test UI", status: "In Progress", progress: 30, dueDate: "2025-07-18", users: [107, 108] },
  { id: 5, title: "Write Docs", status: "Not Started", progress: 0, dueDate: "2025-07-25", users: [109] },
  { id: 6, title: "Optimize Server", status: "In Progress", progress: 45, dueDate: "2025-07-22", users: [110, 111] },
  { id: 7, title: "Create Mobile App", status: "Not Started", progress: 0, dueDate: "2025-08-01", users: [101, 112] },
  { id: 8, title: "Setup CI/CD", status: "In Progress", progress: 80, dueDate: "2025-07-12", users: [113, 114] },
];
