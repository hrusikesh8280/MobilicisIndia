import { useEffect, useState } from "react";
import {
  Box,
  Table,
  TableCaption,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import axios from "axios";

const Apiend5 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://rose-enthusiastic-sea-lion.cyclic.app/api/users/top-cities"
      );
      setData(response.data);
    };
    fetchData();
  }, []);

  return (
    <Box w="80%" m="auto">
      <Table variant="simple" bgColor="gray.700" color="whiteAlpha.900">
        <TableCaption placement="top" fontWeight="740" fontSize="30px" mb={8}>
          Top 10 cities with the highest number of users and their average
          income.
        </TableCaption>
        <Thead>
          <Tr>
            <Th color="violet" fontSize="20px">
              City
            </Th>
            <Th color="violet" fontSize="20px">
              Average Income
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {data &&
            data.map((item) => (
              <Tr key={item._id}>
                <Td>{item._id}</Td>
                <Td>{item.avgIncome.toFixed(2)}</Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default Apiend5;
