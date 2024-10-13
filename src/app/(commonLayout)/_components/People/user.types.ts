export type SocialMediaLink= {
    platform: string;
    url: string;
  }
export type TUser= {
    _id: string;
    name: string;
    userName: string;
    email: string;
    password: string;
    dateOfBirth: Date;
    profilePicture?: string;
    phoneNumber: string;
    gender?: "male" | "female" | "other";
    bio?: string;
    location?: string;
    website?: string;
    occupation?: string;
    socialMediaLinks?: SocialMediaLink[];
    followers: Array<string>;
    following: Array<string>
    role: "admin" | "user";
    isVerified: boolean;
  }