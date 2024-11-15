import { useState } from "react";

export const RatingApp = () => {
  const [openReview, setOpenReview] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  const handleOpenReview = () => {
    setOpenReview(!openReview);
  };

  const handleRating = (index) => {
    setRating(index + 1);
  };

  const handleHover = (index) => {
    setHoverRating(index + 1);
  };

  const handleMouseLeave = () => {
    setHoverRating(0);
  };

  return (
    <>
      <button
        onClick={handleOpenReview}
        className="fixed bottom-4 right-4 bg-green-500 p-3 rounded-full hover:p-4 duration-300"
      >
        <svg
          className="w-6 h-6 text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.849 4.22c-.684-1.626-3.014-1.626-3.698 0L8.397 8.387l-4.552.361c-1.775.14-2.495 2.331-1.142 3.477l3.468 2.937-1.06 4.392c-.413 1.713 1.472 3.067 2.992 2.149L12 19.35l3.897 2.354c1.52.918 3.405-.436 2.992-2.15l-1.06-4.39 3.468-2.938c1.353-1.146.633-3.336-1.142-3.477l-4.552-.36-1.754-4.17Z" />
        </svg>
      </button>

      <div
        className={`fixed inset-0 z-[999] grid h-screen w-screen place-items-center bg-black bg-opacity-60 backdrop-blur-sm transition-opacity duration-300 ${
          openReview
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="relative m-4 p-4 w-2/5 min-w-[40%] max-w-[40%] rounded-lg bg-white shadow-sm transition-opacity duration-300">
          <div className="flex shrink-0 items-center pb-4 text-xl font-medium text-slate-800">
            Calificar nuestra app
          </div>
          <div className="relative border-t border-slate-200 py-4 leading-normal text-slate-600 font-light">
            <div className="px-4 py-2 space-y-1 bg-white rounded-t-lg dark:bg-gray-800">
              <label
                htmlFor="comment"
                className="
                block
                mb-2
                text-base
                font-medium
                text-gray-900
              "
              >
                Califica
              </label>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[...Array(5)].map((_, index) => (
                    <svg
                      key={index}
                      onClick={() => handleRating(index)}
                      onMouseEnter={() => handleHover(index)}
                      onMouseLeave={handleMouseLeave}
                      className={`w-8 h-8 ms-3 cursor-pointer ${
                        index < (hoverRating || rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }`}
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 22 20"
                    >
                      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="px-4 py-2 space-y-1 bg-white rounded-t-lg">
              <label
                htmlFor="comment"
                className="
                block
                mb-2
                text-base
                font-medium
                text-gray-900
              "
              >
                Mensaje
              </label>
              <textarea
                id="comment"
                rows="4"
                className="w-full resize-none h-40 p-3 rounded-lg text-base text-gray-900 bg-white border"
                placeholder="Escribe un mensaje..."
                required
              ></textarea>
            </div>
          </div>
          <div className="flex shrink-0 flex-wrap items-center pt-4 justify-end border-t">
            <button
              className="rounded-md border border-transparent py-2 px-4 text-center text-sm transition-all text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              onClick={handleOpenReview}
            >
              Cancel
            </button>
            <button
              className="rounded-md bg-green-500 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-green-700 focus:shadow-none active:bg-green-700 hover:bg-green-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-2"
              type="button"
              onClick={handleOpenReview}
            >
              Confirm
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
