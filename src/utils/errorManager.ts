import { NotificationTypeEnum } from '../types/notification.types';
import { ErrorEnum, ErrorNotificationEnum } from '../types/error.types';
import { getNotification } from './notification';

export function errorManager(error: string) {
  switch (error) {
    case ErrorEnum.InvalidData:
      getNotification(ErrorNotificationEnum.InvalidData, NotificationTypeEnum.error);
      break;
    case ErrorEnum.EmptyCart:
      getNotification(ErrorNotificationEnum.EmptyCart, NotificationTypeEnum.error);
      break;
    case ErrorEnum.AlreadyInFavorites:
      getNotification(ErrorNotificationEnum.AlreadyInFavorites, NotificationTypeEnum.error);
      break;
    case ErrorEnum.NotAuthorized:
      getNotification(ErrorNotificationEnum.NotAuthorized, NotificationTypeEnum.error);
      break;
    case ErrorEnum.UndefinedProduct:
      getNotification(ErrorNotificationEnum.UndefinedProduct, NotificationTypeEnum.error);
      break;
    case ErrorEnum.UserAlreadyExist:
      getNotification(ErrorNotificationEnum.UserAlreadyExist, NotificationTypeEnum.error);
      break;
    case ErrorEnum.TokenExpired:
      getNotification(ErrorNotificationEnum.TokenExpired, NotificationTypeEnum.error);
      break;
    case ErrorEnum.WrongLoginPassword:
      getNotification(ErrorNotificationEnum.WrongLoginPassword, NotificationTypeEnum.error);
      break;
    case ErrorEnum.UndefinedToken:
      getNotification(ErrorNotificationEnum.UndefinedToken, NotificationTypeEnum.error);
      break;
    default:
      getNotification(ErrorNotificationEnum.SomethingWentWrong, 'error');
  }
}
