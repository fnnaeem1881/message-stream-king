-- Create functions table
CREATE TABLE public.functions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  name TEXT NOT NULL,
  runtime TEXT NOT NULL,
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.functions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own functions"
ON public.functions FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own functions"
ON public.functions FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own functions"
ON public.functions FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own functions"
ON public.functions FOR DELETE
USING (auth.uid() = user_id);

-- Create webhooks table
CREATE TABLE public.webhooks (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  url TEXT NOT NULL,
  events TEXT[] DEFAULT '{}',
  status TEXT DEFAULT 'active',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.webhooks ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own webhooks"
ON public.webhooks FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own webhooks"
ON public.webhooks FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own webhooks"
ON public.webhooks FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own webhooks"
ON public.webhooks FOR DELETE
USING (auth.uid() = user_id);

-- Create collaborators table
CREATE TABLE public.collaborators (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  email TEXT NOT NULL,
  role TEXT NOT NULL,
  status TEXT DEFAULT 'invited',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.collaborators ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own collaborators"
ON public.collaborators FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own collaborators"
ON public.collaborators FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own collaborators"
ON public.collaborators FOR UPDATE
USING (auth.uid() = user_id);

CREATE POLICY "Users can delete their own collaborators"
ON public.collaborators FOR DELETE
USING (auth.uid() = user_id);

-- Create app_settings table
CREATE TABLE public.app_settings (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL UNIQUE,
  app_name TEXT DEFAULT 'My Pusher App',
  ssl_enabled BOOLEAN DEFAULT true,
  webhooks_enabled BOOLEAN DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.app_settings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can view their own settings"
ON public.app_settings FOR SELECT
USING (auth.uid() = user_id);

CREATE POLICY "Users can insert their own settings"
ON public.app_settings FOR INSERT
WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own settings"
ON public.app_settings FOR UPDATE
USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_functions_updated_at
BEFORE UPDATE ON public.functions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_webhooks_updated_at
BEFORE UPDATE ON public.webhooks
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_collaborators_updated_at
BEFORE UPDATE ON public.collaborators
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_app_settings_updated_at
BEFORE UPDATE ON public.app_settings
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();