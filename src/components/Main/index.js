function Main() {
  const cards = [
    {
      id: 1,
      title: "Easy setup",
      details: [
        "No coding required",
        "Integrate with theme & CSS",
        "Work with OS 2.0 themes",
      ],
    },
    {
      id: 2,
      title: "Fast support",
      details: [
        "Available 24/7",
        "Live chat, email, calls, zoom",
        "1-1 personalized demo",
      ],
    },
    {
      id: 3,
      title: "Fit seamlessly into",
      details: [
        "POS",
        "Online Store 2.0, Ajax cart",
        "Google calendar",
        "Mobile screen",
        "Subscriptions",
      ],
    },
  ];
  return (
    <div className='main'>
      <div className=' w-[1061px]  mx-auto bg-white h-[100%] pb-16 lg:pb-0 lg:h-[855px] lg:bg-[url("../assests/img/image3.png")] bg-cover bg-no-repeat '>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-1'>
          <div className='flex justify-center items-center flex-col mt-[35px]'>
            <div className='w-[326px] h-[55px]  flex items-center tracking-widest'>
              <span className='font-medium text-[37px] leading-5 font-lobster  text-[#f62369]'>
                Why DingDoong?
              </span>
            </div>
            <div className='flex justify-center items-center flex-col mt-[10px]'>
              <div className='ct-card '>
                <div className='font-Fredericka  text-[#FED500] text-[70px] leading-4 '>
                  1
                </div>
                <div className='flex  pr-[280px] lg:pr-[0] items-start flex-col gap-3'>
                  <div className='font-Arvo font-normal text-[18px] text-[#0E1557]'>
                    Date & time slot for delivery, pickup
                  </div>
                  <div className='font-Inter  font-light text-[14.5px] leading-6 text-[#F62369]'>
                    Configure different delivery/pickup date & time for
                    individual days, products
                  </div>
                </div>
              </div>
              <div className='ct-card'>
                <div className=' font-Fredericka text-[#FED500] text-[70px] leading-4 '>
                  2
                </div>
                <div className='flex  pr-[280px] lg:pr-[0]  items-start flex-col gap-3'>
                  <div className='font-Arvo font-normal text-[18px] text-[#0E1557]'>
                    Distance validation
                  </div>
                  <div className='font-Inter  font-light text-[14.5px] leading-6 text-[#F62369]'>
                    Check the customer's delivery eligibility right on the
                    product page/cart page
                  </div>
                </div>
              </div>
              <div className='ct-card'>
                <div className=' font-Fredericka text-[#FED500] text-[70px] leading-4 '>
                  3
                </div>
                <div className='flex  pr-[320px] lg:pr-[0] items-start flex-col gap-3'>
                  <div className='font-Arvo font-normal text-[18px] text-[#0E1557]'>
                    Limit orders
                  </div>
                  <div className='font-Inter  font-light text-[14.5px] leading-6 text-[#F62369]'>
                    Limit the number of deliveries per day/time slot during
                    their peak time
                  </div>
                </div>
              </div>
              <div className='ct-card'>
                <div className=' font-Fredericka text-[#FED500] text-[70px] leading-4 '>
                  4
                </div>
                <div className='flex   pr-[300px] lg:pr-[0] items-start flex-col gap-3'>
                  <div className='font-Arvo font-normal text-[18px] text-[#0E1557]'>
                    Order management
                  </div>
                  <div className='font-Inter  font-light text-[14.5px] leading-6 text-[#F62369]'>
                    A built-in calendar, Export all order data, Sync orders to
                    Google calendar
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center flex-col mt-[50px] lg:mt-[-140px]'>
            <div className='w-[436px] h-[55px]  flex items-center tracking-widest'>
              <span className='font-medium text-[37px] leading-5 font-lobster text-[#f62369]'>
                Get the app easy for now
              </span>
            </div>
            <div className='mt-[40px]'>
              <div class='timeline'>
                <div class='outer'>
                  <div>
                    {cards.map((card) => (
                      <div key={card.id}>
                        {" "}
                        {card.id !== cards.length && (
                          <div className='timeline-marker pl-[9px] pt-2'>
                            {card.id}
                          </div>
                        )}
                        <div className={`card card-${card.id}`}>
                          <div className='info'>
                            <span className='title'>{card.title}</span>
                            <ul className='detail-card pr-[100px] lg:pr-[0]'>
                              {card.details.map((detail, index) => (
                                <li key={index}>{detail}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                        {card.id !== 3 && (
                          <div className='timeline-marker pl-[9px] pt-2'>3</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-center items-center lg:mt-[30px] mt-[170px] '>
          <a href='https://apps.shopify.com/delivery-date-omega'>
            <button className='btn-discover a'>Discover the app</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Main;
