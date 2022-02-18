export default function Projects() {
  return (
    <section>
      <article className="mt-3 space-y-10">
        <Project
          name="A2Solution"
          requirements="The client started a company and wanted a website - supporting english and french languages - to show services they provide and a way for people to contact him."
          solution="I created the site with modern technologies (Nextjs) to give client-side routing and highly SEO pages."
          tech="Nextjs, Bootstrap & Emailjs."
          href="https://a2solution.ca"
        />
        <Project
          name="Invoice Generator"
          requirements="The client owns a car wash business and wanted a way to generate customers invoices and calculate the taxes."
          solution="I built him a web app using Nextjs and a library (jsPdf) so he can just fill the form with the details and it will build the invoice as a PDF with all necessary calculations."
          tech="Nextjs, Bootstrap & jsPdf."
        />
        <Project
          name="Accounting Reports Generator"
          requirements="The client has an accountant office and so he wanted a way to generate the reports automatically instead of him making each one as a PDF"
          solution="So I built him using Nextjs and jsPdf, 3 different forms each which generates the accounting report as necessary."
          tech="Nextjs, Bootstrap & jsPdf."
        />
        <Project
          name="Find Medicine (side project)"
          problem="Few months ago in my country we had a medical crisis and people couldn’t find their needed medicines in pharmacies."
          solution="So I thought of building a website where people can upload medicines they need with their phone numbers so people can connect, also I made a separate section to upload available medicines."
          tech="Nextjs, Bootstrap & Firebase."
          href="https://findmedicine.org"
        />
      </article>
    </section>
  );
}

function Project({ name, problem, requirements, solution, tech, href }) {
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
            target="_blank"
            className="text-sm text-gray-600 no-underline hover:text-black hover:underline"
          >
            Visit the website →
          </a>
        </div>
      )}
    </div>
  );
}
