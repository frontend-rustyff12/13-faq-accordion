export default function Panel({ id, topic, answer, open, toggle }) {
  return (
    <article
      className="border-b-1 border-gray-300 last:border-b-0 pb-4"
      key={id}
    >
      <div className="mt-4">
        <button
          className="flex justify-between items-center gap-4 w-full"
          id={id}
          onClick={toggle}
        >
          <span className="text-left text-base text-cust-Purple-950 font-bold font-work-sans">
            {topic}
          </span>

          <img
            className="ml-auto"
            src={!open ? "/icon-plus.svg" : "/icon-minus.svg"}
            alt=""
          />
        </button>

        <p
          className={
            !open
              ? "hidden"
              : "visible text-gray-500 font-work-sans my-4 text-sm"
          }
        >
          {answer}
        </p>
      </div>
    </article>
  );
}
