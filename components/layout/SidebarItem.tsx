import { useCallback } from 'react';
import { IconType } from "react-icons";
import { useRouter } from 'next/router';

import useLoginModal from '@/hooks/useLoginModal';
import useCurrentUser from '@/hooks/useCurrentUser';
import { BsDot } from 'react-icons/bs';

interface SidebarItemProps {
  label: string;
  icon: IconType;
  href?: string;
  onClick?: () => void;
  auth?: boolean;
  alert?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ label, icon: Icon, href, auth, onClick, alert }) => {
  const router = useRouter();
  const loginModal = useLoginModal();

  const { data: currentUser } = useCurrentUser();

  const handleClick = useCallback(() => {
    if (onClick) {
      return onClick();
    }

    if (auth && !currentUser) {
      loginModal.onOpen();
    } else if (href) {
      router.push(href);
    }
  }, [router, href, auth, loginModal, onClick, currentUser]);

  return (
    <div onClick={handleClick} className="flex flex-row items-center">
      <div className="
        relative
        rounded-none
        h-14
        w-14
        flex
        items-center
        justify-center 
        p-4
        hover:bg-gray-300
        hover:bg-opacity-40
        cursor-pointer 
        lg:hidden
      ">
        <Icon size={28} color="black" />
        {alert ? <BsDot className="text-black absolute -top-4 left-0" size={70} /> : null}
      </div>
      <div className="
        relative
        hidden 
        lg:flex 
        items-row 
        gap-4 
        p-4 
        rounded-none 
        hover:bg-slate-300 
        hover:bg-opacity-10 
        cursor-pointer
        items-center
      ">
        <Icon size={24} color="black" />
        <p className="hidden lg:block text-black text-xl">
          {label}
        </p>
        {alert ? <BsDot className="black absolute -top-4 left-0" size={70} /> : null}
      </div>
    </div>
  );
}

export default SidebarItem;