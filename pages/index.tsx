import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import HomeStyle from "../styles/Home.module.scss";

const sleepFun = (ms: number): Promise<any> => {
  return new Promise((res) => {
    setTimeout(() => {
      res(true);
    }, ms);
  });
};
const Home: NextPage = () => {
  const [index, setIndex] = useState(1);
  const str = "Welcome Nextjs";
  let tiner: NodeJS.Timeout | null = null;
  const router = useRouter();
  let time = 200;
  let Dom = null;
  const [domIs, setDom] = useState(true);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    tiner = setInterval(() => {
      setIndex((index) => (index = index + 1));
    }, time);
    return () => clearInterval(tiner as NodeJS.Timeout);
  }, []);

  (async function () {
    await sleepFun(str.length * time + 2000);
    if (tiner) clearInterval(tiner);
    // router.push("/test_1/3");
    setDom(false);
  })();

  if (domIs) {
    Dom = (
      <div className={HomeStyle.container}>
        <main className={HomeStyle.main}>
          <h1 className={HomeStyle.title}>
            {str.substring(0, index)}{" "}
            <span className={HomeStyle.span_line}>_</span>
          </h1>
        </main>
      </div>
    );
  } else {
    Dom = (
      <div className={HomeStyle.container_index}>
       
      </div>
    );
  }

  return <div className={HomeStyle.ctx}>{Dom}</div>;
};

export default Home;
