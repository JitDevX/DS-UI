import { useState } from 'react'
import { Navbar } from '@ui/components/Navbar'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'
import Playground from '../components/docs/Playground'

// Sample links for previews
const sampleLinks = [
  { label: 'Home',     href: '#', active: true  },
  { label: 'Docs',     href: '#', active: false },
  { label: 'Blog',     href: '#', active: false },
  { label: 'Pricing',  href: '#', active: false },
]

// Playground config
const navbarControls = [
  {
    name: 'logo',
    type: 'text',
    default: 'DS-UI',
  },
  {
    name: 'variant',
    type: 'select',
    default: 'default',
    options: ['default', 'transparent', 'blur', 'solid'],
  },
  {
    name: 'sticky',
    type: 'boolean',
    default: false,
  },
]

const generateNavbarCode = (values) => {
  const props = []
  if (values.logo !== 'DS-UI')       props.push(`logo="${values.logo}"`)
  if (values.variant !== 'default')  props.push(`variant="${values.variant}"`)
  if (values.sticky)                 props.push('sticky')

  const linksCode = `links={[
    { label: 'Home',    href: '/', active: true  },
    { label: 'Docs',    href: '/docs'            },
    { label: 'Blog',    href: '/blog'            },
    { label: 'Pricing', href: '/pricing'         },
  ]}`

  props.push(linksCode)

  return `<Navbar\n  ${props.join('\n  ')}\n/>`
}

export default function NavbarPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🧭</span>
          <h1 className="text-4xl font-black text-white">Navbar</h1>
        </div>
        <p className="text-white/40 text-lg">
          Responsive navigation bar with 4 variants, mobile menu, and action slots. Zero dependencies.
        </p>
      </div>

      {/* Playground */}
      <Playground
        title="Interactive Playground"
        controls={navbarControls}
        renderPreview={(values) => (
          <div className="w-full rounded-xl overflow-hidden border border-white/10">
            <Navbar
              logo={values.logo}
              variant={values.variant}
              sticky={values.sticky}
              links={sampleLinks}
              actions={
                <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Started
                </button>
              }
            />
          </div>
        )}
        generateCode={generateNavbarCode}
      />

      {/* Variants */}
      <ComponentPreview
        title="Variants"
        description="4 visual styles — default, transparent, blur, solid"
        preview={
          <div className="w-full flex flex-col gap-4">
            {['default', 'transparent', 'blur', 'solid'].map((variant) => (
              <div key={variant} className="rounded-xl overflow-hidden border border-white/10">
                <Navbar
                  variant={variant}
                  logo="DS-UI"
                  links={sampleLinks}
                />
              </div>
            ))}
          </div>
        }
        jsxCode={`import { Navbar } from '@/components/ui/Navbar'

<Navbar variant="default"     logo="DS-UI" links={links} />
<Navbar variant="transparent" logo="DS-UI" links={links} />
<Navbar variant="blur"        logo="DS-UI" links={links} />
<Navbar variant="solid"       logo="DS-UI" links={links} />`}
        htmlCode={`<!-- Default Navbar -->
<nav class="w-full bg-[#111111] border-b border-white/10">
  <div class="max-w-6xl mx-auto px-6">
    <div class="flex items-center justify-between h-16">

      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center">
          <span class="text-white font-black text-sm">DS</span>
        </div>
        <span class="text-white font-bold text-lg">DS-UI</span>
      </div>

      <!-- Links -->
      <div class="hidden md:flex items-center gap-1">
        <a href="/" class="px-4 py-2 rounded-lg text-sm font-medium text-white bg-white/10">Home</a>
        <a href="/docs" class="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5">Docs</a>
        <a href="/blog" class="px-4 py-2 rounded-lg text-sm font-medium text-white/60 hover:text-white hover:bg-white/5">Blog</a>
      </div>

      <!-- Action -->
      <button class="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 font-medium">
        Get Started
      </button>

    </div>
  </div>
</nav>`}
      />

      {/* With Actions */}
      <ComponentPreview
        title="With Actions"
        description="Right side action buttons slot"
        preview={
          <div className="w-full rounded-xl overflow-hidden border border-white/10">
            <Navbar
              logo="DS-UI"
              links={sampleLinks}
              actions={
                <div className="flex items-center gap-2">
                  <button className="px-4 py-1.5 text-white/60 text-sm rounded-lg hover:text-white hover:bg-white/5 transition-all font-medium">
                    Login
                  </button>
                  <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    Sign Up
                  </button>
                </div>
              }
            />
          </div>
        }
        jsxCode={`<Navbar
  logo="DS-UI"
  links={[
    { label: 'Home',    href: '/', active: true },
    { label: 'Docs',    href: '/docs'           },
    { label: 'Pricing', href: '/pricing'        },
  ]}
  actions={
    <div className="flex items-center gap-2">
      <button className="px-4 py-1.5 text-white/60 text-sm rounded-lg hover:text-white hover:bg-white/5 font-medium">
        Login
      </button>
      <button className="px-4 py-1.5 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 font-medium">
        Sign Up
      </button>
    </div>
  }
/>`}
        htmlCode={`<nav class="w-full bg-[#111111] border-b border-white/10">
  <div class="max-w-6xl mx-auto px-6">
    <div class="flex items-center justify-between h-16">
      <span class="text-white font-bold text-lg">DS-UI</span>
      <div class="hidden md:flex items-center gap-1">
        <a href="/" class="px-4 py-2 text-sm text-white bg-white/10 rounded-lg">Home</a>
        <a href="/docs" class="px-4 py-2 text-sm text-white/60 hover:text-white rounded-lg">Docs</a>
      </div>
      <div class="flex items-center gap-2">
        <button class="px-4 py-1.5 text-sm text-white/60 hover:text-white rounded-lg font-medium">Login</button>
        <button class="px-4 py-1.5 text-sm bg-blue-600 text-white rounded-lg font-medium">Sign Up</button>
      </div>
    </div>
  </div>
</nav>`}
      />

      {/* Mobile Responsive */}
      <ComponentPreview
        title="Mobile Responsive"
        description="Hamburger menu auto appears on small screens — resize window to test"
        preview={
          <div className="w-72 rounded-xl overflow-hidden border border-white/10">
            <Navbar
              logo="DS-UI"
              links={sampleLinks}
              actions={
                <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm rounded-lg font-medium">
                  Get Started
                </button>
              }
            />
          </div>
        }
        jsxCode={`// Navbar automatically shows hamburger menu on mobile
// No extra code needed — built-in responsive behavior

<Navbar
  logo="DS-UI"
  links={links}
  actions={<button>Get Started</button>}
/>`}
        htmlCode={`<!-- Mobile hamburger button (hidden on desktop) -->
<button class="md:hidden p-2 rounded-lg text-white/60 hover:text-white">
  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>

<!-- Mobile dropdown menu -->
<div class="md:hidden border-t border-white/5 bg-black/20 px-4 py-3 space-y-1">
  <a href="/" class="block px-4 py-2.5 rounded-lg text-sm text-white bg-white/10">Home</a>
  <a href="/docs" class="block px-4 py-2.5 rounded-lg text-sm text-white/60 hover:text-white hover:bg-white/5">Docs</a>
</div>`}
      />

      {/* Props Table */}
      <PropsTable props={[
        { name: 'logo',    type: 'string',                                         default: "'DS-UI'",    description: 'Brand name shown in navbar' },
        { name: 'variant', type: "'default'|'transparent'|'blur'|'solid'",         default: "'default'",  description: 'Visual style of the navbar' },
        { name: 'links',   type: "{ label: string, href: string, active?: boolean }[]", default: '[]',    description: 'Navigation links array' },
        { name: 'actions', type: 'ReactNode',                                       default: '—',         description: 'Right side buttons/content' },
        { name: 'sticky',  type: 'boolean',                                         default: 'false',     description: 'Sticks to top on scroll' },
      ]} />

    </div>
  )
}