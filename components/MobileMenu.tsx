"use client";

import { X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

interface NavItem {
  name: string;
  href?: string;
  children?: { name: string; href: string }[];
}

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  navItems: NavItem[];
}

export default function MobileMenu({ open, onClose, navItems }: MobileMenuProps) {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <div
      className={`fixed inset-0 z-50 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      onClick={onClose}
    >
      {/* Panneau latéral */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`absolute top-0 right-0 h-full w-80 bg-[#0c2e25] border-l border-[#1d6047] shadow-xl transform transition-transform duration-300 ease-in-out
          ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#1d6047]">
          <h3 className="text-xl font-bold text-[#c8a45d]">Menu</h3>

          <button onClick={onClose} className="text-white hover:text-[#c8a45d]">
            <X size={28} />
          </button>
        </div>

        {/* ITEMS */}
        <nav className="px-6 py-6 space-y-3">
          {navItems.map((item) =>
            item.children ? (
              <div key={item.name}>
                <button
                  className="w-full flex justify-between items-center text-left text-white font-medium py-2 hover:text-[#c8a45d]"
                  onClick={() =>
                    setOpenDropdown(openDropdown === item.name ? null : item.name)
                  }
                >
                  {item.name}
                  <ChevronDown
                    size={20}
                    className={`transition-transform ${
                      openDropdown === item.name ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {openDropdown === item.name && (
                  <div className="pl-4 space-y-2 border-l border-[#1d6047]">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={onClose}
                        className="block text-gray-200 hover:text-[#c8a45d] py-1"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                onClick={onClose}
                className="block text-white font-medium py-2 hover:text-[#c8a45d]"
              >
                {item.name}
              </Link>
            )
          )}
        </nav>
      </div>
    </div>
  );
}
