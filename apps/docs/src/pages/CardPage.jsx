import { Card } from '@ui/components/Card'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'
import Playground from '../components/docs/Playground'

// Playground config
const cardControls = [
  {
    name: 'variant',
    type: 'select',
    default: 'default',
    options: ['default', 'outlined', 'elevated', 'flat'],
  },
  {
    name: 'title',
    type: 'text',
    default: 'Card Title',
  },
  {
    name: 'description',
    type: 'text',
    default: 'This is a card description.',
  },
  {
    name: 'footer',
    type: 'text',
    default: 'Footer text',
  },
]

const generateCardCode = (values) => {
  const props = []
  if (values.variant !== 'default') props.push(`variant="${values.variant}"`)
  if (values.title)       props.push(`title="${values.title}"`)
  if (values.description) props.push(`description="${values.description}"`)
  if (values.footer)      props.push(`footer="${values.footer}"`)

  if (props.length <= 2) {
    return `<Card ${props.join(' ')} />`
  }
  return `<Card\n  ${props.join('\n  ')}\n/>`
}

export default function CardPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🃏</span>
          <h1 className="text-4xl font-black text-white">Card</h1>
        </div>
        <p className="text-white/40 text-lg">
          Content container with 4 variants. Zero dependencies.
        </p>
      </div>

      {/* Playground */}
      <Playground
        title="Interactive Playground"
        controls={cardControls}
        renderPreview={(values) => (
          <Card
            variant={values.variant}
            title={values.title}
            description={values.description}
            footer={values.footer}
          />
        )}
        generateCode={generateCardCode}
      />

      {/* Static Previews */}
      <ComponentPreview
        title="Variants"
        description="4 visual styles for different use cases"
        preview={
          <div className="flex flex-wrap gap-4 justify-center">
            <Card variant="default"  title="Default"  description="Standard card with border" />
            <Card variant="outlined" title="Outlined" description="Transparent with bold border" />
            <Card variant="elevated" title="Elevated" description="Deep shadow effect" />
            <Card variant="flat"     title="Flat"     description="Subtle background only" />
          </div>
        }
        jsxCode={`import { Card } from '@/components/ui/Card'

<Card variant="default"  title="Default"  description="Standard card with border" />
<Card variant="outlined" title="Outlined" description="Transparent with bold border" />
<Card variant="elevated" title="Elevated" description="Deep shadow effect" />
<Card variant="flat"     title="Flat"     description="Subtle background only" />`}
        htmlCode={`<!-- Default -->
<div class="bg-[#1a1a1a] border border-white/10 rounded-2xl p-5">
  <h3 class="text-white font-semibold mb-1">Default</h3>
  <p class="text-white/40 text-sm">Standard card with border</p>
</div>

<!-- Outlined -->
<div class="bg-transparent border-2 border-white/20 rounded-2xl p-5">
  <h3 class="text-white font-semibold mb-1">Outlined</h3>
  <p class="text-white/40 text-sm">Transparent with bold border</p>
</div>

<!-- Elevated -->
<div class="bg-[#1a1a1a] border border-white/5 shadow-2xl shadow-black/50 rounded-2xl p-5">
  <h3 class="text-white font-semibold mb-1">Elevated</h3>
  <p class="text-white/40 text-sm">Deep shadow effect</p>
</div>

<!-- Flat -->
<div class="bg-white/5 rounded-2xl p-5">
  <h3 class="text-white font-semibold mb-1">Flat</h3>
  <p class="text-white/40 text-sm">Subtle background only</p>
</div>`}
      />

      <ComponentPreview
        title="With Footer"
        description="Card with extra info in footer area"
        preview={
          <Card
            variant="default"
            title="Card with Footer"
            description="This card has extra information in the footer."
            footer="Last updated: today"
          />
        }
        jsxCode={`<Card
  title="Card with Footer"
  description="This card has extra information in the footer."
  footer="Last updated: today"
/>`}
        htmlCode={`<div class="bg-[#1a1a1a] border border-white/10 rounded-2xl overflow-hidden">
  <div class="p-5">
    <h3 class="text-white font-semibold mb-1">Card with Footer</h3>
    <p class="text-white/40 text-sm">This card has extra information in the footer.</p>
  </div>
  <div class="px-5 py-3 border-t border-white/5 text-white/30 text-xs">
    Last updated: today
  </div>
</div>`}
      />

      <PropsTable props={[
        { name: 'variant',     type: "'default'|'outlined'|'elevated'|'flat'", default: "'default'", description: 'Visual style of the card' },
        { name: 'title',       type: 'string',           default: '—', description: 'Card title text' },
        { name: 'description', type: 'string',           default: '—', description: 'Card body text' },
        { name: 'footer',      type: 'string|ReactNode', default: '—', description: 'Footer content' },
        { name: 'image',       type: 'string (url)',     default: '—', description: 'Top image URL' },
        { name: 'children',    type: 'ReactNode',        default: '—', description: 'Custom content inside card' },
      ]} />

    </div>
  )
}