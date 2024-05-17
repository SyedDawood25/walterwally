"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <main>
      <SignIn.Root path="/login">
        <SignIn.Step name="start">
          <header>
            <h1 className="text-[#A8E198] text-3xl font-semibold mb-8">
              Sign In to WalterWally
            </h1>
          </header>
          <Clerk.GlobalError className="text-sm text-red-600" />
          <Clerk.Field name="identifier" className="min-w-[500px]">
            <Clerk.Label className="sr-only">Email</Clerk.Label>
            <Clerk.Input
              type="email"
              required
              placeholder="Email"
              className="w-full bg-transparent border border-[#A8E198] text-[#A8E198] p-3 rounded-md hover:border-gray-400"
            />
            <Clerk.FieldError className="mt-2 block text-sm text-red-400" />
          </Clerk.Field>
          <SignIn.Action
            submit
            className="relative w-full rounded-md bg-[#A8E198] py-2 text-md mt-10 font-medium text-[#0A100D]"
          >
            Sign In
          </SignIn.Action>
          <p className="text-center text-md text-neutral-500 mt-4">
            Don&apos;t have an account?{" "}
            <Link
              href={"/register"}
              className="text-[#A8E198] px-0.5 underline"
            >
              Sign up
            </Link>
          </p>
          <div className="mt-8 space-y-2">
            <Clerk.Connection
              name="google"
              className="flex w-full items-center justify-center gap-x-3 rounded-md bg-[#A8E198] px-2 py-2 text-lg font-medium text-[#0A100D]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden
                className="size-4"
              >
                <g clipPath="url(#a)">
                  <path
                    fill="currentColor"
                    d="M8.32 7.28v2.187h5.227c-.16 1.226-.57 2.124-1.192 2.755-.764.765-1.955 1.6-4.035 1.6-3.218 0-5.733-2.595-5.733-5.813 0-3.218 2.515-5.814 5.733-5.814 1.733 0 3.005.685 3.938 1.565l1.538-1.538C12.498.96 10.756 0 8.32 0 3.91 0 .205 3.591.205 8s3.706 8 8.115 8c2.382 0 4.178-.782 5.582-2.24 1.44-1.44 1.893-3.475 1.893-5.111 0-.507-.035-.978-.115-1.369H8.32Z"
                  />
                </g>
                <defs>
                  <clipPath id="a">
                    <path fill="#fff" d="M0 0h16v16H0z" />
                  </clipPath>
                </defs>
              </svg>
              Login with Google
            </Clerk.Connection>
          </div>
        </SignIn.Step>
      </SignIn.Root>
    </main>
  );
};
