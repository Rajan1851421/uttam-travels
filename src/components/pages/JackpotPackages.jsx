import  { useEffect } from "react"
import Glide from "@glidejs/glide"

export default function CarouselControlsOutside() {
  useEffect(() => {
    const slider = new Glide(".glide-04", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3500,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with controls outside --> */}
      <div className="glide-04 relative  mx-14 ">
        {/*    <!-- Slides --> */}
        <div className="overflow-hidden" data-glide-el="track">
          <ul className="whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src="https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://images.pexels.com/photos/116675/pexels-photo-116675.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://images.pexels.com/photos/100656/pexels-photo-100656.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
            <li>
              <img
                src="data:image/jpeg;base64,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"
                className="m-auto max-h-full w-full max-w-full"
              />
            </li>
          </ul>
        </div>
        {/*    <!-- Controls --> */}
        <div
          className="flex w-full items-center justify-center gap-2 p-4"
          data-glide-el="controls"
        >
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir="<"
            aria-label="prev slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>prev slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
              />
            </svg>
          </button>
          <button
            className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-700 bg-white/20 text-slate-700 transition duration-300 hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none lg:h-12 lg:w-12"
            data-glide-dir=">"
            aria-label="next slide"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <title>next slide</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with controls outside --> */}
    </>
  )
}