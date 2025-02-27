import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    "I’m Will Johnson. I live in New York City, where I'm building the future.",
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I’m Will Johnson. I live in New York City, where I am building the future.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I’ve loved making things, both physical and digital for as long as I can remember, and have been making websites and exploring the internet since my earliest memories.
            </p>
            <p>
              I've always loved solving difficult problems, finding balance outside of my comfort zone and understanding how things work.
              Whether it was how my computer connected to the internet and how I could build on it or how to fix bikes and repair surfboards, I've always been driven to understand things and use that understanding to better interact with the world around me.
            </p>
            <p>
              My passion for learning, acquiring skills, refining them and sharing that knowledge and the fruits of my skills has maintained throughout my life.
              I've worked in many different fields but in 2016 I committed myself full-time to working in Software and the Internet and have since worked in several different sectors, primarily Data, Analytics, E-Commerce and Web3. Across all of these expereinces, I have continued to find new problems to solve and new skills to master. I've also had the opportunity to build and lead several teams of talented engineers and designers and analysts in this time.
            </p>
            <p>
              Since 2021 I've been immersed in developing websites, smart contracts and products for artists and collectors in the Web3 ecosystem. In this time I've had the opportunity to learn many new technologies, develop novel experiences, build teams and products and meet a lot of really great people along the way.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/wcj111" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://github.com/wcjohnson11" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/wcj11/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:hi@willpickle.come"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              hi@willpickle.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
