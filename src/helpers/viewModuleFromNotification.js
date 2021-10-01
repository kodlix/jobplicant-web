

import { NotificationType } from "enum/enum";

export const ViewModuleFromNotification = (notification, viewFrom) => {
    switch (notification?.notificationType?.name) {
        case NotificationType.BLOG: {
            window.location.href = viewFrom === 'admin' ? `${window.location.origin}/admin/blogs/detail/${notification.entityId}` : viewFrom === 'customer' ? `${window.location.origin}/blog/view/${notification.entityId}` : `${window.location.origin}/blogs/${notification.entityId}`;
            return;
        }
        case NotificationType.EVENT: {
            window.location.href = viewFrom === 'admin' ? `${window.location.origin}/admin/events/detail/${notification.entityId}` : viewFrom === 'customer' ? `${window.location.origin}/events/view/${notification.entityId}` : `${window.location.origin}/event/${notification.entityId}`;
            return;
        }
        case NotificationType.JOB: {
            window.location.href = viewFrom === 'admin' ? `${window.location.origin}/admin/jobvacancy/detail/${notification.entityId}` : `${window.location.origin}/jobvacancy/view/${notification.entityId}`;
            return;
        }
        case NotificationType.ADVERT: {
            window.location.href = viewFrom === 'admin' ? `${window.location.origin}/admin/advert/view/${notification.entityId}` : `${window.location.origin}/advert/view/${notification.entityId}`;
            return;
        }
        default: {
            window.location.href = `${window.location.origin}/notifications/view/${notification.id}`;
            return;
        }
    }
}