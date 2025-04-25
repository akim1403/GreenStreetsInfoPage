import React, { useState } from "react";

import MessageSuccess from "../components/messageSuccess";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export function ContactUsInfo() {
  const [showForm, setShowForm] = useState(true);
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  async function handleFormSubmit(event) {
    event.preventDefault();
    if (!/^\S+@\S+$/.test(event.target[1].value) !== true) {
      if (event.target[0].value.trim().length >= 2) {
        if (event.target[2].value.trim().length !== 0) {
          const contactMessage = {
            name: event.target[0].value,
            email: event.target[1].value,
            subject: event.target[2].value,
            message: event.target[3].value,
          };
          setShowForm(false);
          const response = await fetch(
            "http://localhost:5000/api/contactmessage",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(contactMessage),
            }
          );
          await response;
        }
      }
    }
  }

  return (
    <div className="contactForm">
      {showForm ? (
        <form
          id="contact-form"
          ref={(formRef) => (form.formRef = formRef)}
          onSubmit={(e) => {
            form.onSubmit(() => {})();
            handleFormSubmit(e);
          }}
        >
          <Title className="ContactTitle">Get in touch</Title>
          <SimpleGrid
            cols={2}
            mt="xl"
            breakpoints={[{ maxWidth: "sm", cols: 1 }]}
          >
            <TextInput
              label="Name"
              placeholder="Your name"
              name="name"
              variant="filled"
              {...form.getInputProps("name")}
            />
            <TextInput
              label="Email"
              placeholder="Your email"
              name="email"
              variant="filled"
              {...form.getInputProps("email")}
            />
          </SimpleGrid>
          <TextInput
            label="Subject"
            placeholder="Subject"
            mt="md"
            name="subject"
            variant="filled"
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps("message")}
          />
          <Group position="center" mt="xl">
            <Button
              type="submit"
              size="md"
              style={{ backgroundColor: "#32651e" }}
            >
              Send message
            </Button>
          </Group>
        </form>
      ) : (
        <MessageSuccess />
      )}
    </div>
  );
}

export default ContactUsInfo;
