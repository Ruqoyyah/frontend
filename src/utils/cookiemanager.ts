import { IEvent } from "@/models/index.model";

export default class CookieManager {
  static getCookie(cookieName: string) {
    const b = document.cookie.match(`(^|;)\\s*${cookieName}\\s*=\\s*([^;]+)`);
    return b ? b.pop() : "";
  }

  static setCookie(
    cookieName: string,
    cookieValue: any,
    hourToExpire?: number
  ) {
    if (
      hourToExpire !== undefined &&
      hourToExpire !== null &&
      hourToExpire !== 0
    ) {
      const date = new Date();
      date.setTime(date.getTime() + hourToExpire * 60 * 60 * 1000);
      document.cookie = `${cookieName} = ${cookieValue}; expires = ${date.toUTCString()}; path=/;`;
    } else {
      document.cookie = `${cookieName} = ${cookieValue}; path=/;`;
    }
  }

  static deleteCookie(cookieName: string) {
    document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
  }
}
export function findClosestEvent(events: IEvent[]): number {
  const now = new Date();
  let closestEvent: IEvent | null = null;
  let minDaysDifference: number | null = null;

  for (const event of events) {
    const eventDate = new Date(event.eventDate);
    const timeDifference = eventDate.getTime() - now.getTime();
    const daysDifference = Math.ceil(timeDifference / (1000 * 3600 * 24));

    // If the event is in the future and it's the closest so far, update
    if (
      daysDifference >= 0 &&
      (minDaysDifference === null || daysDifference < minDaysDifference)
    ) {
      minDaysDifference = daysDifference;
      closestEvent = event;
    }
  }

  return minDaysDifference !== null ? minDaysDifference : -1;
}
