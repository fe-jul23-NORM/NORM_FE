import { toast } from 'react-toastify';
import { NotificationType } from '../types/notification.types';

export function getNotification(text: string, type = 'success'): void {
  toast[type as NotificationType](text);
}
