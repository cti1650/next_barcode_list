// pages/post.js

import { useRouter } from "next/router";
import CodeLoop from "../components/CodeLoop";

const Page = () => {
  const router = useRouter();

  return (
    <CodeLoop />
  );
};

export default Page;