import { useState } from 'react'
import { Sidebar } from '@ui/components/Sidebar'
import ComponentPreview from '../components/docs/ComponentPreview'
import PropsTable from '../components/docs/PropsTable'
import Playground from '../components/docs/Playground'
import { LuCalendar, LuLayers, LuCoffee } from 'react-icons/lu'

// Sample data exactly from your App
const sampleItems = [
  { id: 'daily', label: 'Daily Planner', icon: LuCalendar },
  { id: 'combined', label: 'Combined View', icon: LuLayers },
  { id: 'meeting', label: 'Morning Meeting', icon: LuCoffee },
]

// Playground config
const sidebarControls = [
  {
    name: 'logoText',
    type: 'text',
    default: 'SAFEPAD',
  },
  {
    name: 'subText',
    type: 'text',
    default: 'RIGMIND',
  },
  {
    name: 'theme',
    type: 'select',
    default: 'dark',
    options: ['dark', 'light'],
  }
]

const generateSidebarCode = (values) => {
  const props = []
  if (values.logoText !== 'SAFEPAD') props.push(`logoText="${values.logoText}"`)
  if (values.subText !== 'RIGMIND')  props.push(`subText="${values.subText}"`)
  if (values.theme !== 'dark')       props.push(`theme="${values.theme}"`)

  const itemsCode = `items={[
    { id: 'daily', label: 'Daily Planner', icon: LuCalendar },
    { id: 'combined', label: 'Combined View', icon: LuLayers },
    { id: 'meeting', label: 'Morning Meeting', icon: LuCoffee },
  ]}`

  props.push(itemsCode)
  props.push(`activeId="daily"`)
  props.push(`onToggleTheme={() => console.log('Toggle Theme')}`)
  props.push(`onSettings={() => console.log('Settings')}`)
  props.push(`onLogout={() => console.log('Logout')}`)

  return `import { LuCalendar, LuLayers, LuCoffee } from 'react-icons/lu'\n\n<Sidebar\n  ${props.join('\n  ')}\n/>`
}

export default function SidebarPage() {
  const [playgroundTheme, setPlaygroundTheme] = useState('dark')
  const [playgroundActiveTab, setPlaygroundActiveTab] = useState('daily')
  
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Header */}
      <div className="mb-10">
        <div className="flex items-center gap-3 mb-3">
          <span className="text-3xl">|||</span>
          <h1 className="text-4xl font-black text-white">Sidebar</h1>
        </div>
        <p className="text-white/40 text-lg">
          Premium animated sidebar powered by Framer Motion & React Icons. Exact replica of the Safepad UI.
        </p>
      </div>

      {/* Playground */}
      <Playground
        title="Interactive Playground"
        controls={sidebarControls}
        renderPreview={(values) => {
          // Sync internal state with playground controls
          const currentTheme = values.theme; 
          
          return (
            <div className={`flex w-full h-[600px] rounded-xl overflow-hidden border border-white/10 relative transition-colors duration-300 ${currentTheme === 'dark' ? 'bg-[#0a0a0a]' : 'bg-[#F7F8FA]'}`}>
              {/* Component Output */}
              <Sidebar
                logoText={values.logoText}
                subText={values.subText}
                theme={currentTheme}
                items={sampleItems}
                activeId={playgroundActiveTab}
                onNavigate={(id) => setPlaygroundActiveTab(id)}
                onToggleTheme={() => alert('Theme toggle clicked!')}
                onSettings={() => alert('Settings clicked!')}
                onLogout={() => alert('Logout clicked!')}
              />
              
              {/* Fake Content Area */}
              <div className="flex-1 flex flex-col items-center justify-center relative">
                 {currentTheme === 'dark' && (
                   <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-600/10 rounded-full blur-[80px] pointer-events-none" />
                 )}
                 <h2 className={`text-4xl font-black mb-2 opacity-20 uppercase tracking-widest ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                   {playgroundActiveTab}
                 </h2>
                 <p className={`text-sm opacity-50 ${currentTheme === 'dark' ? 'text-white' : 'text-black'}`}>
                   Main Content Area Simulator
                 </p>
              </div>
            </div>
          )
        }}
        generateCode={generateSidebarCode}
      />

      {/* Themes Demo */}
      <ComponentPreview
        title="Theme Support"
        description="Perfectly styled pixel-for-pixel Dark and Light modes."
        preview={
          <div className="w-full flex flex-col gap-6">
            <div className="flex w-full h-[500px] rounded-xl overflow-hidden border border-white/10 bg-black">
              <Sidebar theme="dark" items={sampleItems} activeId="daily" onSettings={()=>{}} onLogout={()=>{}} />
              <div className="flex-1" />
            </div>
            
            <div className="flex w-full h-[500px] rounded-xl overflow-hidden border border-white/10 bg-[#F7F8FA]">
              <Sidebar theme="light" items={sampleItems} activeId="combined" onSettings={()=>{}} onLogout={()=>{}} />
              <div className="flex-1" />
            </div>
          </div>
        }
        jsxCode={`<Sidebar theme="dark" items={items} activeId="daily" />\n<Sidebar theme="light" items={items} activeId="daily" />`}
        htmlCode={`<!-- Not available in HTML. Requires React & Framer Motion. -->`}
      />

      {/* Props Table */}
      <PropsTable props={[
        { name: 'logoText',      type: 'string',                                         default: "'SAFEPAD'",   description: 'Main brand name' },
        { name: 'subText',       type: 'string',                                         default: "'RIGMIND'",   description: 'Sub-brand tracking text' },
        { name: 'logoImage',     type: 'string',                                         default: 'URL',         description: 'Source for the logo image' },
        { name: 'items',         type: "{ id: string, label: string, icon: ReactNode }[]", default: '[]',        description: 'Navigation items array' },
        { name: 'activeId',      type: 'string',                                         default: 'undefined',   description: 'Currently active tab ID' },
        { name: 'onNavigate',    type: '(id: string) => void',                           default: 'undefined',   description: 'Navigation click handler' },
        { name: 'theme',         type: "'dark'|'light'",                                 default: "'dark'",      description: 'Component theme' },
        { name: 'onToggleTheme', type: '() => void',                                     default: 'undefined',   description: 'Toggle theme action (shows button)' },
        { name: 'onSettings',    type: '() => void',                                     default: 'undefined',   description: 'Settings action (shows button)' },
        { name: 'onLogout',      type: '() => void',                                     default: 'undefined',   description: 'Logout action (shows button)' },
      ]} />

    </div>
  )
}