import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import LogoutButton from "../(components)/LogoutButton";

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
    <div className="flex flex-col justify-center items-center">
      <article className="flex justify-center p-40">
        <p className="text-2xl">
          Logged in user: <b>{user?.email}</b>
        </p>
      </article>
      <LogoutButton />
    </div>
  );
}