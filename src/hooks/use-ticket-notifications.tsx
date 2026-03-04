import { useEffect, useRef, useCallback, useState } from "react";
import { toast } from "sonner";
import { Ticket, AlertTriangle, Clock } from "lucide-react";

const mockTickets = [
  { id: "#4821", title: "Servidor de e-mail fora do ar", priority: "Alta", category: "Infraestrutura" },
  { id: "#4822", title: "Erro no login do sistema ERP", priority: "Crítica", category: "Software" },
  { id: "#4823", title: "Impressora do 3º andar sem funcionar", priority: "Média", category: "Hardware" },
  { id: "#4824", title: "Lentidão na rede Wi-Fi", priority: "Alta", category: "Rede" },
  { id: "#4825", title: "Atualização do antivírus pendente", priority: "Baixa", category: "Segurança" },
  { id: "#4826", title: "Notebook não liga após atualização", priority: "Alta", category: "Hardware" },
  { id: "#4827", title: "Permissão negada no SharePoint", priority: "Média", category: "Software" },
  { id: "#4828", title: "VPN desconectando constantemente", priority: "Crítica", category: "Rede" },
];

export type TicketNotification = {
  id: string;
  title: string;
  priority: string;
  category: string;
  timestamp: Date;
  read: boolean;
};

export const priorityConfig: Record<string, { icon: typeof Ticket; color: string }> = {
  Crítica: { icon: AlertTriangle, color: "text-destructive" },
  Alta: { icon: AlertTriangle, color: "text-warning" },
  Média: { icon: Clock, color: "text-primary" },
  Baixa: { icon: Ticket, color: "text-muted-foreground" },
};

export function useTicketNotifications() {
  const indexRef = useRef(0);
  const [notifications, setNotifications] = useState<TicketNotification[]>([]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const showNotification = useCallback(() => {
    const ticket = mockTickets[indexRef.current % mockTickets.length];
    indexRef.current++;
    const config = priorityConfig[ticket.priority] || priorityConfig.Média;

    const newNotification: TicketNotification = {
      ...ticket,
      timestamp: new Date(),
      read: false,
    };

    setNotifications((prev) => [newNotification, ...prev]);

    toast(ticket.title, {
      description: `${ticket.id} · ${ticket.category} · Prioridade ${ticket.priority}`,
      icon: <config.icon className={`w-4 h-4 ${config.color}`} />,
      duration: 5000,
      action: { label: "Ver", onClick: () => {} },
    });
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  }, []);

  const markAsRead = useCallback((id: string, timestamp: Date) => {
    setNotifications((prev) =>
      prev.map((n) =>
        n.id === id && n.timestamp === timestamp ? { ...n, read: true } : n
      )
    );
  }, []);

  const clearAll = useCallback(() => setNotifications([]), []);

  useEffect(() => {
    const firstTimeout = setTimeout(() => {
      showNotification();
      const interval = setInterval(() => {
        showNotification();
      }, 15000 + Math.random() * 15000);
      return () => clearInterval(interval);
    }, 8000);
    return () => clearTimeout(firstTimeout);
  }, [showNotification]);

  return { notifications, unreadCount, showNotification, markAllRead, markAsRead, clearAll };
}
