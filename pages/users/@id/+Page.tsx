import { usePageContext } from "vike-react/usePageContext";

export default function Page() {
    const pageContext = usePageContext();
    const { id } = pageContext.routeParams;

  return <><h1>Dynamic Route Example</h1><br /><p>User ID: {id}</p></>;
  

}