import { User } from "../auth/user.entity";
export declare class Profile {
    id: number;
    user: User;
    firstName: string;
    lastName: string;
    phone_number: string;
    profile_picture: string;
}
