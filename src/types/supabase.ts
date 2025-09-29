export interface Profile {
  id: string;
  created_at: string;
  updated_at: string;
  email: string;
  full_name: string | null;
  role: 'student' | 'faculty' | 'recruiter' | 'placement_cell';
  department: string | null;
  phone: string | null;
  college_id: string | null;
  avatar_url: string | null;
}

export interface Opportunity {
  id: string;
  created_at: string;
  updated_at: string;
  title: string;
  company: string;
  description: string;
  location: string;
  type: 'internship' | 'job' | 'both';
  stipend: number | null;
  duration: string | null;
  deadline: string;
  skills: string[];
  featured: boolean;
  rating: number | null;
  posted_by: string;
}

export interface Application {
  id: string;
  created_at: string;
  updated_at: string;
  student_id: string;
  opportunity_id: string;
  status: 'pending' | 'approved' | 'rejected' | 'interview' | 'selected';
  applied_date: string;
  notes: string | null;
}