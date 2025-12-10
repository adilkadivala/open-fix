import { getServerSession } from "next-auth";
import NavUserClient from "./nav-user-client";

export async function NavUser() {
  const session = await getServerSession();

  return <NavUserClient session={session} />;
}
