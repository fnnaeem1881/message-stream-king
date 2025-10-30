import { 
  Home, 
  BookOpen, 
  Key, 
  Zap, 
  BarChart3, 
  Terminal, 
  AlertCircle, 
  Webhook, 
  Users, 
  Settings 
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const menuItems = [
  { id: "overview", label: "Overview", icon: Home },
  { id: "getting-started", label: "Getting Started", icon: BookOpen },
  { id: "app-keys", label: "App Keys", icon: Key },
  { id: "functions", label: "Functions", icon: Zap },
  { id: "stats", label: "Stats", icon: BarChart3 },
  { id: "debug-console", label: "Debug Console", icon: Terminal },
  { id: "error-logs", label: "Error Logs", icon: AlertCircle },
  { id: "webhooks", label: "Webhooks", icon: Webhook },
  { id: "collaborators", label: "Collaborators", icon: Users },
  { id: "app-settings", label: "App Settings", icon: Settings },
];

export const DashboardSidebar = ({ activeTab, onTabChange }: DashboardSidebarProps) => {
  return (
    <aside className="w-64 bg-white dark:bg-slate-800 border-r border-slate-200 dark:border-slate-700 min-h-[calc(100vh-64px)]">
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400"
                  : "text-slate-700 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700"
              )}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </button>
          );
        })}
      </nav>
    </aside>
  );
};
