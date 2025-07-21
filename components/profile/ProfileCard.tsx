import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone, PhoneCall, User } from "lucide-react";
import Image from "next/image";

const ProfileCard = () => {
  return (
    <Card className="rounded-lg border bg-card text-card-foreground shadow-2xs w-full h-full">
      <CardHeader>
        <CardTitle className="flex flex-col items-center">
          <User className="w-[96px] h-[96px] rounded-full" />
          <h3 className="text-2xl font-semibold leading-none tracking-tight">
            John Smith
          </h3>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div className="flex gap-3 items-center">
          <Mail className="w-6 h-6" />
          <p className="text-[12px]">john.smith@company.com</p>
        </div>
        <div className="flex gap-3 items-center">
          <PhoneCall className="w-6 h-6" />
          <p className="text-[12px]">+1 (555) 123-4567</p>
        </div>
        <div className="flex gap-3 items-center">
          <MapPin className="w-6 h-6" />
          <p className="text-[12px]">New York, NY</p>
        </div>
      </CardContent>
      <div className="h-[1px] bg-gray-300 mx-3"></div>
      <CardFooter>
        <p className="text-[13px] text-gray-500">Joined Jan 2023</p>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
