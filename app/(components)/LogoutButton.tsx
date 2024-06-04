'use client'

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton(){
    const router = useRouter()
    async function handleClick() {
        try {
          const supabase = createClientComponentClient();
          const { error } = await supabase.auth.signOut();
          if (error) throw new Error("Unable to logout");
        } catch (error: any) {
          console.error(error.message);
        }finally{
          router.push("/");
        }
    }
    return(
        <button onClick={handleClick}>Logout</button>
    )
}