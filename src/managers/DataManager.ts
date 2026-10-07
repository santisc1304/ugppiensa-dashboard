import { createClient, SupabaseClient } from '@supabase/supabase-js';

export class DataManager {
    private static supabase: SupabaseClient | null = null;
    private static cachedData: any = null;

    static initialize() {
        const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
        const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

        if (supabaseUrl && supabaseAnonKey) {
            this.supabase = createClient(supabaseUrl, supabaseAnonKey);
            console.log('Supabase client initialized');
        } else {
            console.warn('Supabase credentials missing. Falling back to offline snapshot.');
        }
    }

    static async fetchData() {
        if (this.cachedData) return this.cachedData;

        try {
            if (!this.supabase) throw new Error('Supabase not configured');
            
            // Call the public RPC function
            const { data, error } = await this.supabase.rpc('get_dashboard_aggregates');

            if (error) throw error;
            
            this.cachedData = data;
            console.log("Real-time Dashboard Data loaded:", this.cachedData);
            return this.cachedData;
        } catch (err) {
            console.error('Failed to fetch from Supabase, using local snapshot:', err);
            // Fallback to offline snapshot
            const response = await fetch('/assets/data/snapshot.json');
            if (response.ok) {
                this.cachedData = await response.json();
                return this.cachedData;
            }
            return null;
        }
    }
}
