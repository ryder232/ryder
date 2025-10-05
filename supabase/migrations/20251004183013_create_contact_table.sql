/*
  # Create Contact Table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key) - Unique identifier for each contact message
      - `name` (text, not null) - Name of the person contacting
      - `email` (text, not null) - Email address of the person
      - `message` (text, not null) - Message content
      - `created_at` (timestamptz) - Timestamp when message was sent
  
  2. Security
    - Enable RLS on `contacts` table
    - Add policy for anyone to insert contact messages (public access)
    - No read access needed for public users
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contacts
  FOR INSERT
  TO anon
  WITH CHECK (true);
