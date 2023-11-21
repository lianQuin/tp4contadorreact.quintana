import React, { useState, useEffect } from "react";
import { Stack, Box, Button, Container, Avatar, Flex, AlertDialog } from "@chakra-ui/react";
import { Spacer, Heading, ButtonGroup } from "@chakra-ui/react";

const ContadorResponsive = () => {
  const [count, setCount] = useState(0);

  function incrementar() {
    if (count < 10) {
      setCount(count + 1);
      document.body.style.backgroundColor="green";
    
    }else{AlertDialog("solo 10 productos")};
  }
  const reset = () => {
    setCount(0);
    document.body.style.backgroundColor="white";
  };
  const decrementar = () => {
    if (count > 0) {
      setCount(count - 1);
      document.body.style.backgroundColor="red";
    }
  };

  return (
    <div>
      <Flex bg="pink" minWidth="max-content" alignItems="center" gap="2">
        <Box p="2">
          <Heading size="md">Contador</Heading>
        </Box>
        <Spacer />
        <ButtonGroup gap="2">
          <Button colorScheme="blue">Nosotros</Button>
          <Button colorScheme="blue">Home</Button>
        </ButtonGroup>
      </Flex>

      <Container bg="pink" position="relative" top="5.625em" w="21.875em" h="12.5em">
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
            top="2.5em"
            left="0.063em"
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
