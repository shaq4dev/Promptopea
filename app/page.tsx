import Feed from "@/components/Feed";
import React from "react";

const HomePage = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share <br className="max-md:hidden" />
        <span className="orange_gradient text-center capitalize">
          AI powered prompts
        </span>
      </h1>
      <p className="desc text-center">
        Promptopea is an open source AI prompting tool for modern world to
        discover, create and share creative prompts.
      </p>

      {/* feed */}

      <Feed />
    </section>
  );
};

export default HomePage;
