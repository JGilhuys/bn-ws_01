"use client";
import React, { useEffect, useRef, useState } from "react";

export default function NewProduct() {
  const [editing, setEditing] = useState<boolean>(false);

  return (
    <>
      {editing ? (
        <div className="min-h-80 flex flex-col justify-start items-start text-left p-4 bg-white border border-stone-200 rounded-xl shadow-lg">
          <form>
            <p className="mb-1 font-CinzelDecorative font-semibold text-xl text-amber-950">
              <input
                type="text"
                placeholder="+ New Product"
                className="w-full focus:outline-2 focus:outline-dashed focus:outline-stone-300"
              />
            </p>
            <p className="mb-1 text-sm text-stone-400">
              <input
                type="text"
                placeholder="Subtitle"
                className="w-full focus:outline-2 focus:outline-dashed focus:outline-stone-300"
              />
            </p>
            <p className="mb-2 h-full w-full text-amber-950">
              <textarea
                placeholder="Summary"
                className="w-full h-full focus:outline-2 focus:outline-dashed focus:outline-stone-300 resize-none overflow-hidden"
              ></textarea>
            </p>
            <p className="block w-full flex flex-row justify-end gap-2">
              <button className="px-2 py-1 rounded-md bg-stone-300 text-stone-400">
                + Add
              </button>
              <button
                onClick={() => setEditing(!editing)}
                className="px-2 py-1 rounded-md bg-[#6b1a1a] text-[#e1b692]"
              >
                Discard
              </button>
            </p>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setEditing(!editing)}
          className="min-h-64 flex flex-col justify-start items-start text-left p-4 bg-white bg-opacity-25 border border-dashed border-4 border-stone-300 rounded-xl "
        >
          <p className="font-CinzelDecorative font-semibold text-xl text-stone-400">
            + New Product
          </p>
          <p className="text-sm text-stone-300">Subtitle</p>
          <p className="text-stone-400">Summary</p>
        </button>
      )}
    </>
  );
}
