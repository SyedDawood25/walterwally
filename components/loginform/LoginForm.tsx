"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { loginSchema } from "@/schemas/index";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormLabel,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export const LoginForm = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-y-5"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-[#A8E198] text-[16px]">
                Email
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent border-[#A8E198] text-[#A8E198] py-7"
                  {...field}
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
              <FormLabel className="text-[#A8E198] text-[16px]">
                Password
              </FormLabel>
              <FormControl>
                <Input
                  className="bg-transparent border-[#A8E198] text-[#A8E198] py-7"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type="submit"
          className="bg-[#A8E198] text-[#090F0C] font-semibold text-md w-full mt-16 py-6 hover:bg-transparent hover:border hover:border-[#A8E198] hover:text-[#A8E198]"
        >
          Log In
        </Button>
      </form>
      <Button
        variant={"link"}
        className="text-[14px] text-[#A8E198] ml-[-10px]"
        asChild
      >
        <Link href={"/register"}>Don't have an account? Sign Up</Link>
      </Button>
    </Form>
  );
};
