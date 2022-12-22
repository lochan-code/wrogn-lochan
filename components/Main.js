import React from "react";
import Image from "next/image";
if (typeof window !== "undefined") {
  var indexValue = 0;
  function slideShow() {
    setTimeout(slideShow, 5500);
    var x;
    const img = document.querySelectorAll("#sliderwaliimg");
    for (x = 0; x < img.length; x++) {
      img[x].style.display = "none";
    }
    indexValue++;
    if (indexValue > img.length) {
      indexValue = 1;
    }
    img[indexValue - 1].style.display = "block";
  }
  slideShow();
}
const Main = () => {
  return (
    <div>
      <div className="content">
        <div className="images">
          <img
            id="sliderwaliimg"
            src="/tinywow_Homepage_Banner2_2_7255514.webp"
          />
          <img
            id="sliderwaliimg"
            src="/tinywow_wrogn_active_Homepage_Banner1_5045689.webp"
          />
          <img
            id="sliderwaliimg"
            src="/tinywow_WROGN_WEBSITE_BANNER_7341324.webp"
          />
        </div>
      </div>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              BEST OFFERS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
             Only the best for the best - BIG discounts, BIG savings!
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="p-\1 cursor-pointer hover:-translate-y-5 transition-all">
              <Image
                alt="gallery"
                width={300}
                height={50}
                className="w-40 sm:w-48 md:w-56 lg:w-64"
                src="/tinywow_BASICS_7300068_ojWfTyv.webp"
              />
            </div>
            <div className="cursor-pointer hover:-translate-y-5 transition-all">
              <Image
                alt="gallery"
                width={300}
                height={50}
                className="w-40 sm:w-48 md:w-56 lg:w-64"
                src="/tinywow_FORMAL_7300107_l3kdFzQ.webp"
              />
            </div>
            <div className="cursor-pointer hover:-translate-y-5 transition-all">
              <Image
                alt="gallery"
                width={300}
                height={50}
                className="w-40 sm:w-48 md:w-56 lg:w-64"
                src="/tinywow_GRAPHICS_7300125_b3W93N9.webp"
              />
            </div>
            <div className="cursor-pointer hover:-translate-y-5 transition-all">
              <Image
                alt="gallery"
                width={300}
                height={50}
                className="w-40 sm:w-48 md:w-56 lg:w-64"
                src="/tinywow_LAYER_IT_UP_7300154_5VuwN3e.webp"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              MUST HAVES
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              You Can’t Resist These Styles or Prices! Just Try.
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="m-2 p-\1 cursor-pointer  transition-all">
              <Image
                alt="gallery"
                width={300}
                className='rounded-lg shadow-sm'
                height={50}
                src="/DENIMS-UNDER-1499_446X143_CzZKTz8.webp"
              />
            </div>
            <div className="m-2 cursor-pointer  transition-all">
              <Image
                alt="gallery"
                width={300}
                className='rounded-lg shadow-sm'
                height={50}
                src="/SHIRT-UNDER-999_446X143_7h1jUOg.webp"
              />
            </div>
            <div className="m-2 cursor-pointer  transition-all">
              <Image
                alt="gallery"
                width={300}
                className='rounded-lg shadow-sm'
                height={50}
                src="/T-SHIRT-UNDER-499_446X143_GQzDqzM.webp"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font mb-10">
        <div className="container px-5 mx-auto">
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              BRANDS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Join the Youth Fashion Movement
            </p>
          </div>
          <div className="flex flex-wrap -m-4 justify-center items-center">
            <div className="p-2 bg-slate-200 rounded-lg m-2 p-\1 cursor-pointer  transition-all">
              <Image
                alt="gallery"
                width={400}
                className='shadow-sm'
                height={50}
                src="/tinywow_jpg_to_webp_4013343.webp"
              />
            </div>
            <div className="p-2 bg-slate-200 rounded-lg m-2 cursor-pointer  transition-all">
              <Image
                alt="gallery"
                width={400}
                className=' shadow-sm'
                height={50}
                src="/Website_banner_Swag_On.webp"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
