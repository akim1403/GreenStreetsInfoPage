import React from "react";
import { Container, Title, Accordion, createStyles, rem } from "@mantine/core";

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
  },

  title: {
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
    paddingBottom: "2%",
  },

  item: {
    borderRadius: theme.radius.md,
    marginBottom: theme.spacing.lg,
    border: `${rem(1)} solid ${
      theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },
}));

const placeholder = "HELLOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO";
//import map from '../images/world-map-made-of-green.jpg'
function SetUpInfo() {
  const { classes } = useStyles();
  return (
    <div className="FAQInfo">
      <div className="FAQsection">
        <Container size="sm" className={classes.wrapper}>
          <Title align="center" className={classes.title}>
            General
          </Title>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>
                How can I reset my password?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>
                Can I create more that one account?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>
                How can I subscribe to monthly newsletter?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>
                Do you store credit card information securely?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>
                What payment systems to you work with?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>

      <div className="FAQsection">
        <Container size="sm" className={classes.wrapper}>
          <Title align="center" className={classes.title}>
            Technical
          </Title>

          <Accordion variant="separated">
            <Accordion.Item className={classes.item} value="reset-password">
              <Accordion.Control>
                How can I reset my password?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="another-account">
              <Accordion.Control>
                Can I create more that one account?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="newsletter">
              <Accordion.Control>
                How can I subscribe to monthly newsletter?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="credit-card">
              <Accordion.Control>
                Do you store credit card information securely?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>

            <Accordion.Item className={classes.item} value="payment">
              <Accordion.Control>
                What payment systems to you work with?
              </Accordion.Control>
              <Accordion.Panel>{placeholder}</Accordion.Panel>
            </Accordion.Item>
          </Accordion>
        </Container>
      </div>
    </div>
  );
}

export default SetUpInfo;
