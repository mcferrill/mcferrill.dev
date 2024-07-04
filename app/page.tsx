import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col lg:flex-row pt-16">
      <div className="lg:border-r border-r-solid border-color-black h-vh lg:w-1/4 text-center p-8">
        <Image
          className="block rounded-full max-w-full mx-auto"
          alt=""
          width={250}
          height={250}
          src="/profile.jpg"
        />
        <h3 className="text-center text-lg mt-2">Micah Ferrill</h3>
        <h1 className="text-3xl mt-8 mb-2">Hi!</h1>
        <p>I&apos;m Micah, and I make software for desktop, web, and mobile.</p>
        <div className="flex flex-row justify-between w-48 max-w-full my-8 mx-auto">
          <a href="https://github.com/mcferrill" title="GitHub">
            <Image width={32} height={32} alt="Github" src="/github.svg" />
          </a>
          <a href="https://www.linkedin.com/in/mcferrill/" title="LinkedIn">
            <Image width={32} height={32} alt="LinkedIn" src="/linkedin.svg" />
          </a>
          <a href="https://twitter.com/mcferrill" title="Twitter">
            <Image width={32} height={32} alt="Twitter" src="/twitter.svg" />
          </a>
        </div>
      </div>
      <div className="justify-between lg:w-3/4 p-8">
        <h3 className="text-xl">Expertise</h3>
        <ul>
          <li>Python (Django, Flask, scipy)</li>
          <li>Javascript (React, React-Native/Expo, Nodejs, Vue, jQuery)</li>
          <li>Modern software tooling (Docker, Git, CI/CD)</li>
          <li>Web Development (HTML, CSS, Tailwind, Less, SASS)</li>
          <li>Library development (in Python, C/C++, C#)</li>
          <li>Cybersecurity (Security+)</li>
        </ul>

        <h3 className="text-xl mt-8">Relevant Work History</h3>
        <h4 className="font-bold">Software Engineer @ FiveQ</h4>
        <em>2022 - present</em>
        <ul className="mt-2">
          <li>
            Standardized several high-traffic Django sites to use pdm for
            dependency management.
          </li>
          <li>
            Led a department restructuring to emphasize small, cross-functional
            teams.
          </li>
          <li>
            Rewrote frontend apps for an internet radio service from proprietary
            javascript to Remix.
          </li>
          <li>Rewrote and updated several mobile apps in React Native/Expo.</li>
        </ul>

        <h4 className="mt-4 font-bold">
          Software Engineer @ Avionics Test and Analysis Corporation
        </h4>
        <em>2010 - 2022</em>
        <ul className="mt-2">
          <li>
            Built Visual Studio Code plugin for a telemetry configuration format
            (TMATS).
          </li>
          <li>
            Developed software to simulate F-16 pilot interface for lab testing
            missile prototypes.
          </li>
          <li>Served as Security Manager for classified systems.</li>
          <li>
            Developed open-source libraries and tools for parsing binary data in
            Python and C.
          </li>
          <li>Wrote weather data visualization tool for C5 radar logs.</li>
          <li>
            Rewrote and customized QML (Qt) and Javascript code for F-16 test
            program.
          </li>
          <li>
            Containerized multiple legacy and prototype software applications.
          </li>
          <li>
            Presented several technical papers at industry conferences on
            open-source software and containerization.
          </li>
        </ul>
        <h4 className="mt-4 font-bold">
          Independent Full Stack Developer & Author
        </h4>
        <em>2005 - Present</em>
        <ul className="mt-2">
          <li>
            Built various new and updated websites for direct contracts and web
            firms.
          </li>
          <li>
            Wrote and consulted on multiple articles including one published on
            linux.com and a book on android development with python.
          </li>
          <li>
            Developed neighborhood watch software to deliver law enforcement
            alerts via text message (SMS).
          </li>
          <li>
            Developed iPad app for building floorplan layouts for print services
            company.
          </li>
        </ul>
      </div>
    </main>
  );
}
