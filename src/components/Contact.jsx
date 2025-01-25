import React, { useRef } from "react";
import { Box, FormControl, TextField, Button } from "@mui/material";
import {
  FaInstagram,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0urcvr9", "template_25sn2qc", form.current, {
        publicKey: "Ww0joQVWhEehfWVYk",
      })
      .then(
        () => {
          e.target.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <>
      <h1>CONTACT ME</h1>
      <div className="container contact">
        <div
          className="contact_form"
          data-aos="flip-down"
          data-aos-duration="1000"
        >
          <form ref={form} onSubmit={sendEmail}>
            <FormControl
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 3, // Spacing between form fields
              }}
            >
              {/* Name Input */}
              <Box
                sx={{
                  width: { xs: "90%", sm: 400, md: 500 }, // Adjust width based on screen size
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
              >
                <TextField
                  fullWidth
                  color="yellow"
                  label="Name"
                  name="user_name"
                  type="text"
                  id="Name"
                  sx={{
                    "& .MuiInputLabel-root": { color: "yellow" }, // Label color
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "yellow" }, // Default border color
                      "&:hover fieldset": { borderColor: "yellow" }, // Hover border color
                      "&.Mui-focused fieldset": { borderColor: "yellow" }, // Focused border color
                      "& .MuiInputBase-input": { color: "yellow" },
                    },
                  }}
                />
              </Box>

              {/* Email Input */}
              <Box
                sx={{
                  width: { xs: "90%", sm: 400, md: 500 },
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
              >
                <TextField
                  fullWidth
                  color="yellow"
                  label="Email"
                  name="user_email"
                  type="email"
                  id="Email"
                  sx={{
                    "& .MuiInputLabel-root": { color: "yellow" }, // Label color
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "yellow" }, // Default border color
                      "&:hover fieldset": { borderColor: "yellow" }, // Hover border color
                      "&.Mui-focused fieldset": { borderColor: "yellow" }, // Focused border color
                      "& .MuiInputBase-input": { color: "yellow" },
                    },
                  }}
                />
              </Box>

              {/* Message Input */}
              <Box
                sx={{
                  width: { xs: "90%", sm: 400, md: 500 },
                  boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)",
                }}
              >
                <TextField
                  fullWidth
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  name="message"
                  rows={4}
                  color="yellow"
                  sx={{
                    "& .MuiInputLabel-root": { color: "yellow" }, // Label color
                    "& .MuiOutlinedInput-root": {
                      "& > fieldset": { borderColor: "yellow" }, // Default border color
                      "&:hover fieldset": { borderColor: "yellow" }, // Hover border color
                      "&.Mui-focused fieldset": { borderColor: "yellow" }, // Focused border color
                      "& .MuiInputBase-input": { color: "yellow" },
                    },
                  }}
                />
              </Box>

              {/* Submit Button */}
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Button
                  variant="outlined"
                  size="large"
                  type="submit"
                  sx={{
                    color: "yellow", // Text color
                    borderColor: "yellow", // Border color
                    boxShadow: "5px 5px 10px 10px rgba(101, 175, 10, 0.5)", // Box shadow
                    "&:hover": {
                      backgroundColor: "rgba(255, 255, 0, 0.2)", // Hover effect
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </FormControl>
          </form>
        </div>
        <div className="contact_me" data-aos="flip-up" data-aos-duration="1000">
          <a
            href="https://www.instagram.com/jainsaab624/"
            target="_blank"
            className="items"
          >
            <FaInstagram className="icons" />
          </a>
          <a
            href="https://www.facebook.com/prateek.jn624/"
            target="_blank"
            className="items"
          >
            <FaFacebookSquare className="icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/prateekjn624/"
            target="_blank"
            className="items"
          >
            <FaLinkedin className="icons" />
          </a>
          <a
            href="https://github.com/prateekjain624"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:prateek.jn624@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
      </div>
    </>
  );
};
