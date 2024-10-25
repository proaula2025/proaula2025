import { userPhoto } from "../images";
import TemplateMain from "./../Templates/TemplateMain";

const ChangeChats = () => {
  return (
    <TemplateMain>
      <section className="w-full h-[calc(100vh-7.5rem)] grid grid-cols-10 gap-2 bg-[#ffffff47] p-2 rounded-md">
        <div className="col-span-3 p-3 border-r">
          <input
            className="w-full h-12 px-2 bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500"
            type="text"
            placeholder="Search"
          />

          <div className="w-full pt-4 grid gap-4">
            <div className="w-full flex gap-3 p-3 bg-[#8d8d8d5c] rounded-md cursor-pointer">
              <img
                className="w-16 h-2w-16 rounded-lg"
                src={userPhoto}
                alt="User photo"
              />
              <div>
                <h3 className="text-lg font-semibold ">Usuario numero 1</h3>
                <p className="text-sm cursor-pointer">Message</p>
              </div>
            </div>
            <div className="w-full flex gap-3 p-3 bg-[#8d8d8d5c] rounded-md cursor-pointer">
              <img
                className="w-16 h-2w-16 rounded-lg"
                src={userPhoto}
                alt="User photo"
              />
              <div>
                <h3>Username</h3>
                <p>Message</p>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-7 grid grid-rows-[0fr,1fr,0fr] gap-2 height-[calc(100vh - 8rem)] px-2">
          <div className="flex justify-between items-center border-b pb-2">
            <p className="text-3xl font-semibold">Valerin Cardenas</p>

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
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="mr-20 flex gap-2 bg-gray-100 p-3 rounded-lg shadow-md">
              <img
                className="w-12 h-2w-12 rounded-full"
                src={userPhoto}
                alt="User photo"
              />
              <div>
                <p>Message</p>
                <p>12/05/24</p>
              </div>
            </div>
            <div className="ml-20 flex gap-2 bg-gray-100 p-3 rounded-lg shadow-md">
              <img
                className="w-12 h-2w-12 rounded-full"
                src={userPhoto}
                alt="User photo"
              />
              <div>
                <p>Message</p>
                <p>12/05/24</p>
              </div>
            </div>
          </div>
          <div className="flex gap-4">
            <input
              className="w-full bg-stone-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              placeholder="Escribe un mensaje..."
            />
            <button className="bg-green-700 hover:bg-green-800 text-white font-semibold py-2 px-4 rounded-lg">
              Send
            </button>
          </div>
        </div>
      </section>
    </TemplateMain>
  );
};

export default ChangeChats;
