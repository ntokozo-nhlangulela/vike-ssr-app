import { AppBar, Button, Container, Toolbar, Typography } from "@mui/material";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {

  return (
    <>
      <AppBar position="static">
        <Toolbar>

          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Vike Store
          </Typography>

          <Button color="inherit" href="/">
            Home
          </Button>

          <Button color="inherit" href="/client-products">
            Client Products
          </Button>

        </Toolbar>
      </AppBar>

      <Container sx={{ marginTop: 4 }}>
        {children}
      </Container>
    </>
  );
}