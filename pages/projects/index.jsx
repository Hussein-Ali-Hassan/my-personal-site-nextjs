import SEO from "@/components/SEO";

export default function Projects() {
  return (
    <>
      <SEO
        title="Hussein Hassan | Projects"
        description="My work varies between management systems, Landing pages, E-Commerce sites, Mobile & Desktop apps.."
        keywords="Software development, react, nodejs, prisma, planetscale, management systems, CMS, blogs, apps, react native, tailwindcss, authentication, backend, frontend, mobile, desktop, serverless."
      />
      <section>
        <article className="mt-3 space-y-10">
          <WebProject
            name="A2Solution"
            requirements="The client started a company and wanted a website - supporting english and french languages - to show services they provide and a way for people to contact him."
            solution="I created the site with modern technologies (Nextjs) to give client-side routing and highly SEO pages."
            tech="Nextjs, Bootstrap & Emailjs."
            href="https://a2solution.ca"
          />
          <WebProject
            name="Can Inventory Management System"
            requirements="He is a car dealership, he wanted to manage his cars status (active / sold / rent), store customers details and cars they rent/bought."
            solution="I created a fully-featured management system to fulfill his needs, in addition, I created a dashboard to show the inventory’s statistics/incomes and profits."
            tech="Nextjs, Bootstrap, Firebase & Victory(charts and graphs)."
          />
          <WebProject
            name="Wholesale Industry Ordering Systems (in progress)"
            requirements=" The client wanted to improve their workflow from working in a traditional way sending papers downstairs, upstairs, marking completed orders, etc.. to a modern way in working with orders and customers, also having an easy to browse archive and companies insights."
            solution="I am building a management system that works on the concept of role-based access control (RBAC) authentication, where each user (admin/ officer/ delivery worker) has certain privileges and actions. The officer places orders then the workers see recent orders and start preparing as required, once finished he changes the status of the order and notifies the officer. In addition to the dashboard for archiving orders, income and profit."
            tech="Nextjs, Nodejs, Prisma, MySql(Planetscale), TailwindCSS & React-query."
          />
          <WebProject
            name="Invoice Generator"
            requirements="The client owns a car wash business and wanted a way to generate customers invoices and calculate the taxes."
            solution="I built him a web app using Nextjs and a library (jsPdf) so he can just fill the form with the details and it will build the invoice as a PDF with all necessary calculations."
            tech="Nextjs, Bootstrap & jsPdf."
          />
          <WebProject
            name="Accounting Reports Generator"
            requirements="The client has an accountant office and so he wanted a way to generate the reports automatically instead of him making each one as a PDF"
            solution="So I built him using Nextjs and jsPdf, 3 different forms each which generates the accounting report as necessary."
            tech="Nextjs, Bootstrap & jsPdf."
          />
          <WebProject
            name="Find Medicine (side project)"
            problem="Few months ago in my country we had a medical crisis and people couldn’t find their needed medicines in pharmacies."
            solution="So I thought of building a website where people can upload medicines they need with their phone numbers so people can connect, also I made a separate section to upload available medicines."
            tech="Nextjs, Bootstrap & Firebase."
            href="https://findmedicine.org"
          />
          <MobileProject
            name="Donate Life (side project / in progress)"
            problem="In my country, when someone needs blood they have hard time finding a donor with the same blood type."
            solution="Therefore, I decided to build a mobile app to make somehow a connection between the recipient and the donor. Simply the recipient sends me his request then I send a notification to all registered users with the same blood type in the same village so they can donate and help."
            tech="React Native & Firebase."
            href="https://firebasestorage.googleapis.com/v0/b/my-mvp-30cfd.appspot.com/o/donate-life.apk?alt=media&token=4838836e-ba54-4ff5-9b5c-7434a86771ef"
          />
        </article>
      </section>
    </>
  );
}

function WebProject({ name, problem, requirements, solution, tech, href }) {
  return (
    <div className="space-y-2">
      <strong className="mb-4 block text-xl font-bold text-black no-underline">
        {name}
      </strong>
      <p className="mt-1 text-base leading-normal text-gray-600">
        <strong className="text-gray-700 underline">
          {problem ? "Problem:" : "Client Requirements:"}
        </strong>{" "}
        {problem || requirements}
      </p>
      <p className="mt-1 text-base leading-normal text-gray-600">
        <strong className="text-gray-700 underline">Solution:</strong>{" "}
        {solution}
      </p>
      <p className="mt-1 text-base leading-normal text-gray-600">
        <strong className="text-gray-700 underline">Tech used:</strong> {tech}
      </p>
      {href && (
        <div>
          <a
            href={href}
            rel="noreferrer"
            target="_blank"
            className="text-sm text-gray-600 no-underline hover:text-black hover:underline"
          >
            Visit the site →
          </a>
        </div>
      )}
    </div>
  );
}

function MobileProject({ name, problem, requirements, solution, tech, href }) {
  return (
    <div className="space-y-2">
      <strong className="mb-4 block text-xl font-bold text-black no-underline">
        {name}
      </strong>
      <p className="mt-1 text-base leading-normal text-gray-600">
        <strong className="text-gray-700 underline">
          {problem ? "Problem:" : "Client Requirements:"}
        </strong>{" "}
        {problem || requirements}
      </p>
      <p className="mt-1 text-base leading-normal text-gray-600">
        <strong className="text-gray-700 underline">Solution:</strong>{" "}
        {solution}
      </p>
      <p className="mt-1 text-base leading-normal text-gray-600">
        <strong className="text-gray-700 underline">Tech used:</strong> {tech}
      </p>
      {href && (
        <div>
          <a
            href={href}
            download
            className="text-sm text-gray-600 no-underline hover:text-black hover:underline"
          >
            Download the apk →
          </a>
        </div>
      )}
    </div>
  );
}
