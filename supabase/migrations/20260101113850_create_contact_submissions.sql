/*
  # Create contact_submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `name` (text) - Contact name
      - `email` (text) - Contact email
      - `company` (text) - Company name (optional)
      - `project_type` (text) - Type of project inquiry
      - `budget` (text) - Budget range
      - `timeline` (text) - Expected timeline
      - `message` (text) - Detailed project description
      - `submitted_at` (timestamptz) - Submission timestamp
      - `created_at` (timestamptz) - Record creation time
  
  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy to allow anyone to insert (public form submissions)
    - No read access for public users (privacy protection)
    
  3. Notes
    - This table stores contact form submissions from the portfolio website
    - Only authenticated admins should be able to read submissions
    - Public users can only submit (insert) new contact forms
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  company text DEFAULT '',
  project_type text NOT NULL,
  budget text DEFAULT 'Not specified',
  timeline text DEFAULT 'Flexible',
  message text NOT NULL,
  submitted_at timestamptz NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read submissions"
  ON contact_submissions
  FOR SELECT
  TO authenticated
  USING (true);
