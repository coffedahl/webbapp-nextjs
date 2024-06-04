import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"

async function getUserData(){
  const cookieStore = cookies()
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabase.auth.getUser();
  const user = data.user;
  return user;
}

export default async function Acount(){
  const user = await getUserData();

  return (
    <article className="flex justify-center p-40">
      <p className="text-2xl">
        Logged in user: <b>{user?.email}</b>
      </p>
    </article>
  );
}