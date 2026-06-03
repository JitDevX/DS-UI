export default function PropsTable({ props }) {
  return (
    <div className="border border-white/10 rounded-2xl overflow-hidden mb-8">
      <div className="px-6 py-4 border-b border-white/5 bg-[#111111]">
        <h3 className="text-white font-semibold">Props</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-white/5 bg-[#0d0d0d]">
              <th className="text-left px-6 py-3 text-white/30 font-medium">Prop</th>
              <th className="text-left px-6 py-3 text-white/30 font-medium">Type</th>
              <th className="text-left px-6 py-3 text-white/30 font-medium">Default</th>
              <th className="text-left px-6 py-3 text-white/30 font-medium">Description</th>
            </tr>
          </thead>
          <tbody className="bg-[#111111]">
            {props.map((prop, i) => (
              <tr key={i} className="border-b border-white/5 last:border-0">
                <td className="px-6 py-3">
                  <code className="text-blue-400 font-mono">{prop.name}</code>
                </td>
                <td className="px-6 py-3">
                  <code className="text-orange-300 font-mono text-xs bg-orange-500/10 px-2 py-0.5 rounded">
                    {prop.type}
                  </code>
                </td>
                <td className="px-6 py-3">
                  <code className="text-green-400 font-mono text-xs">{prop.default}</code>
                </td>
                <td className="px-6 py-3 text-white/40">{prop.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}