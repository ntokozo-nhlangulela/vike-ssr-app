import { usePageContext } from 'vike-react/usePageContext';

export default function Page() {
  const pageContext = usePageContext();
  const { id } = pageContext.routeParams;

  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Route String Example</h1>
      <p>
        URL Parameter <strong>ID</strong>: {id}
      </p>
      
     
    </main>
  );
}