import { ChatsList } from "../components/ChatsList";
import TemplateMain from "./../Templates/TemplateMain";

const ChangeChats = () => {
  return (
    <TemplateMain>
      <section className="w-full h-[calc(100vh-7.5rem)] grid grid-cols-10 gap-2 bg-[#fff] shadow p-2 rounded-md">
        <ChatsList />

        <article className="w-full col-span-7 h-full grid grid-rows-[auto,1fr,auto] gap-4">
          <div className="flex justify-between items-center border-b pb-2">
            <p className="text-3xl font-semibold">Martin Simarra</p>

            <div className="flex gap-2">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 cursor-pointer"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-7 h-7 cursor-pointer"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </g>
              </svg>
              <svg
                className="w-7 h-7 text-gray-800 cursor-pointer"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
          </div>

          <div>
            <div className="grid pb-11">
              <div className="flex gap-2.5 mb-4">
                <img
                  src="https://pagedone.io/asset/uploads/1710412177.png"
                  alt="Shanay image"
                  className="w-10 h-11"
                />
                <div className="grid">
                  <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
                    Shanay cruz
                  </h5>
                  <div className="w-max grid">
                    <div className="px-3.5 py-2 bg-gray-100 rounded justify-start  items-center gap-3 inline-flex">
                      <h5 className="text-gray-900 text-sm font-normal leading-snug">
                        Guts, I need a review of work. Are you ready?
                      </h5>
                    </div>
                    <div className="justify-end items-center inline-flex mb-2.5">
                      <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                        05:14 PM
                      </h6>
                    </div>
                  </div>
                  <div className="w-max grid">
                    <div className="px-3.5 py-2 bg-gray-100 rounded justify-start items-center gap-3 inline-flex">
                      <h5 className="text-gray-900 text-sm font-normal leading-snug">
                        Let me know
                      </h5>
                    </div>
                    <div className="justify-end items-center inline-flex mb-2.5">
                      <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                        05:14 PM
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 justify-end pb-40">
              <div className="">
                <div className="grid mb-2">
                  <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
                    You
                  </h5>
                  <div className="px-3 py-2 bg-green-500 rounded">
                    <h2 className="text-white text-sm font-normal leading-snug">
                      Yes, let’s see, send your work here
                    </h2>
                  </div>
                  <div className="justify-start items-center inline-flex">
                    <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                      05:14 PM
                    </h3>
                  </div>
                </div>
                <div className="justify-center">
                  <div className="grid w-fit ml-auto">
                    <div className="px-3 py-2 bg-green-500 rounded ">
                      <h2 className="text-white text-sm font-normal leading-snug">
                        Anyone on for lunch today
                      </h2>
                    </div>
                    <div className="justify-start items-center inline-flex">
                      <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                        You
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              <img
                src="https://pagedone.io/asset/uploads/1704091591.png"
                alt="Hailey image"
                className="w-10 h-11"
              />
            </div>
          </div>

          <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
            <div className="flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g id="User Circle">
                  <path
                    id="icon"
                    d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z"
                    stroke="#22c55e"
                    strokeWidth="1.6"
                  />
                </g>
              </svg>
              <input
                className="grow shrink basis-0 text-black text-xs font-medium leading-4 focus:outline-none"
                placeholder="Type here..."
              />
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="cursor-pointer"
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <g id="Attach 01">
                  <g id="Vector">
                    <path
                      d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675"
                      stroke="#9CA3AF"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M14.9332 7.79175L8.77551 14.323C8.23854 14.8925 7.36794 14.8926 6.83097 14.323C6.294 13.7535 6.294 12.83 6.83097 12.2605L12.9887 5.72925M12.3423 6.41676L13.6387 5.04176C14.7126 3.90267 16.4538 3.90267 17.5277 5.04176C18.6017 6.18085 18.6017 8.02767 17.5277 9.16676L16.2314 10.5418M16.8778 9.85425L10.72 16.3855C9.10912 18.0941 6.49732 18.0941 4.88641 16.3855C3.27549 14.6769 3.27549 11.9066 4.88641 10.198L11.0441 3.66675"
                      stroke="black"
                      strokeOpacity="0.2"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </g>
              </svg>
              <button className="items-center flex px-3 py-2 bg-green-500 rounded-full shadow ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <g id="Send 01">
                    <path
                      id="icon"
                      d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  </g>
                </svg>
                <h3 className="text-white text-xs font-semibold leading-4 px-2">
                  Envia
                </h3>
              </button>
            </div>
          </div>
        </article>
      </section>
    </TemplateMain>
  );
};

export default ChangeChats;
