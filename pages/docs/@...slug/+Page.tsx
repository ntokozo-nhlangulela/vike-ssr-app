import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
  const pageContext = usePageContext();
  const { slug } = pageContext.routeParams;

  return (
    <>
      <h1>Docs Page</h1>
      <pre>{JSON.stringify(slug)}</pre>
      <p>Catch-All Routes Example</p>
    </>
  )
}