import { MenuIcon } from "@heroicons/react/outline";
import { ButtonNav } from "../../button";
import { Menu, Transition } from "@headlessui/react";
import { Icon } from '@iconify/react';
import { useState, Fragment } from "react";

const Navbar = (status, onChanged) => {
  const [isOpen, setIsOpen] = useState(false);
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="flex justify-center items-center flex-col right-0 left-0 min-w-fit ">
      <nav className="font-Poppins backdrop-blur-sm bg-white/40 h-24 absolute top-0 left-0 min-w-fit right-0 z-50">
        <div className=" px-3 h-full flex justify-between md:justify-around md:px-80 items-center">
          <div className="bg-[rgba(0, 0, 0, 0)]">

            <div className="flex justify-center">
              <Menu as="div" className="relative">
                <div>
                  <Menu.Button className="inline-flex justify-center w-full rounded-md">
                    <a
                      href="#"
                      className="block focus:text-blue-700 text-[#a8b8f1] focus:outline-none ml-[15px]"
                    >
                      <div className="flex items-start text-sm">
                        <MenuIcon className="text-white bg-transparent" width={35} height={35} />
                        <p className=" mx-1.5 text-[12px] font-semibold text-[#a8b8f1] py-2">
                        </p>
                      </div>
                    </a>
                  </Menu.Button>
                </div>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items className="origin-top-right absolute text-[] left-12 mt-2 w-72 h-96 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <Menu.Item className=" text-[#457275] text-lg ml-5 h-min">
                        {({ active }) => (
                          <a
                            href="./for-you"
                            className={classNames(
                              active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex flex-row ml-7 h-min border-b-2 w-56 mt-2">
                              <Icon icon="bx:home-alt" width={24} height={24} />
                              <p className="ml-2 mb-3">
                                Beranda
                              </p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item className=" text-[#457275] text-lg ml-5">
                        {({ active }) => (
                          <a
                            href="./challenges"
                            className={classNames(
                              active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex flex-row ml-7 h-min border-b-2 w-56">
                              <Icon icon="lucide:tent" width={24} height={24} />
                              <p className="ml-2 mb-3">
                                Tantangan
                              </p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item className=" text-[#457275] text-lg ml-5">
                        {({ active }) => (
                          <a
                            href="./communities"
                            className={classNames(
                              active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex flex-row ml-7 h-min border-b-2 w-56">
                              <Icon icon="akar-icons:people-group" width={24} height={24} />
                              <p className="ml-2 mb-3">
                                Komunitas
                              </p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item className=" text-[#457275] text-lg ml-5">
                        {({ active }) => (
                          <a
                            href="./destinations"
                            className={classNames(
                              active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex flex-row ml-7 h-min border-b-2 w-56">
                              <Icon icon="uil:map-pin" width={24} height={24} />
                              <p className="ml-2 mb-3">
                                Destinasi Wisata
                              </p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item className=" text-[#457275] text-lg ml-5">
                        {({ active }) => (
                          <a
                            href="./about-us"
                            className={classNames(
                              active ? "bg-blue-100 text-gray-900" : "text-gray-700",
                              "block px-4 py-2 text-sm"
                            )}
                          >
                            <div className="flex flex-row ml-7 h-min">
                              <Icon icon="icon-park-outline:oval-love-two" width={24} height={24} />
                              <p className="ml-2">
                                About Us
                              </p>
                            </div>
                          </a>
                        )}
                      </Menu.Item>

                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>

          </div>
          <div className="flex justify-start">
            <div className="text-white px-4 font-medium">
              <a href="./registration">
                Daftar
              </a>
            </div>
            <div>
              <a href="./login">
                <ButtonNav type="" label="Masuk" />
              </a>
            </div>
          </div>
        </div>
      </nav >
    </div >
  )
}

export default Navbar;