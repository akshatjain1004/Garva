import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Image,
    useColorModeValue,
} from '@chakra-ui/react';

import phemeLogo from "../assets/logos/pheme.jpg";
import designerdsLogo from "../assets/logos/designerds.jpg";
import quizSocietyLogo from "../assets/logos/quizsoc.jpg";
import litSocietyLogo from "../assets/logos/litsoc.jpg";

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue('gray.50', 'gray.900')}
            color={useColorModeValue('gray.700', 'gray.200')}>
            <Container as={Stack} maxW={'100vw'} py={10}>
                <SimpleGrid columns={{ base: 1, sm: 3, md: 3 }} spacing={8}>
                    <Stack align="center">
                        <Text fontWeight={'800'} fontSize={'lg'} mb={2}>
                            Contacts
                        </Text>
                        <Text>
                            Pranav Goswami: +91 93282 76067
                        </Text>
                        <Text>
                            Haardik Ravat: +91 99836 05678
                        </Text>
                        <Text>
                            Akshat Jain: +91 98732 35040
                        </Text>
                        <Text>
                            Jahnab Dutta: +91 87239 66409
                        </Text>
                    </Stack>
                    <Stack spacing={8} align="center" justifyContent="center">
                    
                        <Stack direction={"row"} spacing={{base: 5, md: 10}}>
                            <Image
                                src={phemeLogo}
                                h={{ base: "10vh", md: "10vh" }}
                                w={{ base: "20vw", md: "5vw" }}
                                alt="PHEME Logo"
                            />
                            <Image
                                src={designerdsLogo}
                                h={{ base: "10vh", md: "10vh" }}
                                w={{ base: "20vw", md: "5vw" }}
                                alt="Designerds Logo"
                            />
                            <Image
                                src={litSocietyLogo}
                                h={{ base: "10vh", md: "10vh" }}
                                w={{ base: "20vw", md: "5vw" }}
                                alt="Literature Society Logo"
                            />
                            <Image
                                src={quizSocietyLogo}
                                h={{ base: "10vh", md: "10vh" }}
                                w={{ base: "20vw", md: "5vw" }}
                                alt="Quiz Society Logo"
                            />
                        </Stack>
                    </Stack>
                    <Stack align="center">
                        <Text fontWeight={'800'} fontSize={'lg'} mb={2}>
                            Follow Us
                        </Text>
                        <Link href="https://instagram.com/pheme_iitj?igshid=YmMyMTA2M2Y=" target="_blank">PHEME</Link>
                        <Link href="https://www.instagram.com/designerds.iitj/" target="_blank">Designerds</Link>
                        <Link href="https://instagram.com/litsociitj?igshid=YmMyMTA2M2Y=" target="_blank">Literature Society</Link>
                        <Link href="https://instagram.com/quizclubiitj?igshid=YmMyMTA2M2Y=" target="_blank">Quiz Club</Link>
                    </Stack>
                </SimpleGrid>
            </Container>
        </Box>
    );
}
