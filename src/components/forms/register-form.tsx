"use client";

import axios from "axios";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas/register-schema";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

import {
  Eye,
  EyeOff,
  Key,
  Loader,
  Mail,
  PenLineIcon,
  Phone,
  User,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import { authUrl } from "@/lib/network";

const RegisterForm = () => {
  const [isPending, setTransition] = useTransition();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { toast } = useToast();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
      userImage: "",
    },
  });

  const registerUser = async (data: z.infer<typeof RegisterSchema>) => {
    try {
      // setTransition( () => {   });
      const res = await axios.post(authUrl.register, {
        firstName: data.firstName,
        lastName: data.lastName,
        phone: data.phone,
        email: data.email,
        password: data.password,
      });

      toast({
        variant: "default",
        description: "Your registration was successful 🎉",
      });
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Registration failed 😖",
      });
    }
  };

  return (
    <Card className="w-full lg:w-[60vw] my-2">
      <CardHeader>
        <CardTitle className="my-2">Register</CardTitle>
      </CardHeader>

      <CardContent>
        <Form {...form}>
          <form
            className="space-y-4"
            onSubmit={form.handleSubmit(registerUser)}
          >
            <div className="space-y-2">
              <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-2">
                {/* FirstName Field */}
                <FormField
                  control={form.control}
                  name="firstName"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem className="space-y-0 group w-full md:w-1/2">
                      <FormLabel className="text-xs text-muted-foreground font-bold group-hover:text-btn">
                        FirstName
                      </FormLabel>
                      <FormControl>
                        <div className="input-wrapper">
                          <User className="w-4 h-4 group-hover:text-btn font-bold text-muted-foreground" />
                          <Input
                            type="text"
                            placeholder="First Name"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* LastName Field */}
                <FormField
                  control={form.control}
                  name="lastName"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem className="space-y-0 group w-full md:w-1/2">
                      <FormLabel className="text-xs text-muted-foreground font-bold group-hover:text-btn">
                        LastName
                      </FormLabel>
                      <FormControl>
                        <div className="input-wrapper">
                          <User className="w-4 h-4 group-hover:text-btn font-bold text-muted-foreground" />
                          <Input
                            type="text"
                            placeholder="Last Name"
                            {...field}
                          />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

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

              {/* LastName Field */}
              <FormField
                control={form.control}
                name="phone"
                disabled={isPending}
                render={({ field }) => (
                  <FormItem className="space-y-0 group">
                    <FormLabel className="text-xs text-muted-foreground font-bold group-hover:text-btn">
                      Phone Number
                    </FormLabel>
                    <FormControl>
                      <div className="input-wrapper">
                        <Phone className="w-4 h-4 group-hover:text-btn font-bold text-muted-foreground" />
                        <Input
                          type="text"
                          placeholder="Phone Number"
                          {...field}
                        />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="w-full flex flex-col md:flex-row items-center justify-center md:space-x-2">
                {/* Password Field */}
                <FormField
                  control={form.control}
                  name="password"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem className="space-y-0 group w-full md:w-1/2">
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

                {/* Confirm Password Field */}
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  disabled={isPending}
                  render={({ field }) => (
                    <FormItem className="space-y-0 group w-full md:w-1/2">
                      <FormLabel className="text-xs text-muted-foreground font-bold group-hover:text-btn">
                        Confirm Password
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
                  Registering
                  <Loader className="btn-icon animate-spin" />
                </div>
              ) : (
                <div className="flex items-center justify-center space-x-2">
                  Register
                  <PenLineIcon className="btn-icon" />
                </div>
              )}
            </Button>
          </form>
        </Form>
      </CardContent>

      <CardFooter className="flex items-center justify-center space-x-2">
        <span className="text-xs text-muted-foreground">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="ml-2 text-xs text-btn/70 hover:text-btn/90 active:text-btn font-bold"
        >
          Login
        </Link>
      </CardFooter>
    </Card>
  );
};

export default RegisterForm;
