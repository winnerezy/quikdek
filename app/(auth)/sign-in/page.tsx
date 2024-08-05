import { signIn } from "@/auth";
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

export default function SignIn() {
  return (
    <section className="w-full min-h-screen p-4 flex items-center justify-center">
      <form
        action={async () => {
          "use server";
          await signIn();
        }}
        className="relative w-[450px] h-[500px] border-2 border-[--purple] p-2 flex flex-col items-center justify-center space-y-6 rounded-lg"
      >
        <h3 className="font-bold text-3xl absolute top-4 left-4 text-[--purple]">
          Sign In
        </h3>
        <button type="submit" className="btn w-3/4 bg-[--purple] hover:bg-[--purple]">
          <FcGoogle size={25} />
          <p>Sign In with Google</p>
        </button>
        <button type="submit" className="btn w-3/4 bg-[--purple] hover:bg-[--purple]">
          <IoLogoGithub size={25} />
          <p>Sign In with Github</p>
        </button>
      </form>
    </section>
  );
}
