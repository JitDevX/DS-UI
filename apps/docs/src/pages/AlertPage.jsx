import { Alert } from '@ui/components/Alert'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'
import Playground from '../components/docs/Playground'

// Playground config
const alertControls = [
  {
    name: 'type',
    type: 'select',
    default: 'info',
    options: ['info', 'success', 'warning', 'danger'],
  },
  {
    name: 'title',
    type: 'text',
    default: 'Alert Title',
  },
  {
    name: 'message',
    type: 'text',
    default: 'This is an alert message.',
  },
]

const generateAlertCode = (values) => {
  const props = []
  if (values.type !== 'info') props.push(`type="${values.type}"`)
  if (values.title)           props.push(`title="${values.title}"`)
  if (values.message)         props.push(`message="${values.message}"`)

  if (props.length <= 1) {
    return `<Alert ${props.join(' ')} />`
  }
  return `<Alert\n  ${props.join('\n  ')}\n/>`
}

export default function AlertPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🔔</span>
          <h1 className="text-4xl font-black text-white">Alert</h1>
        </div>
        <p className="text-white/40 text-lg">
          Feedback and notification messages. Zero dependencies.
        </p>
      </div>

      {/* Playground */}
      <Playground
        title="Interactive Playground"
        controls={alertControls}
        renderPreview={(values) => (
          <div className="w-full max-w-md">
            <Alert
              type={values.type}
              title={values.title}
              message={values.message}
            />
          </div>
        )}
        generateCode={generateAlertCode}
      />

      {/* Static Previews */}
      <ComponentPreview
        title="Types"
        description="4 alert types for different feedback scenarios"
        preview={
          <div className="flex flex-col gap-3 w-full max-w-md">
            <Alert type="info"    title="Info"    message="This is an informational message." />
            <Alert type="success" title="Success" message="Your changes have been saved." />
            <Alert type="warning" title="Warning" message="Please review before proceeding." />
            <Alert type="danger"  title="Error"   message="Something went wrong. Try again." />
          </div>
        }
        jsxCode={`import { Alert } from '@/components/ui/Alert'

<Alert type="info"    title="Info"    message="This is an informational message." />
<Alert type="success" title="Success" message="Your changes have been saved." />
<Alert type="warning" title="Warning" message="Please review before proceeding." />
<Alert type="danger"  title="Error"   message="Something went wrong. Try again." />`}
        htmlCode={`<!-- Info -->
<div class="flex gap-3 p-4 rounded-xl border bg-blue-600/10 border-blue-500/30">
  <span class="text-lg">ℹ️</span>
  <div>
    <p class="font-semibold text-sm text-blue-400">Info</p>
    <p class="text-white/40 text-sm mt-0.5">This is an informational message.</p>
  </div>
</div>

<!-- Success -->
<div class="flex gap-3 p-4 rounded-xl border bg-green-600/10 border-green-500/30">
  <span class="text-lg">✅</span>
  <div>
    <p class="font-semibold text-sm text-green-400">Success</p>
    <p class="text-white/40 text-sm mt-0.5">Your changes have been saved.</p>
  </div>
</div>

<!-- Warning -->
<div class="flex gap-3 p-4 rounded-xl border bg-yellow-600/10 border-yellow-500/30">
  <span class="text-lg">⚠️</span>
  <div>
    <p class="font-semibold text-sm text-yellow-400">Warning</p>
    <p class="text-white/40 text-sm mt-0.5">Please review before proceeding.</p>
  </div>
</div>

<!-- Danger -->
<div class="flex gap-3 p-4 rounded-xl border bg-red-600/10 border-red-500/30">
  <span class="text-lg">❌</span>
  <div>
    <p class="font-semibold text-sm text-red-400">Error</p>
    <p class="text-white/40 text-sm mt-0.5">Something went wrong. Try again.</p>
  </div>
</div>`}
      />

      <ComponentPreview
        title="Message Only"
        description="Alert without title — just a message"
        preview={
          <div className="flex flex-col gap-3 w-full max-w-md">
            <Alert type="info"    message="Simple info message without title." />
            <Alert type="success" message="Operation completed successfully." />
          </div>
        }
        jsxCode={`<Alert type="info"    message="Simple info message without title." />
<Alert type="success" message="Operation completed successfully." />`}
        htmlCode={`<div class="flex gap-3 p-4 rounded-xl border bg-blue-600/10 border-blue-500/30">
  <span class="text-lg">ℹ️</span>
  <div>
    <p class="text-white/40 text-sm">Simple info message without title.</p>
  </div>
</div>`}
      />

      <PropsTable props={[
        { name: 'type',    type: "'info'|'success'|'warning'|'danger'", default: "'info'", description: 'Alert type — controls color and icon' },
        { name: 'title',   type: 'string', default: '—', description: 'Bold title text (optional)' },
        { name: 'message', type: 'string', default: '—', description: 'Body message text' },
      ]} />

    </div>
  )
}