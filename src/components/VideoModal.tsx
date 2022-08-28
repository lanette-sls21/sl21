/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import YouTube from "react-youtube";

export default function VideoModal({ show, onClose }: any) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (show) setOpen(true);
    if (!open) onClose();
    return;
  }, [show, onClose, open]);

  const videoOptions = {
    height: "auto",
    width: "auto",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      color: "white",
    },
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0  bg-slate-800 bg-opacity-60 transition-opacity" />
        </Transition.Child>

        <div className="fixed z-10 inset-0 overflow-y-auto">
          <div className="flex items-center sm:items-center justify-center px-8 py-40 md:py-12 2xl:py-36 text-center w-screen h-full  max-h-fit max-w-7xl m-auto ">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <Dialog.Panel className="relative bg-white rounded-2xl p-4 text-left overflow-hidden shadow-xl transform transition-all w-full h-full ">
                <YouTube
                  videoId={"P5VnQfX1-m8"} // defaults -> ''
                  className={"w-full h-full "} // defaults -> ''
                  iframeClassName={"w-full h-full  rounded-xl"} // defaults -> ''
                  title={"string"} // defaults -> ''
                  opts={videoOptions}
                  // loading={string}
                  // onReady={func} // defaults -> noop
                  // onPlay={func} // defaults -> noop
                  // onPause={func} // defaults -> noop
                  // onEnd={func} // defaults -> noop
                  // onError={func} // defaults -> noop
                  // onStateChange={func} // defaults -> noop
                  // onPlaybackRateChange={func} // defaults -> noop
                  // onPlaybackQualityChange={func} // defaults -> noop
                />
                {/* <div className="mt-5 sm:mt-6">
                  <button
                    type="button"
                    className="flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-indigo-600 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => setOpen(false)}>
                    Go back to dashboard
                  </button>
                </div> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
