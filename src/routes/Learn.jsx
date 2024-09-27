import {
  Box,
  Text,
  Heading,
  ListItem,
  Container,
  UnorderedList,
  Link,
} from '@chakra-ui/react';
import { APP_NAME } from '../configs/constants';

const Article = props => <Box as="article" {...props} mb="5" />;

const Home = props => {
  return (
    <Box height="100%">
      <Container maxW="container.xl">

        <Article>
          <Heading as="h1" mb="1" size="md">
            What is hamming code?
          </Heading>
          <Text as="p" mb="2">
            Hamming code is a set of error-correction codes that can be used to detect and correct the errors that can occur when the data is moved or stored from the sender to the receiver. It is a technique developed by R.W. Hamming for error correction. Redundant bits - Redundant bits are extra binary bits that are generated and added to the information-carrying bits of data transfer to ensure that no bits were lost during the data transfer. The number of redundant bits can be calculated using the following formula:
          </Text>

          <Text as="p" mb="2">
            A parity bit is a single bit that tracks whether the
            number of 1's is odd or even. If the number of 1's is odd, the
            parity bit is 1; if the number of 1's is even, the parity bit is 0.
            Hamming cleverly arranged each parity bit to track different halves
            of the data, so that we can correct 1-bit errors and, with an extra
            step, detect 2-bit errors.
          </Text>
          <Text as="p" mb={2} px={6}>

          </Text>
          <Heading as="h1" size="md" mb="4" mt="6">

            How to arrange parity bits?
          </Heading>
          <Text as="p" mb="2" px={6}>
            <ol>
              <li>
                <strong>Determine the Number of Parity Bits:</strong>
                <ul style={{ listStyle: 'none' }}>
                  <li>Calculate (2^r &gt;= m + r + 1 ) for the given message length.</li>
                  <li>Choose the smallest \(r\) that satisfies the inequality.</li>
                </ul>
              </li>
              <li>
                <strong>Position Parity Bits:</strong>
                <ul style={{ listStyle: 'none' }}>
                  <li>Reserve positions at powers of 2 for parity bits (1, 2, 4, 8, ...).</li>
                </ul>
              </li>
              <li>
                <strong>Assign Data Bits:</strong>
                <ul style={{ listStyle: 'none' }}>
                  <li>Place data bits in the remaining positions, skipping parity bit positions.</li>
                  <li>Assign sequential numbers to the remaining positions.</li>
                </ul>
              </li>
              <li>
                <strong>Calculate Parity Bits:</strong>
                <ul style={{ listStyle: 'none' }}>
                  <li>For each parity bit position, calculate the XOR of the covered bits (including itself).</li>
                </ul>
              </li>
              <li>
                <strong>Insert Parity Bits:</strong>
                <ul style={{ listStyle: 'none' }}>
                  <li>Insert the calculated parity bits into their designated positions.</li>
                </ul>
              </li>
              <li>
                <strong>Final Codeword:</strong>
                <ul style={{ listStyle: 'none' }}>
                  <li>The resulting arrangement of data and parity bits is the final codeword.</li>
                </ul>
              </li>
            </ol>

          </Text>
        </Article>

        <Article>

          <Heading as="h1" size="md" mb="1">
            In a Nutshell:
          </Heading>
          <Text as="i" mb="2">
            "If the decoder does not attempt to correct errors, it can reliably
            detect triple bit errors. If the decoder does correct errors, some
            triple errors will be mistaken for single errors and "corrected" to
            the wrong value. Error correction is therefore a trade-off between
            certainty (the ability to reliably detect triple bit errors) and
            resiliency (the ability to keep functioning in the face of single
            bit errors)."
          </Text>
        </Article>


      </Container>
    </Box>
  );
};

export function Resources() {
  return (
    <Article >
      <Heading as="h2" size="md" fontWeight={800} mt="2"  mb="1">
        Resources
      </Heading>
      <Text>
        1. Heyming Simulator:{' A great thanks to the owner of this public software. '}
        <Link
          color="blue.500"
          target="_blank"
          href="https://github.com/i-naeem/heyming"
        >
          Heyming Simulator
        </Link>
      </Text>
      <Text as="p">
        2. Read more about Hamming Code:{' '}
        <Link
          color="blue.500"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Hamming_code"
        >
          https://en.wikipedia.org/wiki/Hamming_code
        </Link>
      </Text>
      <Text as="p">
        3. Read more about error-correcting code:{' '}
        <Link
          color="blue.500"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Linear_code"
        >
          https://en.wikipedia.org/wiki/Linear_code
        </Link>
      </Text>
      <Text>
        4. Learn hamming code from a video:{' '}
        <Link
          color="blue.500"
          target="_blank"
          href="https://www.3blue1brown.com/lessons/hamming-codes"
        >
          3Blue1Brown Hamming Code Explanation
        </Link>
      </Text>

      <Text>
        5. Pdf Explanation:{' '}
        <Link
          color="blue.500"
          target="_blank"
          href="https://courseware.cutm.ac.in/wp-content/uploads/2020/05/DCS_Hamming-CODE.pdf"
        >
          HARISH CHANDRA MOHANTA, CUTM, BHUBANESWAR CAMPUS
        </Link>
      </Text>



    </Article>

  )
}

export default Home;
