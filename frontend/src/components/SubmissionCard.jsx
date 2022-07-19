import { Component } from "react";

import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Select,
  Modal,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  ModalOverlay,
  Stack,
  Button,
  Heading,
  Text,
} from "@chakra-ui/react";

import { submit } from "../utils/eventsUtils";

class SubmissionCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errorCode: "",
      error: null,
      submissionCode: "",
      event: "",
      articleSubmissionFile: null,
      paintingImageSubmissionFile: null,
      paintingSourceSubmissionFile: null,
      isModalOpen: false,
      success: false,
    };
  }

  onModalOpen = () => {
    this.setState({ isModalOpen: true });
  };

  onModalClose = () => {
    this.setState({ isModalOpen: false });
  };

  handleCodeChange = (e) => {
    this.setState({ submissionCode: e.target.value });
  };

  handleEventChange = (e) => {
    this.setState({ event: e.target.value });
  };

  handleArticleFileChange = (e) => {
    this.setState({ articleSubmissionFile: e.target.files[0] });
  };

  handlePaintingImageFileChange = (e) => {
    this.setState({ paintingImageSubmissionFile: e.target.files[0] });
  };

  handlePaintingSourceFileChange = (e) => {
    this.setState({ paintingSourceSubmissionFile: e.target.files[0] });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("submissionCode", this.state.submissionCode);
    formData.append("event", this.state.event);

    if (this.state.event === "article") {
      formData.append("articleSubmissionFile", this.state.articleSubmissionFile);
    } else if (this.state.event === "painting") {
      formData.append("paintingImageSubmissionFile", this.state.paintingImageSubmissionFile);
      formData.append("paintingSourceSubmissionFile", this.state.paintingSourceSubmissionFile);
    }

    submit(formData).then((res) => {
      if (Object.keys(res).length === 0) {
        this.setState({ error: null, success: true });
      } else {
        this.setState({
          errorCode: JSON.parse(res).code,
          error: JSON.parse(res).message,
          success: false,
        });
      }
    });
  };

  renderModalHeader = () => {
    if (this.state.success) {
      return (
        <ModalHeader>
          <Text>Submission Successful!</Text>
        </ModalHeader>
      );
    } else {
      if (this.state.errorCode === "DUP") {
        return (
          <ModalHeader>
            <Text>Error: Already Submitted</Text>
          </ModalHeader>
        );
      } else if (this.state.errorCode === "NR") {
        return (
          <ModalHeader>
            <Text>Error: Not Registered</Text>
          </ModalHeader>
        );
      }
    }
  };

  renderModalText = () => {
    if (this.state.success) {
      return (
        <ModalBody>
          <Text>
            Your submission for the event "
            {this.state.event === "article" ? "Article Writing" : "Digital Painting"}" has
            been successfully received!
          </Text>
        </ModalBody>
      );
    } else {
      return (
        <ModalBody>
          <Text>{this.state.error}</Text>
        </ModalBody>
      );
    }
  };

  renderFileUploader = () => {
    if (this.state.event === "article") {
      return (
        <FormControl id="articleSubmissionFile" isRequired>
          <FormLabel>Article Submission File PDF</FormLabel>
          <Input
            type="file"
            name="submissionFile"
            accept="application/pdf"
            onChange={this.handleArticleFileChange}
          />
        </FormControl>
      )
    } else if (this.state.event === "painting") {
      return (
        <div>
          <FormControl id="paintingImageSubmissionFile" isRequired>
            <FormLabel>Submit your image (.jpg, .jpeg, .png)</FormLabel>
            <Input
              type="file"
              name="submissionFile"
              accept="image/*"
              onChange={this.handlePaintingImageFileChange}
            />
          </FormControl>
          <FormControl id="paintingSourceSubmissionFile" isRequired>
            <FormLabel>Submit your source file (.ai, .psd, .sketch)</FormLabel>
            <Input
              type="file"
              name="submissionFile"
              onChange={this.handlePaintingSourceFileChange}
            />
          </FormControl>
        </div>
      )
    }
  }

  render() {
    return (
      <Flex align={"center"} justify={"center"}>
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={8} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              Make a Submission
            </Heading>
          </Stack>
          <form name="register-form">
            <Box rounded={"lg"} p={8}>
              <Stack spacing={4}>
                <FormControl id="submissionCode" isRequired>
                  <FormLabel>Submission Code</FormLabel>
                  <Input
                    type="text"
                    name="submissionCode"
                    onChange={this.handleCodeChange}
                  />
                </FormControl>
                <FormControl id="event" isRequired>
                  <FormLabel>Event</FormLabel>
                  <Select
                    placeholder="Select event"
                    onChange={this.handleEventChange}
                  >
                    <option value="article">Article Writing</option>
                    <option value="painting">Digital Painting</option>
                  </Select>
                </FormControl>
                {this.renderFileUploader()}
                <Stack spacing={10} pt={2}>
                  <Button
                    loadingText="Submitting"
                    size="lg"
                    bg={"blue.400"}
                    color={"white"}
                    _hover={{
                      bg: "blue.500",
                    }}
                    onClick={(e) => {
                      this.handleSubmit(e);
                      this.onModalOpen();
                    }}
                  >
                    Submit
                  </Button>
                </Stack>
                <Modal
                  onClose={this.onModalClose}
                  isOpen={this.state.isModalOpen}
                  isCentered
                >
                  <ModalOverlay />
                  <ModalContent>
                    {this.renderModalHeader()}
                    <ModalCloseButton />
                    <ModalBody>{this.renderModalText()}</ModalBody>
                    <ModalFooter>
                      <Button onClick={this.onModalClose}>Close</Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
              </Stack>
            </Box>
          </form>
        </Stack>
      </Flex>
    );
  }
}

export default SubmissionCard;
