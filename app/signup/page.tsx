"use client";

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Signup() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Create database client
        const supabase = createClientComponentClient();
      // Get formdata
      const formData = new FormData(event.currentTarget);
      const email = formData.get("email") as string;
      const name = formData.get("name") as string;
      const password = formData.get("password") as string;

      // Try signup
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name,
          },
        },
      });
      if (!data.user) {
        throw new Error("Submit failed");
      } else {
        router.push("/");
      }
    } catch (error: any) {
      setError(error.message);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-full">
      <form onSubmit={onSubmit} className="flex flex-col space-y-6">
        <input
          type="text"
          placeholder="name"
          name="name"
          className="text-black p-3 rounded-md"
        />
        <input
          type="email"
          placeholder="email"
          name="email"
          className="text-black p-3 rounded-md"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="text-black p-3 rounded-md"
        />
        <input
          type="password"
          placeholder="retype password"
          name="password-confirm"
          className="text-black p-3 rounded-md"
        />
        <button type="submit">Sign up</button>
      </form>
    </div>
  );
}
