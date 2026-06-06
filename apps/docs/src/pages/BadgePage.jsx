import { Badge } from '@ui/components/Badge'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'
import Playground from '../components/docs/Playground'

// Playground config
const badgeControls = [
  {
    name: 'variant',
    type: 'select',
    default: 'primary',
    options: ['default', 'primary', 'success', 'warning', 'danger'],
  },
  {
    name: 'size',
    type: 'select',
    default: 'md',
    options: ['sm', 'md', 'lg'],
  },
  {
    name: 'label',
    type: 'text',
    default: 'Badge',
  },
]

const generateBadgeCode = (values) => {
  const props = []
  if (values.variant !== 'primary') props.push(`variant="${values.variant}"`)
  if (values.size !== 'md')         props.push(`size="${values.size}"`)

  const propsStr = props.length > 0 ? ' ' + props.join(' ') : ''
  return `<Badge${propsStr}>${values.label}</Badge>`
}

export default function BadgePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🏷️</span>
          <h1 className="text-4xl font-black text-white">Badge</h1>
        </div>
        <p className="text-white/40 text-lg">
          Status labels, tags, and indicators. Zero dependencies.
        </p>
      </div>

      {/* Playground */}
      <Playground
        title="Interactive Playground"
        controls={badgeControls}
        renderPreview={(values) => (
          <Badge
            variant={values.variant}
            size={values.size}
          >
            {values.label}
          </Badge>
        )}
        generateCode={generateBadgeCode}
      />

      {/* Static Previews */}
      <ComponentPreview
        title="Variants"
        description="5 color variants for different statuses"
        preview={
          <>
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
          </>
        }
        jsxCode={`import { Badge } from '@/components/ui/Badge'

<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="danger">Danger</Badge>`}
        htmlCode={`<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-white/70">Default</span>
<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30">Primary</span>
<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-green-600/20 text-green-400 border border-green-500/30">Success</span>
<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-600/20 text-yellow-400 border border-yellow-500/30">Warning</span>
<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-red-600/20 text-red-400 border border-red-500/30">Danger</span>`}
      />

      <ComponentPreview
        title="Sizes"
        description="3 sizes — sm, md (default), lg"
        preview={
          <>
            <Badge variant="primary" size="sm">Small</Badge>
            <Badge variant="primary" size="md">Medium</Badge>
            <Badge variant="primary" size="lg">Large</Badge>
          </>
        }
        jsxCode={`<Badge variant="primary" size="sm">Small</Badge>
<Badge variant="primary" size="md">Medium</Badge>
<Badge variant="primary" size="lg">Large</Badge>`}
        htmlCode={`<span class="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30">Small</span>
<span class="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30">Medium</span>
<span class="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium bg-blue-600/20 text-blue-400 border border-blue-500/30">Large</span>`}
      />

      <PropsTable props={[
        { name: 'variant',  type: "'default'|'primary'|'success'|'warning'|'danger'", default: "'default'", description: 'Color style of the badge' },
        { name: 'size',     type: "'sm'|'md'|'lg'", default: "'md'", description: 'Size of the badge' },
        { name: 'children', type: 'ReactNode',       default: '—',   description: 'Badge label text' },
      ]} />

    </div>
  )
}