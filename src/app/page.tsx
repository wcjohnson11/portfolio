import Image, { type ImageProps } from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import {
  GitHubIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import logoAtomicForm from '@/images/logos/atomicform.svg'
import logoMikMak from '@/images/logos/mikmak.svg'
import logoSegment from '@/images/logos/segment.svg'
import logoAllships from '@/images/logos/allshipsNexus.png'
import logoMindMakers from '@/images/logos/mindmakers.png'

import Avatar from '@/images/avatar.jpg'

interface ProjectType {
  name: string
  description: string
  link: {href: string, label: string}
}

const projects: ProjectType[] = [
  {
    name: 'Atomic Lore',
    description:
      'A Web3 platform for creating, indexing and exploring cryptographically attested provenance for NFTs',
    link: { href: 'https://atomiclore.io', label: 'atomiclore.io' },
  },
  {
    name: 'Allships',
    description:
      'The Webapp for the Allships Creative Community, including a Web3 integrated ecommerce experience with token-gated discounts for holders of Allships NFTs',
    link: { href: 'https://allships.co', label: 'allships.co' },
  },
  {
    name: 'Drip Drop',
    description:
      'A Webapp for mint and post-mint interactions with the Drip Drop NFT Collection',
    link: { href: 'https://dripdrop.allships.co', label: 'dripdrop.allships.co' },
  },
]

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}
// @ts-ignore
function BriefcaseIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ProjectEntry({ entry }: { entry: ProjectType }) {
  return (
    <Card>
      <Card.Title href={entry.link.href} openInNew={true}>
        {entry.name}
      </Card.Title>
      <Card.Description>{entry.description}</Card.Description>
      <Card.Cta>{entry.link.label}</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40"
    >
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(--spacing(2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-teal-500 focus:ring-4 focus:ring-teal-500/10 focus:outline-hidden sm:text-sm dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-teal-400 dark:focus:ring-teal-400/10"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 shadow-md shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 bg-zinc-400 dark:ring-0">
        <Image src={role.logo} alt="" className="h-auto w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Atomic Form',
      title: 'Software Engineer',
      logo: logoAtomicForm,
      start: '2021',
      end: '2025',
    },
    {
      company: 'Allships',
      title: 'Software Engineer',
      logo: logoAllships,
      start: '2021',
       end: '2025',
    },
    {
      company: 'WCJ Freelance',
      title: 'Software Engineer',
      logo: Avatar,
      start: '2021',
       end: '2025',
    },
    {
      company: 'MikMak',
      title: 'Software Engineer/Eng Manager',
      logo: logoMikMak,
      start: '2019',
      end: '2021',
    },
        {
      company: 'MindMakers',
      title: 'Software Engineer',
      logo: logoMindMakers,
      start: '2016',
      end: '2019',
    },
    {
      company: 'Segment',
      title: 'Software Engineer',
      logo: logoSegment,
      start: '2014',
      end: '2016',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button href="https://drive.usercontent.google.com/u/0/uc?id=1CgSy6GXeKfKABUGI3LeUYmDXWN8M8X5i&export=download" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

function Tech() {

  const TechLibs = [
    {name: "Javascript"
      // , logo: logoJavascript
    },
    {name: "Typescript"
      // , logo: logoTypescript
    },
    {name: "Node"
      // , logo: logoNode
    },
    {name: "React"
      // , logo: logoReact
    },
    {name: "Next.js"
      // , logo: logoNext
    },
    {name: "Remix"
      // , logo: logoRemix
    },
    {name: "Tailwind"
      // , logo: logoTailwind
    },
    {name: "Solidity"
      // , logo: logoSolidity
    },
    {name: "GraphQL"
      // , logo: logoGraphQL
    },
    {name: "Wagmi/Viem"
      // , logo: logoWagmiLight, logoDark: logoWagmiDark
    },
    {name: "D3.js"
      // , logo: logoViemLight, logoDark: logoViemDark
    },
    {name: "Jira"
      // , logo: logoJira
    },
  ]

  return (
    <div className="mt-16 sm:mt-20">
      <h1 className="text-xl font-bold">Technology I use</h1>
      <h3 className="mt-6 text-base text-zinc-600 dark:text-zinc-400">Not an exhaustive list but here are some of my most commonly used tools, technologies and libraries:</h3>

      <ul role="list" className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4">
        {TechLibs.map((lib) => (
          <li key={lib.name} className="col-span-1 flex border border-gray-500 rounded-md shadow-sm bg-gray-300 dark:bg-gray-600 text-black dark:text-white">
            {/* <div
              className={
                'flex w-16 shrink-0 items-center justify-center rounded-l-md text-sm font-medium text-white bg-white'
              }
            >
              <Image src={lib.logo} alt={lib.name} className="h-7 w-auto" unoptimized/>
            </div> */}
            <div className="flex flex-1 items-center justify-between truncate">
              <div className="flex-1 truncate px-2 py text-xs">
                <p className="font-medium">
                  {lib.name}
                </p>
                {/* <p className="text-gray-500">{project.members} Members</p> */}
              </div>
              {/* <div className="shrink-0 pr-2">
                <button
                  type="button"
                  className="inline-flex size-8 items-center justify-center rounded-full bg-transparent bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="sr-only">Open options</span>
                  <EllipsisVerticalIcon aria-hidden="true" className="size-5" />
                </button>
              </div> */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default async function Home() {

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            Software engineer and real human being.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I’m Will, a software engineer and real human being based in New York City. I am a lifelong student in pursuit of mastering my craft, leveling up those around me and focused on building the future.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink href="https://x.com/wcj111" aria-label="Follow on X" icon={XIcon} />
            <SocialLink
              href="https://github.com/wcjohnson11"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/wcj11/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <Tech />
        {/* <SectionTechnology /> */}
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <h2 className="text-xl font-bold">Latest Projects</h2>
            {projects.map((project) => (
              <ProjectEntry key={project.name} entry={project} />
            ))}
            <Button className="mt-8" href={`/projects`}>See more Recent Projects</Button>
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Newsletter />
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
