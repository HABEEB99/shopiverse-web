"use client";

import * as z from "zod";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginSchema } from "@/schemas/login-schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Eye, EyeOff, Key, Loader, Mail } from "lucide-react";
import { Input } from "../ui/input";
import { useState, useTransition } from "react";
import { useToast } from "../ui/use-toast";
import { Button } from "../ui/button";
import Link from "next/link";

const LoginForm = () => {
  const [isPending, setTransition] = useTransition();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { toast } = useToast();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <Card className="w-full lg:w-[50vw] my-2 min-h-[50%]">
      <CardHeader>
        <CardTitle className="my-2">Login</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form className="space-y-4">
            <div className="space-y-2">
              {/* Email Field */}
              <FormField
                control={form.control}
                name="email"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className="space-y-0 group">
                    <FormLabel className="text-xs text-muted-foreground font-bold group-hover:text-btn">
                      Email
                    </FormLabel>
                    <FormControl>
                      <div className="input-wrapper">
                        <Mail className="w-4 h-4 group-hover:text-btn font-bold text-muted-foreground" />
                        <Input type="email" placeholder="Email" {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password Field */}
              <FormField
                control={form.control}
                name="password"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className="space-y-0 group">
                    <FormLabel className="text-xs text-muted-foreground font-bold group-hover:text-btn">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="input-wrapper">
                        <Key className="w-4 h-4 group-hover:text-btn font-bold text-muted-foreground" />
                        <Input
                          type={isPasswordVisible ? "text" : "password"}
                          placeholder="***************"
                          {...field}
                        />
                        {isPasswordVisible ? (
                          <Eye
                            onClick={togglePasswordVisibility}
                            className="w-4 h-4 group-hover:text-btn font-bold text-muted-foreground"
                          />
                        ) : (
                          <EyeOff
                            onClick={togglePasswordVisibility}
                            className="w-4 h-4 group-hover:text-btn font-bold text-muted-foreground"
                          />
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button
              type="submit"
              variant="main"
              size="lg"
              disabled={isPending}
              className="flex items-center justify-center"
            >
              {isPending ? (
                <div className="flex items-center justify-center space-x-2">
                  Logging in...
                  <Loader className="btn-icon animate-spin" />
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  Login
                  <Key className="btn-icon" />
                </div>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex items-center justify-center space-x-2">
        <span className="text-xs text-muted-foreground">
          Don't have an account yet?
        </span>
        <Link
          href="/register"
          className="ml-2 text-xs text-btn/70 hover:text-btn/90 active:text-btn font-bold"
        >
          Register
        </Link>
      </CardFooter>
    </Card>
  );
};

export default LoginForm;
