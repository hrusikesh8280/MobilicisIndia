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

const Apiend2 = () => {
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
      gender: "Male",
      phonePrice: 5,
    },
  };

  useEffect(() => {
    dispatch(getData(query));
  }, [location.search]);

  return (
    <Box w="80%" m="auto">
      <Table variant="simple" bgColor="gray.700" color="whiteAlpha.900">
        <TableCaption placement="top" fontWeight="740" fontSize="30px" mb={8}>
          Male Users which have phone price greater than 10,000
        </TableCaption>

        <Thead>
          <Tr>
            <Th color="violet" fontSize="20px">
              Name
            </Th>
            <Th color="violet" fontSize="20px">
              City
            </Th>
            <Th color="violet" fontSize="20px">
              Phone-Price
            </Th>
            <Th color="violet" fontSize="20px">
              Gender
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
                <Td>{user.city}</Td>
                <Td>{user.phone_price}</Td>
                <Td>{user.gender}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Apiend2;
