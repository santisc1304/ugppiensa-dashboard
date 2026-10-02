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
            
            // Example live query
            const { data, error } = await this.supabase
                .from('telemetria_partidas')
                .select('*');

            if (error) throw error;
            
            this.cachedData = this.processData(data);
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

    private static processData(rawData: any[]) {
        // Calculate aggregations like total sessions, users, precision, etc.
        // For the sake of this prototype, we return the calculated stats
        // if rawData is available, otherwise return default snapshot structure
        return {
            totalSessions: rawData.length,
            // ... more aggregations
        };
    }
}
