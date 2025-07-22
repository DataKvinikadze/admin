"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { Edit, Ellipsis, Plus, Trash2, User } from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { users } from "@/data/userData";
import { UserType } from "@/types/UserType";
import { useState } from "react";
import { useForm } from "react-hook-form";

const ProfileHeder = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState<UserType>();

  const handleEditClick = (admin: any) => {
    setSelectedAdmin(admin);
    setOpenDialog(true);
  };

  const { handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      role: selectedAdmin?.role || "",
    },
  });

  const onSubmit = (data: any) => {
    console.log("Updated role:", data.role);
    setOpenDialog(false);
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex justify-between items-center px-6 pt-3">
        <div>
          <h3 className="text-3xl font-bold tracking-tight">
            Admin Management
          </h3>
          <p className="text-muted-foreground">
            Manage administrator accounts and permissions
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-muted/50">
            <User />
            <div className="flex flex-col">
              <h5 className="font-medium">John Doe</h5>
              <p className="text-muted-foreground">Admin</p>
            </div>
          </div>
          <Link href="/profile/edit">
            <Button className="border rounded-2 border-gray-500 bg-white text-black hover:bg-gray-100">
              <User />
              Edit Profile
            </Button>
          </Link>
          <Link href="/add-admin">
            <Button>
              <Plus />
              Add admin
            </Button>
          </Link>
        </div>
      </div>

      {/* Cards */}
      <div className="flex gap-3 mt-9 justify-center px-6">
        {[1, 2, 3].map((_, i) => (
          <Card
            key={i}
            className="rounded-lg border bg-card text-card-foreground shadow-2xs gap-2 flex-1"
          >
            <CardHeader>
              <CardTitle>Total Admins</CardTitle>
              <CardAction>
                <User />
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-2xl font-bold">2</p>
            </CardContent>
            <CardFooter className="text-xs text-muted-foreground">
              Currently Active
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* Table */}
      <div className="p-6">
        <div className="rounded-2xl p-6 border border-gray-300 shadow-sm bg-white">
          <div className="mb-6">
            <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
              Administrator Accounts
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              A list of all administrator accounts in your organization.
            </p>
          </div>

          <div className="overflow-x-auto rounded-lg border border-gray-200">
            <Table className="w-full text-sm text-left text-gray-700">
              <TableHeader className="bg-gray-50">
                <TableRow>
                  <TableHead className="px-4 py-3 w-[140px] text-gray-600 uppercase tracking-wide text-xs">
                    First Name
                  </TableHead>
                  <TableHead className="px-4 py-3 text-gray-600 uppercase tracking-wide text-xs">
                    Last Name
                  </TableHead>
                  <TableHead className="px-4 py-3 text-gray-600 uppercase tracking-wide text-xs">
                    Email
                  </TableHead>
                  <TableHead className="px-4 py-3 text-gray-600 uppercase tracking-wide text-xs">
                    Role
                  </TableHead>
                  <TableHead className="px-4 py-3 text-right text-gray-600 uppercase tracking-wide text-xs">
                    Actions
                  </TableHead>
                </TableRow>
              </TableHeader>

              <TableBody className="divide-y divide-gray-100">
                {users.map((item) => (
                  <TableRow
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <TableCell className="px-4 py-3 font-medium">
                      {item.firstName}
                    </TableCell>
                    <TableCell className="px-4 py-3">{item.lastName}</TableCell>
                    <TableCell className="px-4 py-3">{item.email}</TableCell>
                    <TableCell className="px-4 py-3 capitalize">
                      {item.role}
                    </TableCell>
                    <TableCell className="px-4 py-3 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger>
                          <Ellipsis className="w-6 h-6" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                          <DropdownMenuLabel>Actions</DropdownMenuLabel>
                          <DropdownMenuSeparator />
                          <DropdownMenuItem
                            onClick={() => handleEditClick(item)}
                          >
                            Edit Permission
                          </DropdownMenuItem>
                          <DropdownMenuItem>Delete Admin</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>

      {/* Dialog Component */}
      <Dialog open={openDialog} onOpenChange={setOpenDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Edit Permissions for {selectedAdmin?.firstName}{" "}
              {selectedAdmin?.lastName}
            </DialogTitle>
            <DialogDescription>
              Choose the role you want to assign to this user.
            </DialogDescription>
          </DialogHeader>

          <form className="space-y-4 mt-4" onSubmit={handleSubmit(onSubmit)}>
            <Select
              value={watch("role")}
              onValueChange={(value) => setValue("role", value)}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="viewer">Viewer</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex justify-end gap-2 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setOpenDialog(false)}
              >
                Cancel
              </Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ProfileHeder;
