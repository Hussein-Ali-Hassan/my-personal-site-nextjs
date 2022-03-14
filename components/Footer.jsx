export default function Footer() {
  return (
    <footer className="mt-12">
      <hr />
      <p className="mt-4">
        I built this website with{" "}
        <a
          href="https://nextjs.org"
          rel="noreferrer"
          target="_blank"
          className="font-bold no-underline"
        >
          Next.js
        </a>{" "}
        . You can check the code{" "}
        <a
          href="https://github.com/Hussein-Ali-Hassan/Personal-Website/tree/main"
          rel="noreferrer"
          target="_blank"
          className="font-bold no-underline"
        >
          here.
        </a>
      </p>
      <p className="mt-4">
        I have rebuilt & updated this site using{" "}
        <a
          href="https://kit.svelte.dev"
          rel="noreferrer"
          target="_blank"
          className="font-bold no-underline"
        >
          Svelte
        </a>{" "}
        . You can browse it at{" "}
        <a
          href="https://husseinhassan.me"
          rel="noreferrer"
          target="_blank"
          className="font-bold no-underline"
        >
          husseinhassan.me
        </a>
      </p>
    </footer>
  );
}
