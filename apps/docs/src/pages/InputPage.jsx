import { Input } from '@ui/components/Input'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'
import Playground from '../components/docs/Playground'

// Playground config
const inputControls = [
  {
    name: 'type',
    type: 'select',
    default: 'text',
    options: ['text', 'password', 'email', 'number'],
  },
  {
    name: 'label',
    type: 'text',
    default: 'Label',
  },
  {
    name: 'placeholder',
    type: 'text',
    default: 'Enter text...',
  },
  {
    name: 'size',
    type: 'select',
    default: 'md',
    options: ['sm', 'md', 'lg'],
  },
  {
    name: 'hint',
    type: 'text',
    default: 'This is a hint text',
  },
  {
    name: 'disabled',
    type: 'boolean',
    default: false,
  },
  {
    name: 'required',
    type: 'boolean',
    default: false,
  },
]

const generateInputCode = (values) => {
  const props = []
  if (values.type !== 'text')   props.push(`type="${values.type}"`)
  if (values.label)             props.push(`label="${values.label}"`)
  if (values.placeholder)       props.push(`placeholder="${values.placeholder}"`)
  if (values.size !== 'md')     props.push(`size="${values.size}"`)
  if (values.hint)              props.push(`hint="${values.hint}"`)
  if (values.disabled)          props.push('disabled')
  if (values.required)          props.push('required')

  if (props.length === 0) return `<Input />`
  if (props.length <= 2)  return `<Input ${props.join(' ')} />`
  return `<Input\n  ${props.join('\n  ')}\n/>`
}

export default function InputPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">✏️</span>
          <h1 className="text-4xl font-black text-white">Input</h1>
        </div>
        <p className="text-white/40 text-lg">
          Form input fields with label, hint, error states and icons. Zero dependencies.
        </p>
      </div>

      {/* Playground */}
      <Playground
        title="Interactive Playground"
        controls={inputControls}
        renderPreview={(values) => (
          <div className="w-full max-w-sm">
            <Input
              type={values.type}
              label={values.label}
              placeholder={values.placeholder}
              size={values.size}
              hint={values.hint}
              disabled={values.disabled}
              required={values.required}
            />
          </div>
        )}
        generateCode={generateInputCode}
      />

      {/* Types */}
      <ComponentPreview
        title="Types"
        description="text, password, email, number"
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input type="text"     label="Text"     placeholder="Enter text..." />
            <Input type="email"    label="Email"    placeholder="you@example.com" />
            <Input type="password" label="Password" placeholder="••••••••" />
            <Input type="number"   label="Number"   placeholder="0" />
          </div>
        }
        jsxCode={`import { Input } from '@/components/ui/Input'

<Input type="text"     label="Text"     placeholder="Enter text..." />
<Input type="email"    label="Email"    placeholder="you@example.com" />
<Input type="password" label="Password" placeholder="••••••••" />
<Input type="number"   label="Number"   placeholder="0" />`}
        htmlCode={`<div class="flex flex-col gap-1.5">
  <label class="text-sm font-medium text-white/70">Email</label>
  <input
    type="email"
    placeholder="you@example.com"
    class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/20 transition-all"
  />
</div>`}
      />

      {/* Sizes */}
      <ComponentPreview
        title="Sizes"
        description="3 sizes — sm, md (default), lg"
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input size="sm" placeholder="Small input" />
            <Input size="md" placeholder="Medium input" />
            <Input size="lg" placeholder="Large input" />
          </div>
        }
        jsxCode={`<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />`}
        htmlCode={`<input class="w-full bg-white/5 border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50" placeholder="Small" />
<input class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-base text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50" placeholder="Medium" />
<input class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lg text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50" placeholder="Large" />`}
      />

      {/* States */}
      <ComponentPreview
        title="States"
        description="Default, with hint, error, disabled, required"
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              label="Default"
              placeholder="Default input"
            />
            <Input
              label="With Hint"
              placeholder="Enter username"
              hint="Only letters and numbers allowed"
            />
            <Input
              label="Error State"
              placeholder="Enter email"
              error="Please enter a valid email address"
            />
            <Input
              label="Disabled"
              placeholder="Cannot edit this"
              disabled
            />
            <Input
              label="Required"
              placeholder="This field is required"
              required
            />
          </div>
        }
        jsxCode={`<Input
  label="With Hint"
  placeholder="Enter username"
  hint="Only letters and numbers allowed"
/>
<Input
  label="Error State"
  placeholder="Enter email"
  error="Please enter a valid email address"
/>
<Input label="Disabled" placeholder="Cannot edit this" disabled />
<Input label="Required" placeholder="Required field" required />`}
        htmlCode={`<!-- With Hint -->
<div class="flex flex-col gap-1.5">
  <label class="text-sm font-medium text-white/70">With Hint</label>
  <input class="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50" placeholder="Enter username" />
  <p class="text-white/30 text-xs">Only letters and numbers allowed</p>
</div>

<!-- Error State -->
<div class="flex flex-col gap-1.5">
  <label class="text-sm font-medium text-white/70">Error State</label>
  <input class="w-full bg-white/5 border border-red-500/50 rounded-lg px-4 py-2 text-white placeholder-white/20 focus:outline-none focus:border-red-500" placeholder="Enter email" />
  <p class="text-red-400 text-xs">Please enter a valid email address</p>
</div>`}
      />

      {/* With Icons */}
      <ComponentPreview
        title="With Icons"
        description="Left and right icon support"
        preview={
          <div className="flex flex-col gap-4 w-full max-w-sm">
            <Input
              label="Search"
              placeholder="Search anything..."
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
            />
            <Input
              label="Email"
              placeholder="you@example.com"
              type="email"
              leftIcon={
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
            />
          </div>
        }
        jsxCode={`<Input
  label="Search"
  placeholder="Search anything..."
  leftIcon={
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  }
/>`}
        htmlCode={`<div class="flex flex-col gap-1.5">
  <label class="text-sm font-medium text-white/70">Search</label>
  <div class="relative">
    <div class="absolute left-3 top-1/2 -translate-y-1/2 text-white/30">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    </div>
    <input class="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50" placeholder="Search anything..." />
  </div>
</div>`}
      />

      {/* Props Table */}
      <PropsTable props={[
        { name: 'type',        type: "'text'|'password'|'email'|'number'", default: "'text'",  description: 'Input type' },
        { name: 'label',       type: 'string',    default: '—',      description: 'Label above the input' },
        { name: 'placeholder', type: 'string',    default: '—',      description: 'Placeholder text' },
        { name: 'value',       type: 'string',    default: '—',      description: 'Controlled value' },
        { name: 'onChange',    type: '() => void', default: '—',     description: 'Change handler' },
        { name: 'size',        type: "'sm'|'md'|'lg'", default: "'md'", description: 'Input size' },
        { name: 'error',       type: 'string',    default: '—',      description: 'Error message — turns input red' },
        { name: 'hint',        type: 'string',    default: '—',      description: 'Hint text below input' },
        { name: 'disabled',    type: 'boolean',   default: 'false',  description: 'Disables the input' },
        { name: 'required',    type: 'boolean',   default: 'false',  description: 'Shows required asterisk' },
        { name: 'leftIcon',    type: 'ReactNode', default: '—',      description: 'Icon on left side' },
        { name: 'rightIcon',   type: 'ReactNode', default: '—',      description: 'Icon on right side' },
      ]} />

    </div>
  )
}