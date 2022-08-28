import React from "react";

export default function PostLoader() {
  return (
    <div className="relative px-4 sm:px-6 lg:px-8 animate-pulse">
      <div className="text-lg max-w-prose mx-auto">
        <div className="block text-lg text-center w-24 rounded-full h-2 mx-auto bg-blue-600 font-semibold"></div>
        <div className="block text-lg text-center w-40 rounded-full h-4 mx-auto bg-slate-600 mt-4 font-semibold"></div>
        <div className="h-10"></div>
        <div className="border shadow rounded-xl px-10 py-8 ">
          <div className=" flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-600 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-600 rounded"></div>
                <div className="h-2 bg-slate-600 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-600 rounded"></div>
                <div className="h-2 bg-slate-600 rounded"></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-600  rounded w-full h-80 mx-auto my-10"></div>

          <div className=" flex space-x-4">
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-600 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-600 rounded"></div>
                <div className="h-2 bg-slate-600 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-600 rounded"></div>
                <div className="h-2 bg-slate-600 rounded"></div>
              </div>
            </div>
            <div className="flex-1 space-y-6 py-1">
              <div className="h-2 bg-slate-600 rounded"></div>
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-2 bg-slate-600 rounded col-span-2"></div>
                  <div className="h-2 bg-slate-600 rounded col-span-1"></div>
                </div>
                <div className="h-2 bg-slate-600 rounded"></div>
                <div className="h-2 bg-slate-600 rounded"></div>
              </div>
              <div className="space-y-3">
                <div className="h-2 bg-slate-600 rounded"></div>
                <div className="h-2 bg-slate-600 rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
