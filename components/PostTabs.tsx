"use client";

import Image from "next/image";
import { Tab } from "@headlessui/react";
import PostGrid from "./PostGrid";

import LogoImg from "@/images/logo.png";
import { Post } from "@/.contentlayer/generated";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

interface TabConfig {
  title: string;
  filter: (post: Post) => boolean;
}

export default function PostTabs() {
  const tabs: TabConfig[] = [
    { title: "All", filter: (p: Post) => true },
    { title: "En", filter: (p: Post) => p.lang == "en" },
    { title: "中", filter: (p: Post) => p.lang == "zh-CN" },
  ];

  return (
    <Tab.Group>
      <div className="flex justify-between items-center">
        <h1 className="flex my-4 items-center space-x-4">
          <Image src={LogoImg.src} width={32} height={32} alt="logo" />
          <span className="font-overpass inline-block pt-2 font-bold text-3xl">
            Skyward
          </span>
        </h1>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900 p-1">
          {tabs.map((tab) => (
            <Tab
              key={tab.title}
              className={({ selected }) =>
                classNames(
                  "w-10 rounded-lg py-1 text-sm font-medium leading-5",
                  "ring-white/60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2",
                  selected
                    ? "bg-white text-blue-700 shadow"
                    : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                )
              }
            >
              {tab.title}
            </Tab>
          ))}
        </Tab.List>
      </div>
      <Tab.Panels className="mt-2">
        <Tab.Panel>
          <PostGrid />
        </Tab.Panel>
        <Tab.Panel>
          <PostGrid filter={(p) => p.lang == "en"} />
        </Tab.Panel>
        <Tab.Panel>
          <PostGrid filter={(p) => p.lang == "zh-CN"} />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}