'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { editProfileSchema } from '@/validations/edit-user.validation';
import z from 'zod';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Input } from '../ui/input';
import { Label } from '../ui/label';
import { Button } from '../ui/button';

type FormValues = z.infer<typeof editProfileSchema>;

export default function EditProfile() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@example.com',
    },
  });

  function onSubmit(data: FormValues) {
    console.log('Form Data:', data);
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-muted'>
      <Card className='w-full max-w-md'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <CardHeader className='space-y-1 text-center'>
            <CardTitle className='text-2xl'>Edit Profile</CardTitle>
            <CardDescription>Update your personal information</CardDescription>
          </CardHeader>
          <CardContent className='grid gap-6 my-4'>
            <div className='flex gap-4'>
              <div className='flex-1 grid gap-2'>
                <Label htmlFor='firstName'>First Name</Label>
                <Input id='firstName' {...register('firstName')} />
                {errors.firstName && (
                  <p className='text-sm text-red-500'>
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div className='flex-1 grid gap-2'>
                <Label htmlFor='lastName'>Last Name</Label>
                <Input id='lastName' {...register('lastName')} />
                {errors.lastName && (
                  <p className='text-sm text-red-500'>
                    {errors.lastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input id='email' type='email' {...register('email')} />
              {errors.email && (
                <p className='text-sm text-red-500'>{errors.email.message}</p>
              )}
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='currentPassword'>Current Password</Label>
              <Input
                id='currentPassword'
                type='password'
                {...register('currentPassword')}
              />
            </div>
            <div className='flex gap-4'>
              <div className='flex-1 grid gap-2'>
                <Label htmlFor='newPassword'>New Password</Label>
                <Input
                  id='newPassword'
                  type='password'
                  {...register('newPassword')}
                />
              </div>
              <div className='flex-1 grid gap-2'>
                <Label htmlFor='confirmPassword'>Confirm New Password</Label>
                <Input
                  id='confirmPassword'
                  type='password'
                  {...register('confirmPassword')}
                />
                {errors.confirmPassword && (
                  <p className='text-sm text-red-500'>
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </CardContent>
          <CardFooter className='flex justify-end gap-2'>
            <Button variant='outline' type='button'>
              Cancel
            </Button>
            <Button type='submit'>Save Changes</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
