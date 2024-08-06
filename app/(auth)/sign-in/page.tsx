import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

export default function SignIn() {
  return (
    <section className="w-full min-h-screen p-4 flex items-center justify-center">
      <form className="relative w-[400px] h-[400px] bg-white p-2 flex flex-col items-center justify-center space-y-6 rounded-lg">
        <h3 className="font-bold text-3xl absolute top-4 left-4 text-[--purple]">
          Sign In
        </h3>
        <button
          type="submit"
          className="btn w-3/4 bg-[--purple] hover:bg-[--purple] text-white"
          formAction={async () => {
            "use server";
            await signIn("google");
          }}
        >
          <FcGoogle size={25} />
          <p>Sign In with Google</p>
        </button>
        <button
          type="submit"
          className="btn w-3/4 bg-[--purple] hover:bg-[--purple] text-white"
          formAction={async () => {
            "use server";
            await signIn("github");
          }}
        >
          <IoLogoGithub size={25} />
          <p>Sign In with Github</p>
        </button>
      </form>
    </section>
  );
}
