import { useRouter } from "next/router";
import { BsFillPeaceFill } from 'react-icons/bs';

const SidebarLogo = () => {
  const router = useRouter();
  
  return (
    <div 
      onClick={() => router.push('/')}
      className="
        rounded-none 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    ">
      <BsFillPeaceFill size={28} color="black" />
    </div>
  );
};

export default SidebarLogo;
