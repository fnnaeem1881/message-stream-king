import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';

interface Profile {
  id: string;
  user_id: string;
  display_name: string | null;
  email: string | null;
  plan: string;
  avatar_url: string | null;
}

interface ApiCredentials {
  id: string;
  app_id: string;
  key_value: string;
  secret_value: string;
  cluster_name: string;
}

interface Channel {
  id: string;
  name: string;
  type: string;
  connections: number;
  messages: number;
  is_active: boolean;
  created_at: string;
}

interface UserStats {
  total_connections: number;
  messages_this_month: number;
  active_channels: number;
  uptime: number;
}

export const useDashboardData = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState<Profile | null>(null);
  const [credentials, setCredentials] = useState<ApiCredentials | null>(null);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [stats, setStats] = useState<UserStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchDashboardData();
    }
  }, [user]);

  const fetchDashboardData = async () => {
    if (!user) return;

    try {
      setLoading(true);

      // Fetch profile
      const { data: profileData } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', user.id)
        .single();

      // Fetch API credentials
      const { data: credentialsData } = await supabase
        .from('api_credentials')
        .select('*')
        .eq('user_id', user.id)
        .single();

      // Fetch channels
      const { data: channelsData } = await supabase
        .from('channels')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      // Fetch stats
      const { data: statsData } = await supabase
        .from('user_stats')
        .select('*')
        .eq('user_id', user.id)
        .single();

      setProfile(profileData);
      setCredentials(credentialsData);
      setChannels(channelsData || []);
      setStats(statsData);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const createChannel = async (name: string, type: string) => {
    if (!user) return;

    const { data, error } = await supabase
      .from('channels')
      .insert({
        user_id: user.id,
        name,
        type
      })
      .select()
      .single();

    if (!error && data) {
      setChannels(prev => [data, ...prev]);
      
      // Update stats
      if (stats) {
        await supabase
          .from('user_stats')
          .update({ active_channels: stats.active_channels + 1 })
          .eq('user_id', user.id);
        
        setStats(prev => prev ? { ...prev, active_channels: prev.active_channels + 1 } : null);
      }
    }

    return { data, error };
  };

  const deleteChannel = async (channelId: string) => {
    const { error } = await supabase
      .from('channels')
      .delete()
      .eq('id', channelId);

    if (!error) {
      setChannels(prev => prev.filter(ch => ch.id !== channelId));
      
      // Update stats
      if (stats) {
        await supabase
          .from('user_stats')
          .update({ active_channels: Math.max(0, stats.active_channels - 1) })
          .eq('user_id', user.id);
        
        setStats(prev => prev ? { ...prev, active_channels: Math.max(0, prev.active_channels - 1) } : null);
      }
    }

    return { error };
  };

  return {
    profile,
    credentials,
    channels,
    stats,
    loading,
    createChannel,
    deleteChannel,
    refetch: fetchDashboardData
  };
};