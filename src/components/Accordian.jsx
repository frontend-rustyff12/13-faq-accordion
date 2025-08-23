import { useState } from "react";
import Panel from "./Panel";
import { contentData } from "../data/data";

export default function Accordian() {
  const [sectionStates, setSectionStates] = useState({
    1: true,
    2: false,
    3: false,
    4: false,
  });

  function toggleState(id) {
    setSectionStates((prev) => ({ ...prev, [id]: !prev[id] }));
  }

  const panelElements = contentData.map((item) => (
    <Panel
      toggle={() => toggleState(item.id)}
      id={item.id}
      topic={item.topic}
      answer={item.answer}
      open={sectionStates[item.id]}
    />
  ));
  return (
    <section>
      <div className="flex gap-4 items-center">
        <img className="w-6" src="/icon-star.svg" alt="Star icon" />
        <h1 className="text-3xl font-bold font-work-sans">FAQs</h1>
      </div>
      {panelElements}
    </section>
  );
}
