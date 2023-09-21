"use client";

const ErrorPage = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <section className="flex items-center justify-center p-12 gap-2">
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </section>
  );
};

export default ErrorPage;
