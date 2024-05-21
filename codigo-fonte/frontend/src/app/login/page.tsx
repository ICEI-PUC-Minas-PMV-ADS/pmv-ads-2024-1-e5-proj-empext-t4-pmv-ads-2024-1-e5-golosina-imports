import { auth } from "@/auth";
import { LoginBanner } from "@/organisms/LoginBanner";
import { redirect } from "next/navigation";

export default async function Login() {
  const session = await auth();
  const user = session?.user;
  if (user) {
    redirect('/produtos')
  }
    return (
      <main>
        <LoginBanner />
      </main>
    );
  }
  