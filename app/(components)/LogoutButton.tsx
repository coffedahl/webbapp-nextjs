'use client'
// imports
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

export default function LogoutButton(){
    // Create router object for redirect
    const router = useRouter()
    /**
     * Function for handling click of the logout button
     */
    async function handleClick() {
        try {
          //Try to logout user
          const supabase = createClientComponentClient();
          const { error } = await supabase.auth.signOut();
          // If the logout operation returns an error throw error
          if (error) throw new Error("Unable to logout");
        } catch (error: any) {
          // Console log error if thrown
          console.error(error.message);
        }finally{
          // push to index page
          router.push("/");
        }
    }
    return(
        <button onClick={handleClick}>Logout</button>
    )
}