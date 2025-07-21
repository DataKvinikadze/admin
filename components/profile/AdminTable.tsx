"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "../ui/button";
import Link from "next/link";
import { FilePenLine, Trash2, UserPlus } from "lucide-react";

const AdminTable = () => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-2xl font-semibold text-gray-800">
            Admin Management
          </h3>
          <p className="text-sm text-gray-500">
            Manage admin users and their permissions
          </p>
        </div>
        <Link href="/create-admin">
          <Button className="flex items-center gap-2">
            <UserPlus className="w-4 h-4" />
            Add Admin
          </Button>
        </Link>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="min-w-[150px]">First Name</TableHead>
              <TableHead className="min-w-[150px]">Last Name</TableHead>
              <TableHead className="min-w-[250px]">Email</TableHead>
              <TableHead className="min-w-[120px]">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50 transition">
              <TableCell>Davit</TableCell>
              <TableCell>Kvinikadze</TableCell>
              <TableCell>datakvinikadze07@gmail.com</TableCell>
              <TableCell>
                <div className="flex gap-4">
                  <Button variant="ghost" size="icon">
                    <FilePenLine className="w-4 h-4 text-blue-600" />
                  </Button>
                  <Button variant="ghost" size="icon">
                    <Trash2 className="w-4 h-4 text-red-600" />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default AdminTable;
