import FlipCountdown from "@rumess/react-flip-countdown";
import Button from "../Button";

function Countdown() {
  return (
    <div className='countdown  w-[1060px] sm:h-[224px] h-[450px] bg-[url("../assests/img/image21.png")] bg-blue-950 bg-cover bg-no-repeat mx-auto'>
      <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-0 gap-32 '>
        <div className='flex justify-center items-center flex-col gap-10  pt-[60px]'>
          <div className=' text-white font-semibold text-[28px] leading-6 flex text-justify items-center'>
            Offer ends in
          </div>
          <div className=''>
            <div className='text-white'>
              <FlipCountdown
                hideYear
                hideMonth
                theme='dark'
                size='small'
                titlePosition='bottom'
                endAt={new Date(
                  Date.now() +
                    1000 /* sec */ *
                      60 /* min */ *
                      60 /* hour */ *
                      (3 * 24 + 10) +
                    1000 * 60 * (59 + 0)
                ).toUTCString()}
                dayTitle='Days'
                hourTitle='Hours'
                minuteTitle='Minutes'
                secondTitle='Seconds'
              />
            </div>
          </div>
        </div>
        <div className='flex relative justify-center items-center flex-col'>
          <div className='w-[253px] ml-[55px] absolute mt-[-20px] h-[45px] bg-[url("../assests/img/image22.png")]  bg-cover bg-no-repeat'></div>
          <div className='absolute mt-[80px] ml-[-130px]'>
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
