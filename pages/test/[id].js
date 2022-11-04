import Link from "next/link";

export async function getServerSideProps(context) {
  console.log("resolvedUrl", context.resolvedUrl);
  return {
    props: { url: context.resolvedUrl },
  };
}

export default function Test({ url }) {
  return (
    <div>
      <p>resolvedUrl: {url}</p>
      <p>
        <Link href="/test/this:is:a:test">Next</Link>
      </p>
    </div>
  );
}
