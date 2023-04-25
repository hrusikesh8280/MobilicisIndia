import React, { useEffect } from "react";
import {
  Box,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { getData } from "../redux/action";

const Apiend3 = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { data, isLoading, isError } = useSelector(
    (store) => ({
      data: store.DATA,
      isLoading: store.isLoading,
      isError: store.isError,
    }),
    shallowEqual
  );

  const query = {
    params: {
      lastName: "M",
      quoteLength: 15,
    },
  };

  useEffect(() => {
    dispatch(getData(query));
  }, [location.search]);

  return (
    <Box w="80%" m="auto">
      <Table variant="simple" bgColor="gray.700" color="whiteAlpha.900">
        <TableCaption placement="top" fontWeight="740" fontSize="30px" mb={8}>
          Users whose last name starts with “M” and has a quote character length
          greater than 15
        </TableCaption>

        <Thead>
          <Tr>
            <Th color="violet" fontSize="20px">
              Name
            </Th>
            <Th color="violet" fontSize="20px">
              Last-Name
            </Th>
            <Th color="violet" fontSize="20px">
              Email
            </Th>
            <Th color="violet" fontSize="20px">
              quote
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((user) => (
              <Tr key={user.id}>
                <Td>
                  {user.first_name} {user.last_name}
                </Td>
                <Td>{user.last_name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.quote}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Apiend3;
