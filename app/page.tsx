"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [state, setState] = useState(false);

  return (
    <main className="p-5">
      <div className="h-[200vh] relative flex flex-row">
        {state && (
          <div className="h-[80vh] bg-white w-[300px] sticky top-0 shrink-0">
            <h1 className="text-black">I am filter</h1>
          </div>
        )}
        <div className="flex flex-col mx-5">
          <button
            className="w-[100px] h-[50px] bg-white text-black"
            onClick={() => setState(!state)}
          >
            Show filter
          </button>
          <div className="flex flex-wrap gap-5 my-5">
            {Array.from({ length: 100 }).map((x, index) => {
              return (
                <div key={index} className="w-[100px] h-[100px] bg-yellow-50" />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
