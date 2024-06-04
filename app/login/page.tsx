'use client'
// imports
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Login() {
  // Create router object
  const router = useRouter();

  /**
   * Function for handling submit of the form and logging in user
   */
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    // Prevent default html functions
    event.preventDefault();
    // Get data from the form
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // Log in user with supabase
    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (data.user) {
      // if login was successful go back to start page
      router.push("/");
    }
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col w-80 space-y-10">
      <input className="text-black" type="email" name="email" id="" />
      <input className="text-black" type="password" name="password" id="" />
      <button className="bg-emerald-900" type="submit">
        Login
      </button>
    </form>
  );
}
