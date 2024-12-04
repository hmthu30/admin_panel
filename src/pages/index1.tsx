import { SignIn } from "@/components/sign-in";
import { useAppMutation } from "@/context/App/AppMutateProvider";
import { useAppStore } from "@/context/App/AppStoreProvider";
import DashboardTemplate from "@/template/dashboard/DashboardTemplate";
import { useEffect } from "react";

export default function Home() {
  const { data, error, setData, setError } = useAppStore((state) => state);
  console.log("🚀 ~ Home ~ data, error:", data, error);
  const mutate = useAppMutation();

  // async function tokenData() {
  //   try {
  //     const result = await mutate.mutate();
  //     console.log("🚀 ~ tokenData ~ result:", result)
  //     setData(result as never);
  //   } catch (err) {
  //     setError(err as never);
  //   }
  // }

  const getTokenMutation = async () => {
    const response = await fetch("/api/auth/token");

    if (!response.ok) {
      throw new Error("Failed to get token");
    }

    return response.json();
  };

  useEffect(() => {
    getTokenMutation()
      .then((data) => console.log("Token data:", data))
      .catch((error) => console.error("Error fetching token:", error));
  }, []);

  if (error) {
    return <SignIn />;
  }

  if (!data) {
    return <SignIn />;
  }

  return <DashboardTemplate />;
}
