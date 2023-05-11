import type { MDXComponents } from 'mdx/types'
import Link from 'next/link'
import React from 'react'

function Heading1({ children }: { children?: React.ReactNode }) {
  return (
    <h1 className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
              before:font-light before:text-rose-600 before:dark:text-cyan-400
              font-bold mt-4 mb-2 text-2xl leading-7">
      {children}
    </h1>
  )
}

function Heading2({ children }: { children?: React.ReactNode }) {
  return (
    <h2 className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
             before:font-light before:text-rose-600 before:dark:text-cyan-400
             font-bold mt-4 mb-2 text-xl leading-7">
      {children}
    </h2>
  )
}

function Heading3({ children }: { children?: React.ReactNode }) {
  return (
    <h3 className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
             before:font-light before:text-rose-600 before:dark:text-cyan-400
             font-bold mt-4 mb-2 text-lg leading-7">
      {children}
    </h3>
  )
}

function Heading4({ children }: { children?: React.ReactNode }) {
  return (
    <h4 className="before:content-['#'] before:-ml-5 before:w-5 before:inline-block
             before:font-light before:text-rose-600 before:dark:text-cyan-400
             font-bold mt-4 mb-2 text-md leading-7">
      {children}
    </h4>
  )
}

export const mdxComponents: MDXComponents = {
  // Override the default <a> element to use the next/link component.
  a: ({ href, children }) => <Link href={href as string}>{children}</Link>,
  code: ({ children }) => <code className="font-mono text-sm text-rose-600 dark:text-cyan-400 px-1 py-0.5">{children}</code>,
  p: ({ children }) => <p className="my-2">{children}</p>,
  h1: Heading1,
  h2: Heading2,
  h3: Heading3,
  h4: Heading4,
  h5: Heading4,
  h6: Heading4,
}
