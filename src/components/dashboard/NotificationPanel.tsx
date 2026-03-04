import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";
import { Bell, CheckCheck, Trash2 } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { type TicketNotification, priorityConfig } from "@/hooks/use-ticket-notifications";
import { cn } from "@/lib/utils";

interface NotificationPanelProps {
  notifications: TicketNotification[];
  unreadCount: number;
  onMarkAllRead: () => void;
  onMarkAsRead: (id: string, timestamp: Date) => void;
  onClearAll: () => void;
}

const NotificationPanel = ({
  notifications,
  unreadCount,
  onMarkAllRead,
  onMarkAsRead,
  onClearAll,
}: NotificationPanelProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center rounded-full bg-destructive text-destructive-foreground text-[10px] font-bold animate-pulse-glow">
              {unreadCount > 9 ? "9+" : unreadCount}
            </span>
          )}
          {unreadCount === 0 && notifications.length > 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-muted-foreground/40 rounded-full" />
          )}
          {notifications.length === 0 && (
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-primary rounded-full animate-pulse-glow" />
          )}
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:w-96 p-0 bg-card border-border">
        <SheetHeader className="px-5 pt-5 pb-3 border-b border-border">
          <div className="flex items-center justify-between">
            <SheetTitle className="text-sm font-bold text-foreground">
              Notificações
              {unreadCount > 0 && (
                <span className="ml-2 px-2 py-0.5 rounded-full bg-primary/15 text-primary text-[10px] font-semibold">
                  {unreadCount} nova{unreadCount > 1 ? "s" : ""}
                </span>
              )}
            </SheetTitle>
            <div className="flex items-center gap-1">
              {unreadCount > 0 && (
                <button
                  onClick={onMarkAllRead}
                  className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
                  title="Marcar todas como lidas"
                >
                  <CheckCheck className="w-4 h-4" />
                </button>
              )}
              {notifications.length > 0 && (
                <button
                  onClick={onClearAll}
                  className="p-1.5 rounded-md hover:bg-destructive/10 transition-colors text-muted-foreground hover:text-destructive"
                  title="Limpar tudo"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </SheetHeader>

        <ScrollArea className="h-[calc(100vh-80px)]">
          {notifications.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-muted-foreground">
              <Bell className="w-10 h-10 mb-3 opacity-30" />
              <p className="text-sm font-medium">Nenhuma notificação</p>
              <p className="text-xs mt-1">Novos chamados aparecerão aqui</p>
            </div>
          ) : (
            <div className="divide-y divide-border">
              {notifications.map((n, i) => {
                const config = priorityConfig[n.priority] || priorityConfig.Média;
                const Icon = config.icon;
                return (
                  <button
                    key={`${n.id}-${i}`}
                    onClick={() => onMarkAsRead(n.id, n.timestamp)}
                    className={cn(
                      "w-full text-left px-5 py-3.5 hover:bg-secondary/50 transition-colors",
                      !n.read && "bg-primary/5"
                    )}
                  >
                    <div className="flex gap-3">
                      <div className={cn("mt-0.5 p-1.5 rounded-lg bg-secondary", config.color)}>
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-semibold text-foreground truncate">
                            {n.title}
                          </span>
                          {!n.read && (
                            <span className="w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                          )}
                        </div>
                        <p className="text-[11px] text-muted-foreground mt-0.5">
                          {n.id} · {n.category} · Prioridade {n.priority}
                        </p>
                        <p className="text-[10px] text-muted-foreground/70 mt-1">
                          {formatDistanceToNow(n.timestamp, { addSuffix: true, locale: ptBR })}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
};

export default NotificationPanel;
