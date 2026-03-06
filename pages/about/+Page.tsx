
export default function Page() {
  return (
    <main>
      <header style={{ borderBottom: '1px solid #eee', marginBottom: '2rem', paddingBottom: '1rem' }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>About This Project</h1>
        <p style={{ color: '#666', fontSize: '1.2rem' }}>
          A high-performance web application built with <strong>Vike</strong> and <strong>Vite</strong>.
        </p>
      </header>

      <section style={{ marginBottom: '2rem' }}>
        <h2>Our Technical Stack</h2>
        <p>
          This platform leverages <strong>Server-Side Rendering (SSR)</strong> to deliver 
          content instantly. By pre-rendering HTML on the server, we provide superior 
          SEO and a faster initial load compared to traditional Single Page Applications.
        </p>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem', marginBottom: '2rem' }}>
        <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Real-Time Data</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Integrated with <strong>Socket.IO</strong> for live updates and 
            bi-directional communication between the client and our Node.js backend.
          </p>
        </div>

        <div style={{ padding: '1rem', border: '1px solid #ddd', borderRadius: '8px' }}>
          <h3>Type-Safe Architecture</h3>
          <p style={{ fontSize: '0.9rem' }}>
            Powered by <strong>TypeScript</strong> and <strong>Prisma ORM</strong>, 
            ensuring data integrity from the PostgreSQL database all the way to the UI.
          </p>
        </div>
      </div>

      <section style={{ backgroundColor: '#f9f9f9', padding: '1.5rem', borderRadius: '8px' }}>
        <h3>File-Based Routing</h3>
        <p>
          This specific page is rendered via Vike's filesystem routing. 
          The file structure at <code>pages/about/+Page.tsx</code> automatically 
          maps to the <code>/about</code> URL, simplifying navigation management.
        </p>
      </section>

      <footer style={{ marginTop: '3rem', fontSize: '0.8rem', color: '#999' }}>
        <p>Deployed via Docker Containers • Azure Blob Storage Enabled</p>
      </footer>
    </main>
  );
}