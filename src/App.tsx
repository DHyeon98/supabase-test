import { useEffect, useState } from "react";
import "./App.css";
// import { supabase } from "./supabase";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_PROJECT_URL;
const supabaseKey = import.meta.env.VITE_API_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

export default function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getCountries();
  }, []);

  async function getCountries() {
    const { data } = await supabase.from("user-info").select("*");
    console.log(data);
  }

  return <div>ㅎㅇ</div>;
}
