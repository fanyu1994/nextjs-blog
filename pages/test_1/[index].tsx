import { useRouter } from "next/router";

function Hello() {
  const router = useRouter();
  const query = router.query;
  return (
    <div>
      {JSON.stringify(query)}
      {Object.keys(query)}
    </div>
  );
}

export default Hello;
