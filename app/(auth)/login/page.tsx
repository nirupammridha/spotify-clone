"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  
  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    
    // Simulate login
    setTimeout(() => {
      router.push('/dashboard');
      setIsLoading(false);
    }, 1500);
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-black">
      <header className="bg-black py-8">
        <div className="container flex justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Music className="h-10 w-10 text-green-500" />
            <span className="text-2xl font-bold">Spotify Clone</span>
          </Link>
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md p-8 bg-neutral-900 rounded-lg">
          <h1 className="text-2xl font-bold text-center mb-6">Log in to Spotify</h1>
          
          <div className="space-y-4 mb-6">
            <Button 
              variant="outline" 
              className="w-full bg-white text-black hover:bg-neutral-200 font-bold"
            >
              Continue with Google
            </Button>
            <Button 
              variant="outline" 
              className="w-full bg-white text-black hover:bg-neutral-200 font-bold"
            >
              Continue with Facebook
            </Button>
            <Button 
              variant="outline" 
              className="w-full bg-white text-black hover:bg-neutral-200 font-bold"
            >
              Continue with Apple
            </Button>
          </div>
          
          <div className="relative mb-6">
            <Separator />
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-900 px-2 text-sm text-neutral-400">
              or
            </span>
          </div>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email address</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="Email address" 
                        {...field} 
                        className="bg-neutral-800 border-neutral-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="Password" 
                        {...field} 
                        className="bg-neutral-800 border-neutral-700"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <div className="pt-2">
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="w-full bg-green-500 hover:bg-green-400 text-black font-bold"
                >
                  {isLoading ? (
                    <span className="flex items-center justify-center">
                      <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin mr-2" />
                      Logging in...
                    </span>
                  ) : "Log In"}
                </Button>
              </div>
              
              <div className="text-center">
                <a href="#" className="text-sm text-neutral-400 hover:underline">
                  Forgot your password?
                </a>
              </div>
            </form>
          </Form>
          
          <Separator className="my-6" />
          
          <div className="text-center">
            <p className="text-neutral-400 mb-4">Don't have an account?</p>
            <Link href="/signup">
              <Button 
                variant="outline" 
                className="w-full border-neutral-700 hover:border-white hover:bg-transparent"
              >
                Sign up for Spotify
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}