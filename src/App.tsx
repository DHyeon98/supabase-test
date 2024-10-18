import { useEffect, useState } from "react";
import "./App.css";
import { supabase } from "./supabase";
import { Link } from "react-router-dom";

export default function App() {
  const [testData, setTestData] = useState<any>([]);
  const checkLogin = async () => {
    const authInfo = await supabase.auth.getSession();
    const session = authInfo.data.session;
  };

  useEffect(() => {
    checkLogin();
    refreshHistory();
  }, []);

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    checkLogin();
  };

  const refreshHistory = async () => {
    const { data } = await supabase.from("page").select("*");
    setTestData(data);
  };

  const recordHandler = async () => {
    const { data } = await supabase
      .from("page")
      .insert([{ title: prompt("title"), body: prompt("body") }]);
    // 업데이트
    refreshHistory();
  };

  const deleteRecord = async (id) => {
    const { data } = await supabase.from("page").delete().eq("id", id);
    refreshHistory();
  };

  return (
    <div>
      <Link to={"/signUp"}>회원가입</Link>
      <button type="button" onClick={signOut}>
        로그아웃
      </button>
      <button onClick={recordHandler}>글 등록</button>
      <ul>
        {testData.map((item: any) => {
          return (
            <li key={item.id}>
              <div>
                <p>{item.title}</p>
                <p>{item.body}</p>
                <button onClick={() => deleteRecord(item.id)}>삭제</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
