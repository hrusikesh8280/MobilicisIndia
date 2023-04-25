import { Flex, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex
      bg="gray.800"
      justifyContent="space-between"
      color="white"
      p={4}
      align="center"
    >
      <Link to="/" fontSize="xxl" fontWeight="bold">
        Income &lt;$5 with Cars
      </Link>
      <Link to="/api2" fontSize="xxl" fontWeight="bold" ml={8}>
        Male: Phone &lt;$10000
      </Link>
      <Link to="/api3" fontSize="xxl" fontWeight="bold" ml={8}>
        Last name: M Qoute: 15
      </Link>
      <Link to="/api4" fontSize="xxl" fontWeight="bold" ml={8}>
        Mail: no Digit, Cars-BMW, Benz, Audi
      </Link>
      <Link to="/api5" fontSize="xxl" fontWeight="bold" ml={8}>
        Top 10 city: Avg Income
      </Link>
    </Flex>
  );
};

export default Navbar;
