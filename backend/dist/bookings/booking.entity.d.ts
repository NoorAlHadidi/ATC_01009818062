import { User } from "../auth/user.entity";
import { Event } from "../events/event.entity";
export declare class Booking {
    id: number;
    user: User;
    event: Event;
    bookedAt: Date;
}
