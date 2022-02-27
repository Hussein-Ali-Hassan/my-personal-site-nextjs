import SEO from "@/components/SEO";

const services = [
  {
    name: "Management systems & Admin dashboards",
    description:
      "Let's face it. All companies and industries are moving their work digitally. Which makes management systems and dashboard today in demand. I will make sure you get the perfect system with all the features you want such as; custom user roles, automated workflows and internal statistics and insights.",
  },
  {
    name: "Landing pages, Blogs, Portfolios and more!",
    description:
      "Whether it's a single page website for your business, or you being a content creator who wants a custom platform, or even a personal portfolio, that is what I do.",
  },
  {
    name: "E-commerce stores",
    description:
      "There are millions of people searching the internet everyday, looking for products and services. Start your E-Commerce business with a fully-featured E-Commerce website.",
  },
  {
    name: "Solving your daily-routine / problems",
    description:
      "Solve complex problems and gain instant value with a software solution that will not only enhance your work and improve your daily routines, but also will blow your mind.",
  },
  {
    name: "Mobile apps for IOS & Android",
    description:
      "It could be a tool for your company workers, provide more value to your customers, or even a shopping app. Mobile apps can be a great way to boost loyalty among your customers & improve your productivity.",
  },
];

export default function Services() {
  return (
    <>
      <SEO
        title="Hussein Hassan | Services"
        description="My work varies between management systems, Landing pages,
        E-Commerce sites, Mobile & Desktop apps.."
        keywords="Software development, react, nodejs, prisma, planetscale, management systems, CMS, blogs, apps, react native, tailwindcss, authentication, backend, frontend, mobile, desktop, serverless."
      />
      <section>
        <h2 className="mb-4 text-xl font-bold text-black">
          What I provide and how I can help you..?
        </h2>
        <article className="space-y-6 text-base leading-normal text-gray-600">
          <p>My services fall into 5 different categories:</p>
          {services.map((service, index) => (
            <Service
              key={service.name}
              number={index + 1}
              name={service.name}
              description={service.description}
            />
          ))}
        </article>
        <article className="my-12">
          <strong>Each service includes, as your needs, these add ons:</strong>
          <ul className="mt-1 ml-1">
            <li>-Domain name + personalized email</li>
            <li>-Visitors traffic analytics + analyzing user events</li>
            <li>-Error monitoring & issues tracker</li>
            <li>-Monthly maintenance & improvements</li>
          </ul>
        </article>
        <p className="text-base font-semibold leading-normal text-gray-600">
          Some of the tools & technologies I work with to build modern, fast,
          high-performant and less-expensive apps are:
        </p>
        <ul className="mt-1 ml-1 space-y-2 underline">
          <li>
            <a href="https://nextjs.org/" rel="noreferrer" target="_blank">
              Nextjs
            </a>
          </li>
          <li>
            <a href="https://nodejs.org/en/" rel="noreferrer" target="_blank">
              Nodejs
            </a>
          </li>
          <li>
            <a href="https://www.prisma.io/" rel="noreferrer" target="_blank">
              Prisma
            </a>
          </li>
          <li>
            <a href="https://planetscale.com/" rel="noreferrer" target="_blank">
              PlanetScale
            </a>
          </li>
          <li>
            <a href="https://tailwindcss.com/" rel="noreferrer" target="_blank">
              Tailwindcss
            </a>
          </li>
          <li>
            <a href="https://reactnative.dev/" rel="noreferrer" target="_blank">
              React Native
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}

function Service({ number, name, description }) {
  return (
    <div className="space-y-2">
      <strong className="mb-4 block text-xl font-bold text-black">
        {number}- {name}
      </strong>
      <p className="mt-1 text-base leading-normal text-gray-600">
        {description}
      </p>
    </div>
  );
}
