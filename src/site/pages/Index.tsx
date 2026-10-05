import Layout from "@/site/components/Layout";

const Line = ({ children }: { children: React.ReactNode }) => (
  <p className="leading-relaxed text-foreground/70">{children}</p>
);

const Whisper = ({ children }: { children: React.ReactNode }) => (
  <p className="text-lg leading-relaxed text-foreground">{children}</p>
);

const Section = ({
  id,
  eyebrow,
  title,
  children,
  tinted = false,
}: {
  id?: string;
  eyebrow?: string;
  title: string;
  children: React.ReactNode;
  tinted?: boolean;
}) => (
  <section
    id={id}
    className={tinted ? "site-section-tint py-20 md:py-28" : "py-20 md:py-28"}
  >
    <div className="container max-w-3xl">
      {eyebrow && (
        <span className="site-eyebrow block">{eyebrow}</span>
      )}
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
        {title}
      </h2>
      <div className="mt-8 space-y-5 text-base md:text-lg">{children}</div>
    </div>
  </section>
);

const systems = [
  {
    name: "Dental Care",
    description:
      "Software built around the workflow of dental practices. From patient management and clinical records to scheduling, billing, payments, follow ups and the operational processes that keep a dental practice running.",
  },
  {
    name: "Eye Care",
    description:
      "A system structured around the distinct clinical and operational workflow of eye care.",
  },
  {
    name: "Fertility Care",
    description:
      "Technology designed around the specialized processes, patient journeys and operational requirements involved in fertility care.",
  },
  {
    name: "Laboratory",
    description:
      "A system built around laboratory workflows, records, processes and operational management.",
  },
  {
    name: "General Practice",
    description:
      "Clinical management technology structured around the everyday workflow of general medical practice.",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative bg-[hsl(var(--medical-blue-dark))] py-20 md:py-28">
        <div className="container">
          <span className="site-eyebrow block text-white/50">Clinexus</span>
          <h1 className="mt-5 max-w-3xl text-4xl text-white md:text-5xl lg:text-6xl">
            Healthcare software should understand healthcare.
          </h1>
          <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
            <p>
              You already know healthcare is not one industry. You feel it every
              working day.
            </p>
            <p>A dental practice does not operate like a laboratory.</p>
            <p>A fertility centre does not operate like an eye clinic.</p>
            <p>A general medical practice does not operate like either.</p>
            <p>
              They may all treat patients, keep records, schedule appointments
              and collect payments, but the work that happens inside each one is
              fundamentally different.
            </p>
          </div>
          <div className="mt-10 max-w-2xl space-y-2 text-base leading-relaxed text-white/60 md:text-lg">
            <p>The clinical processes are different.</p>
            <p>The information they need is different.</p>
            <p>The people involved are different.</p>
            <p>The way services are delivered is different.</p>
            <p>The way the business is managed is different.</p>
          </div>
          <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-white/70 md:text-lg">
            <p>
              Yet healthcare software has often approached the problem from the
              opposite direction: build one generic system and make different
              healthcare businesses fit into it.
            </p>
            <Whisper>
              <span className="text-white">Clinexus is built on a different idea.</span>
            </Whisper>
          </div>
        </div>
      </section>

      {/* The problem */}
      <Section title="The problem with generic healthcare software">
        <Line>
          You do not simply need software that can store patient information.
        </Line>
        <Line>You need software that understands how your facility operates.</Line>
        <Line>
          When a system is designed to work across completely different
          healthcare environments, it inevitably has to become generic.
        </Line>
        <Line>
          Important industry specific processes become optional features,
          workarounds, separate modules, manual processes, or things you simply
          have to adapt around.
        </Line>
        <Whisper>The software becomes the framework.</Whisper>
        <Whisper>Your healthcare business has to adjust itself to fit.</Whisper>
        <Whisper>
          <span className="font-semibold">We believe that is backwards.</span>
        </Whisper>
        <Line>
          Healthcare software should adapt to the way healthcare is actually
          practiced.
        </Line>
      </Section>

      {/* Introducing Clinexus */}
      <Section title="Introducing Clinexus" tinted>
        <Line>
          Clinexus is a healthcare technology company building specialized
          clinical management systems for different areas of healthcare.
        </Line>
        <Line>
          Instead of starting with one generic system and attempting to make it
          suitable for everyone, Clinexus starts with the healthcare
          environment itself.
        </Line>
        <div className="space-y-2 pt-2">
          <Line>We study the workflow.</Line>
          <Line>We understand the people involved.</Line>
          <Line>We identify the information that matters.</Line>
          <Line>We understand how patients move through the service.</Line>
          <Line>
            We understand the operational processes behind the clinical work.
          </Line>
        </div>
        <Line>Then we build the technology around those realities.</Line>
        <Whisper>
          <span className="font-semibold">
            The healthcare industry comes first. The software is built around
            it.
          </span>
        </Whisper>
      </Section>

      {/* One platform */}
      <Section title="One platform. Multiple clinical systems.">
        <Line>
          Clinexus is not a collection of unrelated software products.
        </Line>
        <Line>
          It is one healthcare technology platform with specialized systems
          built for different healthcare environments.
        </Line>
        <Line>
          Each system shares the underlying philosophy and infrastructure of
          Clinexus while being designed around the requirements of its
          particular field.
        </Line>
        <Line>
          That means you do not have to use a generic system simply because
          your industry happens to fall under the broad category of
          "healthcare."
        </Line>
        <Whisper>You get a system designed with your environment in mind.</Whisper>
        <div className="space-y-2 pt-2">
          <Whisper>One platform.</Whisper>
          <Whisper>Different clinical systems.</Whisper>
          <Whisper>Built around how each one works.</Whisper>
        </div>
      </Section>

      {/* Specialization */}
      <Section title="Specialization is not a feature. It is the foundation." tinted>
        <Line>
          There is a difference between adding a few industry specific features
          to generic healthcare software and actually building software around
          an industry's workflow.
        </Line>
        <Line>Clinexus focuses on the latter.</Line>
        <Line>
          A specialized system should understand more than terminology.
        </Line>
        <div className="space-y-2 pt-2">
          <Line>It should understand the sequence of work.</Line>
          <Line>Who does what.</Line>
          <Line>When they do it.</Line>
          <Line>What information is required.</Line>
          <Line>What happens next.</Line>
          <Line>What needs to be recorded.</Line>
          <Line>What needs to be communicated.</Line>
          <Line>What needs to be billed.</Line>
          <Line>What needs to be followed up.</Line>
          <Line>What management needs to see.</Line>
        </div>
        <Whisper>That is what makes software genuinely specialized.</Whisper>
        <Whisper>
          <span className="font-semibold">
            We don't simply change the labels. We change the system around the
            workflow.
          </span>
        </Whisper>
      </Section>

      {/* Entire operation */}
      <Section title="Built around the entire operation">
        <Line>
          Clinical management does not stop at the consultation room.
        </Line>
        <Line>
          Your facility is simultaneously a place of care and an operating
          business.
        </Line>
        <div className="space-y-2 pt-2">
          <Line>Patients need to be managed.</Line>
          <Line>Appointments need to be coordinated.</Line>
          <Line>Records need to be maintained.</Line>
          <Line>Staff need to work together.</Line>
          <Line>Services need to be billed.</Line>
          <Line>Payments need to be tracked.</Line>
          <Line>Resources and processes need to be monitored.</Line>
          <Line>Management needs visibility.</Line>
          <Line>Patients need to be communicated with.</Line>
          <Line>
            And the business needs to understand what is actually happening
            inside it.
          </Line>
        </div>
        <Line>
          Clinexus brings these operational layers together so you can manage
          your facility from one connected environment.
        </Line>
        <Whisper>
          The goal is not simply to digitize records. The goal is to digitize
          the way your healthcare business operates.
        </Whisper>
      </Section>

      {/* Patient to practice */}
      <Section title="From patient to practice" tinted>
        <Line>A patient's journey creates information at every stage.</Line>
        <div className="space-y-2 pt-2">
          <Line>From booking to arrival.</Line>
          <Line>From consultation to treatment.</Line>
          <Line>From service delivery to payment.</Line>
          <Line>From follow up to return visits.</Line>
        </div>
        <Line>
          That information should not exist as disconnected pieces across
          notebooks, spreadsheets, messaging applications, separate billing
          tools, and isolated systems.
        </Line>
        <Line>
          Clinexus is designed to connect the processes surrounding the patient
          journey with the processes running the healthcare business.
        </Line>
        <Line>
          This creates something more valuable than a digital record.
        </Line>
        <Whisper>It creates operational visibility.</Whisper>
        <Line>
          You can see what is happening, understand what has happened, and make
          better decisions about what happens next.
        </Line>
      </Section>

      {/* The systems */}
      <section id="systems" className="site-section-tint py-20 md:py-28">
        <div className="container">
          <div className="max-w-3xl">
            <span className="site-eyebrow block">What we build</span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              The systems
            </h2>
            <div className="mt-8 space-y-5 text-base md:text-lg">
              <Line>Different healthcare environments require different systems.</Line>
              <Line>
                Clinexus is developing specialized clinical management systems
                for areas including:
              </Line>
            </div>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {systems.map((system) => (
              <div
                key={system.name}
                className="rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-xl font-semibold text-foreground">
                  {system.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {system.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-12 max-w-3xl space-y-5 text-base md:text-lg">
            <Line>
              These are not simply different versions of the same generic
              software. They are different systems built on the same Clinexus
              philosophy.
            </Line>
            <Line>
              And the platform can continue expanding into other areas of
              healthcare.
            </Line>
          </div>
        </div>
      </section>

      {/* No compromise */}
      <Section title="Your industry should not have to compromise for your software.">
        <Line>
          Every healthcare business develops its own way of working. Some
          differences are minor. Others are fundamental.
        </Line>
        <Line>
          The software supporting that business should be able to accommodate
          those realities rather than forcing the organization into a
          predefined structure that was designed for somebody else.
        </Line>
        <Line>
          Clinexus therefore approaches product development from the inside
          out.
        </Line>
        <div className="space-y-2 pt-2">
          <Whisper>
            <span className="font-semibold">
              Industry → workflow → requirements → system.
            </span>
          </Whisper>
          <p className="text-muted-foreground">Not:</p>
          <p className="text-muted-foreground">
            generic software → features → healthcare business.
          </p>
        </div>
        <Whisper>
          That difference is at the centre of what we build.
        </Whisper>
      </Section>

      {/* People */}
      <Section title="Technology that works for the people using it" tinted>
        <Line>
          Healthcare software is used by real people doing real work.
        </Line>
        <div className="space-y-2 pt-2">
          <Line>Doctors.</Line>
          <Line>Dentists.</Line>
          <Line>Nurses.</Line>
          <Line>Technicians.</Line>
          <Line>Administrators.</Line>
          <Line>Front desk teams.</Line>
          <Line>Managers.</Line>
          <Line>Accountants.</Line>
          <Line>Practice owners.</Line>
        </div>
        <Line>
          They do not need technology for technology's sake. They need systems
          that reduce unnecessary work, keep information organized, make
          processes easier to manage and give them better visibility over the
          operation.
        </Line>
        <Line>Clinexus is built with that reality in mind.</Line>
        <Whisper>
          The objective is not to make healthcare businesses learn how to
          operate software. The objective is to make software work naturally
          within healthcare operations.
        </Whisper>
      </Section>

      {/* Intelligence */}
      <Section title="From records to intelligence">
        <Line>
          Digitizing healthcare creates an opportunity beyond replacing paper.
        </Line>
        <Line>
          When operational information is structured correctly, it becomes
          possible to understand the business at a deeper level.
        </Line>
        <div className="space-y-2 pt-2">
          <Line>How many patients are being seen?</Line>
          <Line>Which services are generating revenue?</Line>
          <Line>Where are operational bottlenecks occurring?</Line>
          <Line>How are appointments performing?</Line>
          <Line>What payments are outstanding?</Line>
          <Line>How are staff and processes performing?</Line>
          <Line>How often are patients returning?</Line>
          <Line>What is happening across different locations?</Line>
        </div>
        <Line>
          The more connected the system becomes, the more useful the
          information becomes.
        </Line>
        <Whisper>
          Clinexus is building toward a future where healthcare businesses do
          not simply have digital records. They have a clearer understanding of
          their entire operation.
        </Whisper>
      </Section>

      {/* Growth */}
      <Section
        title="Built for individual facilities and growing healthcare organizations"
        tinted
      >
        <Line>
          A healthcare business may begin with one location and a small team.
          Over time, it may grow.
        </Line>
        <div className="space-y-2 pt-2">
          <Line>More patients.</Line>
          <Line>More staff.</Line>
          <Line>More services.</Line>
          <Line>More departments.</Line>
          <Line>More locations.</Line>
        </div>
        <Whisper>Growth should not mean losing control of the operation.</Whisper>
        <Line>
          Clinexus is designed to support healthcare organizations as their
          operational complexity increases, including environments where
          multiple locations need to be managed within a connected structure.
        </Line>
        <Line>
          Each location can maintain the operational context it needs while
          management can maintain broader visibility.
        </Line>
        <Whisper>
          <span className="font-semibold">
            Growth should create more capability — not more confusion.
          </span>
        </Whisper>
      </Section>

      {/* Future */}
      <Section title="Healthcare is becoming more connected.">
        <Line>
          The future of healthcare technology will not be defined by one
          application that does everything for everyone.
        </Line>
        <Line>
          It will be defined by systems that understand specific problems
          deeply and connect them intelligently.
        </Line>
        <Line>Clinexus is building toward that future.</Line>
        <div className="space-y-2 pt-2">
          <Whisper>Specialized clinical systems.</Whisper>
          <Whisper>Connected healthcare operations.</Whisper>
          <Whisper>Structured information.</Whisper>
          <Whisper>Better visibility.</Whisper>
          <Whisper>Better tools for healthcare professionals.</Whisper>
          <Whisper>Better experiences for patients.</Whisper>
        </div>
        <Line>
          And eventually, a broader technology infrastructure connecting
          different parts of the healthcare ecosystem.
        </Line>
      </Section>

      {/* Ambition */}
      <Section title="Our ambition" tinted>
        <Line>
          Clinexus is being built to become more than a clinical management
          software company.
        </Line>
        <Line>
          We want to build healthcare technology that can exist across
          different parts of the industry.
        </Line>
        <Line>
          The same way a technology company can build different products for
          different environments, Clinexus can build specialized technology for
          different areas of healthcare while maintaining a common foundation.
        </Line>
        <div className="space-y-2 pt-2">
          <Whisper>Different systems.</Whisper>
          <Whisper>Different workflows.</Whisper>
          <Whisper>Different users.</Whisper>
          <Whisper>Different needs.</Whisper>
          <Whisper>One underlying technology company.</Whisper>
          <Whisper>
            <span className="font-semibold">Clinexus.</span>
          </Whisper>
        </div>
      </Section>

      {/* Differently */}
      <Section title="We are building healthcare software differently.">
        <Line>Not by asking:</Line>
        <p className="text-lg italic text-muted-foreground">
          "How can one system work for everyone?"
        </p>
        <Line>But by asking:</Line>
        <p className="text-lg italic text-foreground">
          "What does this healthcare environment actually need?"
        </p>
        <Whisper>That question changes everything.</Whisper>
        <div className="space-y-2 pt-2">
          <Line>It changes what gets built.</Line>
          <Line>It changes how workflows are structured.</Line>
          <Line>It changes what users see.</Line>
          <Line>It changes what information is captured.</Line>
          <Line>It changes what management can understand.</Line>
          <Line>
            And ultimately, it changes what healthcare businesses can do with
            their technology.
          </Line>
        </div>
      </Section>

      {/* Final CTA */}
      <section className="site-section-tint py-20 md:py-28">
        <div className="container max-w-3xl">
          <span className="site-eyebrow block">This is for you</span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            For the healthcare business that wants more from its software
          </h2>
          <div className="mt-8 space-y-5 text-base md:text-lg">
            <Line>Your healthcare facility is not generic.</Line>
            <Line>Your workflow is not generic.</Line>
            <Line>Your patients are not generic.</Line>
            <Line>Your operational challenges are not generic.</Line>
            <Whisper>
              <span className="font-semibold">
                Your software shouldn't be either.
              </span>
            </Whisper>
            <Line>
              Explore the Clinexus system built for your area of healthcare.
            </Line>
          </div>
        </div>
      </section>

      {/* Closing */}
      <section className="bg-[hsl(var(--medical-blue-dark))] py-20 md:py-28">
        <div className="container text-center">
          <span className="site-eyebrow block text-white/50">Clinexus</span>
          <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
            Clinical management, built around healthcare.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
            Specialized clinical management systems for the different ways
            healthcare works.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="/industries"
              className="rounded-md bg-primary px-8 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
            >
              Explore your system
            </a>
            <a
              href="/about"
              className="rounded-md border border-white/20 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Learn about Clinexus
            </a>
            <a
              href="/contact"
              className="rounded-md border border-white/20 px-8 py-3 text-sm font-medium text-white transition-colors hover:bg-white/10"
            >
              Contact us
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
