import { FormControl, FormLabel, VStack, Input } from "@chakra-ui/react";
import React from "react";

const Signup = () => {
  return (
    <VStack spacing="5px">
      <FormControl>
        <FormLabel></FormLabel>
        <Input placeholder="Enter your Name"></Input>
      </FormControl>
    </VStack>
  );
};

export default Signup;
