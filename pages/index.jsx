import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h2 className="mb-4 text-2xl font-extrabold text-black">Who am I?</h2>
      <article className="space-y-6 text-lg leading-normal text-gray-600">
        <p>
          I'm{" "}
          <a
            href="https://www.instagram.com/husseinhassan.me/"
            target="_blank"
            rel="noreferrer"
            className="font-bold no-underline"
          >
            @hussein
          </a>
          , a problem solver who found coding and software development to be his
          passion. I am passionate for creating software that doesn’t just work
          but works as perfect as it can be.
        </p>
        <p>
          Over the last 2 years, I taught myself Web & Mobile development,
          worked with companies in Canada and India. Created apps for business
          as well as side projects for the community.
        </p>
        <p>
          If you have a business and want to go online, improve your workflow or
          enhance your daily routine with modern systems and tools.{" "}
          <Link href="/contact" passHref>
            <span className="cursor-pointer font-bold">Contact me</span>
          </Link>{" "}
          and we will discuss your ideas.
        </p>
        <p>
          You can check the list of services I provide and technologies I work
          with{" "}
          <Link href="/services" passHref>
            <span className="cursor-pointer font-bold">here.</span>
          </Link>{" "}
        </p>
      </article>
    </section>
  );
}
