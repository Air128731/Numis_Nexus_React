export default function Example() {
    return (
      <section className="relative px-6 py-24 overflow-hidden bg-white isolate sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="max-w-2xl mx-auto lg:max-w-4xl">
          <img className="h-12 mx-auto" src="https://tailwindui.com/img/logos/workcation-logo-indigo-600.svg" alt="" />
          <figure className="mt-10">
            <blockquote className="font-semibold leading-8 text-center text-gray-900 text-md sm:text-md sm:leading-9">
              <p>
                Francis, AKA Taris, fell in love with crypto and the world of Ethereum and digital assets around 2015.<br></br>
                From there he was watched from the sidelines, trading and enjoying the collectibles and new use cases.<br></br>
                Today, he is working with his team to develop and design a new collectible brand of his own.<br></br>
                Numis Nexus isn’t just A collection, it’s a brand. It’s a journey through history one mint at a time.<br></br>
                Today he is excited to present Nexus Genesis and have you embark upon the collectibles and Numismatic journey with him!
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <img
                className="w-10 h-10 mx-auto rounded-full"
                src="img/taris.png"
                alt=""
              />
              <div className="flex items-center justify-center mt-4 space-x-3 text-base">
                <div className="font-semibold text-gray-900">Francis Crevatas</div>
                <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                  <circle cx={1} cy={1} r={1} />
                </svg>
                <div className="text-gray-600">Owner & CEO</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  