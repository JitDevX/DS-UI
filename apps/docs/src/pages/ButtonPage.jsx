import { Button } from '@ui/components/Button'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'

export default function ButtonPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🔲</span>
          <h1 className="text-4xl font-black text-white">Button</h1>
        </div>
        <p className="text-white/40 text-lg">
          6 variants, 3 sizes, full-width and disabled states. Zero dependencies.
        </p>
      </div>

      <ComponentPreview
        title="Variants"
        description="6 visual styles for different use cases"
        preview={
          <>
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="danger">Danger</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="success">Success</Button>
          </>
        }
        jsxCode={`import { Button } from '@/components/ui/Button'

<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="outline">Outline</Button>
<Button variant="success">Success</Button>`}
        htmlCode={`<button class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all">Primary</button>
<button class="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 font-medium transition-all">Secondary</button>
<button class="px-4 py-2 bg-transparent text-white/70 rounded-lg hover:bg-white/5 font-medium transition-all">Ghost</button>
<button class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium transition-all">Danger</button>
<button class="px-4 py-2 border-2 border-blue-500 text-blue-400 rounded-lg hover:bg-blue-500/10 font-medium transition-all">Outline</button>
<button class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 font-medium transition-all">Success</button>`}
      />

      <ComponentPreview
        title="Sizes"
        description="3 sizes — sm, md (default), lg"
        preview={
          <>
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
          </>
        }
        jsxCode={`<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>`}
        htmlCode={`<button class="px-3 py-1.5 text-sm bg-blue-600 text-white rounded-md font-medium transition-all">Small</button>
<button class="px-4 py-2 text-base bg-blue-600 text-white rounded-lg font-medium transition-all">Medium</button>
<button class="px-6 py-3 text-lg bg-blue-600 text-white rounded-xl font-medium transition-all">Large</button>`}
      />

      <ComponentPreview
        title="Disabled State"
        description="Button when interaction is not allowed"
        preview={
          <>
            <Button>Normal</Button>
            <Button disabled>Disabled</Button>
          </>
        }
        jsxCode={`<Button>Normal</Button>
<Button disabled>Disabled</Button>`}
        htmlCode={`<button class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium">Normal</button>
<button disabled class="px-4 py-2 bg-blue-600 text-white rounded-lg font-medium opacity-50 cursor-not-allowed">Disabled</button>`}
      />

      <ComponentPreview
        title="Full Width"
        description="Stretches to fill its container — great for mobile"
        preview={
          <div className="w-full max-w-sm">
            <Button fullWidth>Full Width Button</Button>
          </div>
        }
        jsxCode={`<Button fullWidth>Full Width Button</Button>`}
        htmlCode={`<button class="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium transition-all">Full Width Button</button>`}
      />

      <PropsTable props={[
        { name: 'variant',   type: "'primary'|'secondary'|'ghost'|'danger'|'outline'|'success'", default: "'primary'", description: 'Visual style of the button' },
        { name: 'size',      type: "'sm'|'md'|'lg'",  default: "'md'",   description: 'Size of the button' },
        { name: 'fullWidth', type: 'boolean',          default: 'false',  description: 'Makes button full width' },
        { name: 'disabled',  type: 'boolean',          default: 'false',  description: 'Disables the button' },
        { name: 'onClick',   type: '() => void',       default: '—',      description: 'Click handler function' },
        { name: 'children',  type: 'ReactNode',        default: '—',      description: 'Button label or content' },
      ]} />

    </div>
  )
}