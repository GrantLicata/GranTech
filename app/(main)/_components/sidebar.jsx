import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

const navigation = [
  {
    name: "Laptops & Computers",
    current: false,
    children: [
      { name: "Laptops", href: "#" },
      { name: "Hard Drives, SSD & Storage", href: "#" },
      { name: "Monitors", href: "#" },
      { name: "Mice", href: "#" },
      { name: "Keyboards", href: "#" },
      { name: "Desktops", href: "#" },
      { name: "Laptop Accessories", href: "#" },
      { name: "Cables & Connectors", href: "#" },
      { name: "Computer Accessories & Peripherals", href: "#" },
    ],
  },
  {
    name: "TVs & Projectors",
    current: false,
    children: [
      { name: "Sub-category", href: "#" },
      { name: "Sub-category", href: "#" },
      ,
    ],
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  return (
    <div className="flex flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 w-64">
      <div className="flex h-16 shrink-0 items-center">
        <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="h-8 w-auto"
        />
      </div>
      <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Disclosure as="div">
                    <DisclosureButton
                      className={classNames(
                        item.current ? "bg-gray-50" : "hover:bg-gray-50",
                        "group flex w-full items-center gap-x-3 rounded-md p-2 text-left text-sm/6 font-semibold text-gray-700"
                      )}
                    >
                      <ChevronRightIcon
                        aria-hidden="true"
                        className="size-5 shrink-0 text-gray-400 group-data-[open]:rotate-90 group-data-[open]:text-gray-500"
                      />
                      {item.name}
                    </DisclosureButton>
                    <DisclosurePanel as="ul" className="mt-1 px-2">
                      {item.children.map((subItem) => (
                        <li key={subItem.name}>
                          <DisclosureButton
                            as="a"
                            href={subItem.href}
                            className={classNames(
                              subItem.current
                                ? "bg-gray-50"
                                : "hover:bg-gray-50",
                              "block rounded-md py-2 pl-9 pr-2 text-sm/6 text-gray-700"
                            )}
                          >
                            {subItem.name}
                          </DisclosureButton>
                        </li>
                      ))}
                    </DisclosurePanel>
                  </Disclosure>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
