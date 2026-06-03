import { Alert } from '@ui/components/Alert'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'

export default function AlertPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">🔔</span>
          <h1 className="text-4xl font-black text-white">Alert</h1>
        </div>
        <p className="text-white/40 text-lg">
          Feedback and notification messages. Zero dependencies.
        </p>
      </div>

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