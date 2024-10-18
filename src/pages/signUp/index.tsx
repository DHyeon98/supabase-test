import { supabase } from "../../supabase";

export default function SignUpPage() {
  const signInWithGithub = async () => {
    const { data } = await supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: "http://localhost:3000",
      },
    });
  };
  return (
    <div>
      <p>로그인 페이지</p>
      <button onClick={signInWithGithub} type="submit">
        로그인
      </button>
    </div>
  );
}
