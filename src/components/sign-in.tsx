import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

export function SignIn() {
  const router = useRouter();

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("result",result);

    if (!result?.error) {
      console.log(result);

      router.push("/");
    } else {
      alert("Invalid credentials!");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input name="email" type="email" required />
      </label>
      <label>
        Password:
        <input name="password" type="password" required />
      </label>
      <button type="submit">Sign In</button>
    </form>
  );
}
