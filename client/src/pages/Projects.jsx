import CallToAction from "../components/CallToAction";

import CallToAction_2 from "../components/CallToAction_2";

export default function Projects() {
  return (
    <div className="min-h-screen max-w-2xl mx-auto flex justify-center items-center flex-col gap-6 p-3">
      <h1 className="text-3xl font-semibold">Projects</h1>
      <p className="text-md text-gray-500">
      Uni Media has a myriad of exciting projects and events lined up for you to explore and engage with.
      Check out our projects and events below and get involved!
      </p>
      <div>
        <CallToAction />
      </div>
      <div>
        <CallToAction_2 />
      </div>
    </div>
  );
}
