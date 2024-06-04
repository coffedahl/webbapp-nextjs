import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import LogoutButton from "../(components)/LogoutButton";

async function getUserData(){
  // Import cookies
  const cookieStore = cookies()
  // Create supabase client and get userdata
  const supabase = createServerComponentClient({ cookies: () => cookieStore });
  const { data, error } = await supabase.auth.getUser();
  const user = data.user;
  // Return userdata email
  return user;
}

export default async function Acount(){
  // get userdata
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