import cookie from "js-cookie";

export default function Home() {
  return (
    <main>
      <h1>Cookies</h1>
      <button type="button" onClick={() => {}}>
        Login
      </button>{" "}
      <button type="button" onClick={() => {}}>
        Logout
      </button>
    </main>
  );
}

export function getServerSideProps({ req, res }) {
  return { props: {} };
}
