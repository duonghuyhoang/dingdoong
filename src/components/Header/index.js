import Button from "../Button";

function Header() {
  return (
    <header className='relative mx-auto mt-20 w-[1060px] h-[265.25px] bg-[url("../assests/img/image2.png")] bg-cover bg-no-repeat  '>
      <div className='absolute animate-shake  mt-[-77px] ml-[-80px]  w-[200px]  h-[200px] bg-[url("../assests/img/image4.png")] bg-cover bg-no-repeat '></div>
      <div className='mt-[195px] ml-[170px] absolute '>
        <Button />
      </div>
    </header>
  );
}

export default Header;
