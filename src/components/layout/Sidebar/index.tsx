import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import mark from '@/assets/brand_mark_primary.png';
import logo from '@/assets/brand_primary.png';

import useSidebar from './index.hooks';

const Sidebar = () => {
  const {
    isCollapsed,
    menus,
    isActive,
  } = useSidebar();
  return (
    <aside
      className={`${!isCollapsed ? 'w-64' : 'w-24'} fixed h-full drop-shadow-xl z-50 transition-width transition-slowest ease`}
      aria-label="Sidebar"
    >
      <div className="overflow-y-auto bg-gray-50 h-full px-2">
        <div className="flex justify-center mb-10 p-2">
          <Link href="/">
            <Image
              src={!isCollapsed ? logo : mark}
              alt="Brand Logo"
              className="min-h-[5rem] h-5 w-auto object-contain"
              priority
            />
          </Link>
        </div>
        <ul className="space-y-2 text-gray-600 list-none p-0">
          {menus.map((menu) => (
            <li key={menu.path}>
              <Link
                href={menu.path}
                className={`flex ${isCollapsed && 'justify-center'} items-center p-2 text-base 
                font-normal rounded-lg hover:bg-gray-200 gap-2 visited:text-neutral-700 
                no-underline ${isActive(menu.path) && 'bg-gray-200 shadow-inner'}`}
              >
                {menu.icon}
                <span>
                  {!isCollapsed ? menu.name : ''}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
