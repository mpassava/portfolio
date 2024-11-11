import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Mike Passavanti Portfolio" },
    {
      name: "description",
      content: "Software Developer Portfolio For Mike Passavanti",
    },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="relative flex flex-row justify-center">
        <div
          className="text-xl font-bold overflow-hidden whitespace-nowrap mx-0 my-auto tracking-widest animate-typing"
        >
          <pre>Mike Passavanti   Full Stack Developer</pre>
        </div>
        <div className="border-transparent border-r-2 animate-blink-and-fade-caret"></div>
      </div>
    </div>
  );
}
