import Star from "../Star";

function Slider() {
  return (
    <div className='slider relataive w-[1060px]  h-[600px] md:h-[535px] bg-white mx-auto flex flex-col   items-center'>
      <div
        id='carouselExampleInterval'
        class='carousel slide absolute mx-auto mt-[30px]'
        data-bs-ride='carousel'
      >
        <div class='carousel-inner  '>
          <div
            class='carousel-item active rounded mt-[3px] '
            data-bs-interval='4000'
          >
            <div className='flex w-[97%] h-[97%] mx-auto shadow-slide cursor-pointer pl-[60px] pt-[30px] gap-9'>
              <div className='sm:w-[280px] sm:h-[280px] sm:bg-[url("../assests/img/image13.png")] bg-cover bg-no-repeat'></div>
              <div className='flex flex-col gap-6'>
                <div className=' w-[200px] h-[45px] bg-[url("../assests/img/image6.png")] bg-cover bg-no-repeat'></div>
                <div className='flex'>
                  <Star />
                </div>
                <div className='w-[443px] font-Inter tracking-wide h-[87px] text-[16px] leading-5 font-light flex items-center text-justify text-[#F62369]'>
                  Great app for letting our customers select delivery date for
                  our flower delivery service. Looks great on our site, simple
                  to use, many options to suit any requirements and is fast
                  loading. Support is fantastic, Anna is lovely, kind and very
                  helpful. Highly recommended!
                </div>
                <div className=' flex gap-5'>
                  <div className='font-semibold text-[20px] tracking-wide  text-[#0E1557] flex justify-center items-center '>
                    Ashley Morris
                  </div>
                  <div className='font-normal mt-[3px] text-[16px]  text-[#0E1557] flex justify-center text-justify '>
                    United Kingdom
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='carousel-item   rounded mt-[3px] '
            data-bs-interval='4000'
          >
            <div className='flex w-[97%] h-[97%] mx-auto shadow-slide cursor-pointer pl-[60px] pt-[30px] gap-7'>
              <div className=' sm:w-[280px] sm:h-[280px] sm:bg-[url("../assests/img/image16.png")] bg-cover bg-no-repeat'></div>
              <div className='flex flex-col gap-6'>
                <div className=' w-[100px] h-[123px] mt-[-20px] bg-[url("../assests/img/image8.png")] bg-cover bg-no-repeat'></div>
                <div className='flex'>
                  <Star />
                </div>
                <div className='w-[443px] font-Inter tracking-wide h-[87px] text-[16px] leading-5 font-light flex items-center text-justify text-[#F62369]'>
                  Excellent support from the folk at DingDong. Answered my
                  question in a few minutes and then altered the app settings so
                  that it now works really well for me. Good Work Folks!!
                </div>
                <div className=' flex gap-5 pt-[-20px]'>
                  <div className='font-semibold mt-[-20px] text-[20px] tracking-wide  text-[#0E1557] flex justify-center items-center '>
                    Mark Mottram
                  </div>
                  <div className='font-normal mt-[-17px] text-[16px]  text-[#0E1557] flex justify-center text-justify '>
                    Singapore
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='carousel-item      rounded  mt-[3px]'
            data-bs-interval='4000'
          >
            <div className='flex w-[97%] h-[97%] mx-auto shadow-slide cursor-pointer pl-[60px] pt-[30px] gap-9'>
              <div className='sm:w-[280px] sm:h-[280px] sm:bg-[url("../assests/img/image18.png")] bg-cover bg-no-repeat'></div>
              <div className='flex flex-col gap-4 mt-[-20px]'>
                <div className=' w-[120px] h-[93px] bg-[url("../assests/img/image17.png")] bg-cover bg-no-repeat'></div>
                <div className='flex'>
                  <Star />
                </div>
                <div className='w-[443px] font-Inter tracking-wide h-[87px] text-[16px] leading-5 font-light flex items-center text-justify text-[#F62369]'>
                  Great app! Does exactly what I needed. Way easier to manage
                  (as a non-programmer) than what Shopify recommends with the
                  javascript calendar. Live chat support has been great too by
                  helping me optimising the app's loading speed and custom
                  styling to match my theme.
                </div>
                <div className=' flex gap-5 '>
                  <div className='font-semibold mt-[-10px] text-[20px] tracking-wide  text-[#0E1557] flex justify-center items-center '>
                    Andy Ward
                  </div>
                  <div className='font-normal mt-[-7px] text-[16px]  text-[#0E1557] flex justify-center text-justify '>
                    United States
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='carousel-item      rounded  mt-[3px]'
            data-bs-interval='4000'
          >
            <div className='flex w-[97%] h-[97%] mx-auto shadow-slide cursor-pointer pl-[60px] pt-[30px] gap-9'>
              <div className='sm:w-[280px] sm:h-[280px] sm:bg-[url("../assests/img/image19.png")] bg-cover bg-no-repeat'></div>
              <div className='flex flex-col gap-6'>
                <div className=' w-[102px] h-[49px] bg-[url("../assests/img/image14.png")] bg-cover bg-no-repeat'></div>
                <div className='flex mt-[-12px]'>
                  <Star />

                  <div className='w-[30px] h-[30px] bg-[url("../assests/img/image-star.png")] bg-cover bg-no-repeat'></div>
                </div>
                <div className='w-[443px] mt-[18px] font-Inter tracking-wide h-[87px] text-[16px] leading-5 font-light flex items-center text-justify text-[#F62369]'>
                  After searching through many tens of delivery date and time
                  slot app, this app is the best. The best part is, it is free
                  for now. Other apps may be free too but their customer service
                  is non-existant. DinDoong's team members like Anna, Kathy,
                  Mike and more are helpful with the very efficient support when
                  I have questions. This app is highly recommended as their
                  features are easy to use and supports detailed needs for
                  shops.
                </div>
                <div className=' flex gap-5 mt-[15px]'>
                  <div className='font-semibold text-[20px] tracking-wide  text-[#0E1557] flex justify-center items-center '>
                    Foodcrumz Pte Ltd
                  </div>
                  <div className='font-normal mt-[3px] text-[16px]  text-[#0E1557] flex justify-center text-justify '>
                    Singapore
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class='carousel-item      rounded  mt-[3px]'
            data-bs-interval='4000'
          >
            <div className='flex w-[97%] h-[97%] mx-auto shadow-slide cursor-pointer pl-[60px] pt-[30px] gap-9'>
              <div className='sm:w-[280px] sm:h-[280px] sm:bg-[url("../assests/img/image15.png")] bg-cover bg-no-repeat'></div>
              <div className='flex flex-col gap-6'>
                <div className=' w-[180px] h-[60px] bg-[url("../assests/img/image20.png")] bg-cover bg-no-repeat'></div>
                <div className='flex'>
                  <Star />
                </div>
                <div className='w-[443px] font-Inter tracking-wide h-[87px] text-[16px] leading-5 font-light flex items-center text-justify text-[#F62369]'>
                  Great App, very easy to use and has a lot of features. The
                  developers are brilliant and got the appearance on the website
                  looking great and on point. 5 Stars and great service!
                </div>
                <div className=' flex gap-5'>
                  <div className='font-semibold text-[20px] tracking-wide  text-[#0E1557] flex justify-center items-center '>
                    Konstantinos Baronos
                  </div>
                  <div className='font-normal mt-[3px] text-[16px]  text-[#0E1557] flex justify-center text-justify '>
                    United Kingdom
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          class='carousel-control-prev '
          type='button '
          data-bs-target='#carouselExampleInterval'
          data-bs-slide='prev'
        >
          <span class='carousel-control-prev-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Previous</span>
        </button>
        <button
          class='carousel-control-next'
          type='button'
          data-bs-target='#carouselExampleInterval'
          data-bs-slide='next'
        >
          <span class='carousel-control-next-icon' aria-hidden='true'></span>
          <span class='visually-hidden'>Next</span>
        </button>
      </div>
      <div className='btn-become-our-clients'>
        <a href='https://apps.shopify.com/delivery-date-omega?'>
          <button>Become our clients</button>
        </a>
      </div>
    </div>
  );
}

export default Slider;
