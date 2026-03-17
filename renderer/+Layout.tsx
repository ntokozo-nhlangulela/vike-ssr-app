import Layout from "./Layout";

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return <Layout>{children}</Layout>;
}