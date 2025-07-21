'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { signUpSchema } from '@/validations/sign-up.validation';

type SignInFormValues = z.infer<typeof signUpSchema>;

export function SignUpForm({
  className,
  ...props
}: React.ComponentProps<'div'>) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormValues>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = (data: SignInFormValues) => {
    console.log('Submitted:', data);
  };

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className='text-center'>
          <CardTitle className='text-xl'>Sign Up</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} noValidate>
            <div className='grid gap-6'>
              <div className='grid gap-3'>
                <Label htmlFor='firstName'>firstName</Label>
                <Input
                  id='firstName'
                  type='email'
                  placeholder='john'
                  {...register('firstName')}
                />
                {errors.firstName && (
                  <p className='text-sm text-red-500'>
                    {errors.firstName.message}
                  </p>
                )}
              </div>

              <div className='grid gap-3'>
                <Label htmlFor='lastName'>lastName</Label>
                <Input
                  id='lastName'
                  type='email'
                  placeholder='doe'
                  {...register('lastName')}
                />
                {errors.lastName && (
                  <p className='text-sm text-red-500'>
                    {errors.lastName.message}
                  </p>
                )}
              </div>

              <div className='grid gap-3'>
                <Label htmlFor='email'>Email</Label>
                <Input
                  id='email'
                  type='email'
                  placeholder='m@example.com'
                  {...register('email')}
                />
                {errors.email && (
                  <p className='text-sm text-red-500'>{errors.email.message}</p>
                )}
              </div>

              <div className='grid gap-3'>
                <div className='flex items-center'>
                  <Label htmlFor='password'>Password</Label>
                </div>
                <Input
                  id='password'
                  type='password'
                  {...register('password')}
                />
                {errors.password && (
                  <p className='text-sm text-red-500'>
                    {errors.password.message}
                  </p>
                )}
              </div>

              <Button type='submit' className='w-full'>
                Sign up
              </Button>
              <div className='text-center'>
                <a
                  href='/signIn'
                  className='ml-auto text-ju text-sm underline-offset-4 hover:underline'
                >
                  already have an account?
                </a>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
