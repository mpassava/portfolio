import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Mike Passavanti Portfolio" },
    { name: "description", content: "Software Developer Portfolio For Mike Passavanti" },
  ];
};

export default function Index() {
  return (
    <div className="flex h-screen items-center justify-center">
      <pre id="name-title">Mike Passavanti     Full Stack Developer</pre>
    </div>
  );
}
