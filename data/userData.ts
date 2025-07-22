import { UserType } from "@/types/UserType";

export const users: UserType[] = [
  {
    id: "1",
    firstName: "Nino",
    lastName: "Beridze",
    email: "nino.beridze@example.com",
    password: "SecureP@ssw0rd!",
    role: "admin",
    avatar: "https://example.com/avatars/nino.jpg",
},
{
      id: "2",
      firstName: "Giorgi",
      lastName: "Kapanadze",
      email: "giorgi.kapanadze@example.com",
      password: "AnotherP@ss123!",
      role: "editor",
      avatar: "https://example.com/avatars/giorgi.jpg",
    },
    {
        id: "3",
        firstName: "Tamar",
        lastName: "Kiknavelidze",
        email: "tamar.k@example.com",
        password: "T@marStrong1",
        role: "viewer",
    avatar: "https://example.com/avatars/tamar.jpg",
  },
];
