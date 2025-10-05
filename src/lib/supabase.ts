// Mock Supabase client - replace with actual implementation
export const supabase = {
  from: (_table: string) => ({
    insert: (_data: any[]) => Promise.resolve({ error: null, data: null })
  })
};
