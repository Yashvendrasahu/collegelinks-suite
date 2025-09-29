export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          email: string
          full_name: string | null
          role: 'student' | 'faculty' | 'recruiter' | 'placement_cell'
          department: string | null
          phone: string | null
          college_id: string | null
          avatar_url: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          email: string
          full_name?: string | null
          role: 'student' | 'faculty' | 'recruiter' | 'placement_cell'
          department?: string | null
          phone?: string | null
          college_id?: string | null
          avatar_url?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          email?: string
          full_name?: string | null
          role?: 'student' | 'faculty' | 'recruiter' | 'placement_cell'
          department?: string | null
          phone?: string | null
          college_id?: string | null
          avatar_url?: string | null
        }
      }
      opportunities: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          title: string
          company: string
          description: string
          location: string
          type: 'internship' | 'job' | 'both'
          stipend: number | null
          duration: string | null
          deadline: string
          skills: string[]
          featured: boolean
          rating: number | null
          posted_by: string
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          title: string
          company: string
          description: string
          location: string
          type: 'internship' | 'job' | 'both'
          stipend?: number | null
          duration?: string | null
          deadline: string
          skills: string[]
          featured?: boolean
          rating?: number | null
          posted_by: string
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          title?: string
          company?: string
          description?: string
          location?: string
          type?: 'internship' | 'job' | 'both'
          stipend?: number | null
          duration?: string | null
          deadline?: string
          skills?: string[]
          featured?: boolean
          rating?: number | null
          posted_by?: string
        }
      }
      applications: {
        Row: {
          id: string
          created_at: string
          updated_at: string
          student_id: string
          opportunity_id: string
          status: 'pending' | 'approved' | 'rejected' | 'interview' | 'selected'
          applied_date: string
          notes: string | null
        }
        Insert: {
          id?: string
          created_at?: string
          updated_at?: string
          student_id: string
          opportunity_id: string
          status?: 'pending' | 'approved' | 'rejected' | 'interview' | 'selected'
          applied_date?: string
          notes?: string | null
        }
        Update: {
          id?: string
          created_at?: string
          updated_at?: string
          student_id?: string
          opportunity_id?: string
          status?: 'pending' | 'approved' | 'rejected' | 'interview' | 'selected'
          applied_date?: string
          notes?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}