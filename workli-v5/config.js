// ⚠️ קובץ הגדרות — כאן תכניס את הפרטים מ-Supabase
// ההדרכה המלאה: ראה את הקובץ SETUP.md

const SUPABASE_URL = 'https://kglzlykzzfbvebsitlgd.supabase.co';
const SUPABASE_KEY = 'sb_publishable_f4wYr7PA4zfs7HbnofRKmQ_ZDIO72hU';

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
