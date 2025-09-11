export default function ServicosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <section>
        <p>Página de serviços</p>
        {children}
      </section>
  )
}