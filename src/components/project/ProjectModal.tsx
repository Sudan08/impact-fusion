import { useCreateProjectsMutation } from "./ProjectApiSlice";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    Button,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    FormLabel,
    FormControl,
    Input,
    useToast,
    Select,
  } from '@chakra-ui/react';
import React , { useState } from "react";


interface Project {
    title: string;
    description: string;
    summary: string;
    level: "beginner" | "intermediate" | "advanced"; 
    github_uri: string;
    stacks: { name: string }[];
    domains: { name: string }[];
    links: { title: string; url: string }[];
}

const ModalForm = () => {
    const toast = useToast();

    const [create ] = useCreateProjectsMutation();

    const { onClose , onOpen , isOpen } = useDisclosure();

    const [stack , setStack] = useState<{ name: string }[]>([]);

    const [domain , setDomain] = useState<{ name: string }[]>([]);

    const [links , setLinks] = useState<{ title: string; url: string }[]>([]);

    const [formData , setFormData] = useState<Project>({
        title: "",
        description: "",
        summary: "",
        level: "beginner",
        github_uri: "",
        stacks: stack,
        domains: domain,
        links: links,
    });

    const stackref = React.useRef<HTMLInputElement | null>(null);
    const domainref = React.useRef<HTMLInputElement | null>(null);
    const linksref = React.useRef<HTMLInputElement | null>(null);

    const handleStack = () => {
        if (stackref.current){
        setStack([...stack , { name : stackref.current.value }]);
        }
    }

    const handleDomain = () => {
        if (domainref.current){
        setDomain([...domain , { name : domainref.current.value }]);
        }
    }

    const handleLinks = () => {
        if (linksref.current){
        setLinks([...links , { title : 'LinkedIn' , url : linksref.current.value }]);
        }
    }


    const createProject = () => {
        setFormData({ ...formData, stacks: stack , domains : domain , links : links });
        create(formData)
          .unwrap()
          .then(() => {
            toast({
              title: 'Project Created',
              status: 'success',
              duration: 3000,
            });
            onClose();
          })
          .catch(() => {
            toast({
              title: 'Project Creation Failed',
              status: 'error',
              duration: 3000,
            });
          });
      }


    
    return (
      <>
        <Button colorScheme={'blue'} onClick={onOpen}>
              Create Project
            </Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add New Project</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <form>
                <FormControl>
                  <FormLabel htmlFor="title">Title</FormLabel>
                  <Input
                    id="title"
                    placeholder="Title"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </FormControl>
                <FormControl >
                  <FormLabel htmlFor="title">Description</FormLabel>
                  <Input
                    id="description"
                    placeholder="description"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}

                  />
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="summary">summary</FormLabel>
                  <Input
                    id="summary"
                    placeholder="summary"
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  />
                </FormControl>
                <FormControl >
                  <FormLabel htmlFor="level">level</FormLabel>
                  <Select
                  id="level"
                    onChange={(e) => setFormData({ ...formData, level: e.target.value as "beginner" | "intermediate" | "advanced" })}
                >
                  <option selected disabled>
                    Select one
                  </option>
                  <option value="beginner"> Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advance"> Advance</option>
                </Select>
                </FormControl>
                <FormControl>
                  <FormLabel htmlFor="stacks">stacks</FormLabel>
                  <Input
                  id="stacks"
                  ref = {stackref}
                  />

                <Button onClick={handleStack}>Insert</Button>
                </FormControl>
                <FormControl>
                    <FormLabel htmlFor="domains">domains</FormLabel>
                    <Input
                    id="domains"
                    ref = {domainref}
                    />
                    <Button onClick={handleDomain}>Insert</Button>
                </FormControl>

                <FormControl>
                    <FormLabel htmlFor="links">Linkedin</FormLabel>
                    <Input
                    id="links"
                    ref = {linksref}
                    />
                    <Button onClick={handleLinks}>Insert</Button>
                </FormControl>
                
              
                <Button mt={4} colorScheme="teal" type="button" onClick={createProject}>
                  Create Project
                </Button>
              </form>
            </ModalBody>
          </ModalContent>
        </Modal>
      </>
    );
};


  export default ModalForm;