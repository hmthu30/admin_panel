import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    alert(session)
    router.push("/auth/login"); // Redirect to login if no session
    return null;
  }

  console.log("User:", session.user);
  console.log("Token:", session);

  return (
    <div>
      <h1>Welcome, {session.user?.name}!</h1>
      <p>Your session token is: </p>
    </div>
  );
};

export default Dashboard;
