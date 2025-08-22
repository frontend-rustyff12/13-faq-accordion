import { useState } from "react";
export default function Accordian() {
  const [sectionStates, setSectionStates] = useState({
    section1: false,
    section2: false,
    section3: false,
    section4: false,
  });

  function handleClick(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setSectionStates((prev) => ({ ...prev, [name]: !value }));
  }
  return (
    <section>
      <div className="flex gap-4 items-center">
        <img src="/icon-star.svg" alt="Star icon" />
        <h1 className="text-3xl font-bold font-work-sans">FAQs</h1>
      </div>
      <div className="">
        <div className="">
          <button>
            <span className="">
              What is Frontend Mentor, and how will it help me?
            </span>
            <img src="" alt="" />
          </button>

          <span>
            Frontend Mentor offers realistic coding challenges to help
            developers improve their frontend coding skills with projects in
            HTML, CSS, and JavaScript. It's suitable for all levels and ideal
            for portfolio building.
          </span>
        </div>
      </div>
    </section>
  );
}
