export default function Panel({ id, topic, answer, open, toggle }) {
  return (
    <article
      className="border-b-1 border-gray-300 last:border-b-0 pb-4"
      key={id}
      role="region"
      aria-labelledby={id}
    >
      <div className="mt-4">
        <button
          className="flex justify-between items-center gap-4 w-full cursor-pointer group"
          id={id}
          onClick={toggle}
          aria-expanded={open}
          aria-controls={`panel-content-${id}`}
        >
          <span className="text-left text-base text-cust-Purple-950 font-bold font-work-sans group-hover:text-cust-Purple-600">
            {topic}
          </span>

          <img
            className="ml-auto"
            src={!open ? "/icon-plus.svg" : "/icon-minus.svg"}
            alt=""
          />
        </button>

        <p
          id={`panel-content-${id}`}
          className={`text-gray-500 font-work-sans my-4 text-sm overflow-hidden transition-all duration-700 ease-in-out ${
            !open ? "max-h-0" : "max-h-screen"
          }`}
          aria-hidden={!open}
        >
          {answer}
        </p>
      </div>
    </article>
  );
}
