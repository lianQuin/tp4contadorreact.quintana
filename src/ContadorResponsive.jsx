import React, { useState } from "react";
import { Stack, Box, Button, Container, Avatar, Flex } from "@chakra-ui/react";
import { Spacer, Heading, ButtonGroup } from "@chakra-ui/react";

const ContadorResponsive = () => {
  const [count, setCount] = useState(0);

  function incrementar() {
    if (count < 10) {
      setCount(count + 1);
    }
  }
  const reset = () => {
    setCount(0);
  };
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <Flex bg="pink" minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Contador de Liliana Quintana </Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="blue">Nosotros</Button>
          <Button colorScheme="blue">Home</Button>
        </ButtonGroup>
      </Flex>

      <Container bg="pink" position="relative" top="90px" w="350px" h="200px">
        <Box>
          <Box>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              useState={() => setCount(count)}
              color="blue"
              fontSize="3em"
            >
              {count}
            </Box>
          </Box>

          <Box
            display="flex"
            position="relative"
            top="40px"
            left="1px"
            alignItems="center"
            bg="pink"
          >
            <Stack bg="pink" display="flex" direction="row" spacing={9}>
              <Button
                display="flex"
                onClick={decrementar}
                colorScheme="red"
                variant="outline"
              >
                restar
              </Button>
              <Button onClick={reset} colorScheme="blue" variant="solid">
                resetear
              </Button>
              <Button
                display="flex"
                onClick={incrementar}
                disabled={count == 0 ? "disable" : " "}
                colorScheme="green"
                variant="outline"
              >
                sumar
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </div>
  );
};
export { ContadorResponsive };
