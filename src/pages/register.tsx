import Head from "next/head";
import Link from "next/link";

import { AuthLayout } from "@/components/AuthLayout";
import { Input } from "@/components/Input";
import { Logo } from "@/components/Logo";
import { useInput } from "@/hooks/useInput";
import { useMemo } from "react";

export default function Login() {
  const [inputValues, handleInputChange] = useInput({
    clientId: process.env.AUTH0_CLIENT_ID,
    connection: process.env.AUTH0_CONNECTION,
    given_name: "John",
    family_name: "Doe",
    email: "",
    password: "",
  });

  return (
    <>
      <Head>
        <title>Sign Up - TaxPal</title>
      </Head>
      <AuthLayout>
        <div className="flex flex-col items-start justify-start">
          <Link href="/">
            <a>
              <Logo className="mb-2 h-10 w-auto" />
            </a>
          </Link>
          <h2 className="mt-16 text-lg font-semibold text-gray-900">
            Get started for free.
          </h2>
          <p className="mt-2 text-sm text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lacus arcu
            odio pretium, semper adipiscing vitae nulla.
          </p>
        </div>
        <div className="mt-10">
          <div className="mt-6">
            <form action="#" method="" className="space-y-7">
              <div className="flex flex-col space-y-7 sm:flex-row sm:space-y-0 sm:space-x-6">
                <Input
                  label="First name"
                  id="given_name"
                  value={inputValues["given_name"]}
                  onChange={handleInputChange}
                  name="given_name"
                  type="text"
                  autoComplete="given-name"
                  required
                />
                <Input
                  label="Last name"
                  id="family_name"
                  value={inputValues["family_name"]}
                  onChange={handleInputChange}
                  name="family_name"
                  type="text"
                  autoComplete="family-name"
                  required
                />
              </div>
              <Input
                label="Email address"
                id="email"
                value={inputValues["email"]}
                onChange={handleInputChange}
                name="email"
                type="email"
                autoComplete="email"
                required
              />
              <Input
                label="Password"
                id="password"
                value={inputValues["password"]}
                onChange={handleInputChange}
                name="password"
                type="password"
                autoComplete="new-password"
                required
              />
              <div className="pt-1">
                <button
                  type="submit"
                  className="w-full rounded-full border border-transparent bg-blue-600 py-2 px-4 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Sign up <span aria-hidden="true">&rarr;</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </AuthLayout>
    </>
  );
}
