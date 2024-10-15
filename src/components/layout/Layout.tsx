import { Container, Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }: PropsWithChildren) {
  return (
    <Flex direction="column" minH="100dvh">
      <Header />
      <Container
        maxW="container.xl"
        flexGrow="1"
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="4"
      >
        {children}
      </Container>
      <Footer />
    </Flex>
  );
}
