'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { FormEvent } from "react";

export default function Login() {
  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const supabase = createClientComponentClient();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if(data.user){
      redirect("/");
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
