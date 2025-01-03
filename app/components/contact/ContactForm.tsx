
"use client";
import { useState, FC, useRef, BaseSyntheticEvent } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Select, MenuItem, Button, styled, SelectChangeEvent } from "@mui/material";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import axios from "axios";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export const ContactForm: FC = () => {
  const [loading, setLoading] = useState(false);
  const [name, updateName] = useState("");
  const [email, updateEmail] = useState("");
  const [phone, updatePhone] = useState("");
  const [file, updateFile] = useState<File | null>();
  const [fileData, updateFileData] = useState<Buffer | null>();
  const [request, updateRequest] = useState("");
  const [message, updateMessage] = useState("");
  const [errorMessage, updateErrorMessage] = useState<{
    message: string;
    color: string;
  }>();
  const fileRef = useRef<HTMLInputElement>(null);
  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  // contact form functionality
  const sendEmail = async (e: BaseSyntheticEvent) => {
    e.preventDefault();

    setLoading(true);
    if (
      name != "" &&
      email != "" &&
      phone.length > 2 &&
      request != "" &&
      message != ""
    ) {
      axios
        .post(
          "/api/email/send",
          file
            ? {
              name: name,
              email: email,
              phone: phone,
              request: request,
              message: message,
              attachment: { filename: file?.name, content: fileData },
            }
            : {
              name: name,
              email: email,
              phone: phone,
              request: request,
              message: message,
            },
          {
            headers: {
              "content-type": "application/json",
              Accept: "application/json",
            },
          }
        )
        .then((result) => {
          if (result.status === 200) {
            setLoading(false);
            updateErrorMessage({
              message: `Thank you ${name}, We'll get back to you as soon as possible.`,
              color: "green",
            });
            setTimeout(() => {
              updateErrorMessage({ message: "", color: "" });

              updateFile(null);
              {
                fileRef.current ? ()=>{fileRef.current && (fileRef.current.value = "")} : null;
              }
              formRef.current?.reset();
            }, 4000);
          } else {
            setLoading(false);
            updateErrorMessage({
              message: "Something went wrong, Please try again later.",
              color: "red",
            });
            setTimeout(() => {
              updateErrorMessage({ message: "", color: "" });
            }, 2000);
          }
        })
        .catch((err) => {
          setLoading(false);
          updateErrorMessage({
            message: err.message,
            color: "red",
          });
          setTimeout(() => {
            updateErrorMessage({ message: "", color: "" });
          }, 2000);
        });
    } else {
      setLoading(false);
      updateErrorMessage({
        message: "Make sure All required fields with * are filled!",
        color: "red",
      });
      setTimeout(() => {
        updateErrorMessage({ message: "", color: "" });
      }, 2000);
    }
  };
  // when another file is being uploaded
  const changeFile = async (e: BaseSyntheticEvent) => {
    
    if (
      e.target.files[0].type === "application/pdf" ||
      e.target.files[0].type === "application/msword" ||
      e.target.files[0].type ===
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      let file: File = e.target.files[0];
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      updateFileData(buffer);
      updateFile(file);
    } else {
      updateErrorMessage({
        message: `File type not supported. Only .pdf, .doc, or .docx files`,
        color: "red",
      });
      setTimeout(() => {
        updateErrorMessage({ message: "", color: "" });
      }, 3000);
    }
  };
  // select options
  const options = [
    "Discuss my idea",
    "Development",
    "Design",
    "SEO",
    "Other (Mention in the message)"
  ];

  return (
    <div className="contact-form">
      <h3>Contact</h3>
      <p className="contact-ad">Let&apos;s bring your ideas to life; contact me to create stunning websites and innovative solutions!</p>
      <form onSubmit={sendEmail} ref={formRef}>
        <div className='contact-wrapper'>
          <div className="contact-item">
            <label htmlFor="fname">FULL NAME *</label>
            <input
              required
              type="text"
              name="fname"
              onChange={(e: BaseSyntheticEvent) => {
                updateName(e.target.value);
              }}
            />
          </div>
          <div className="contact-item">
            <label htmlFor="email">EMAIL *</label>
            <input
              type="email"
              name="email"
              onChange={(e: BaseSyntheticEvent) => {
                updateEmail(e.target.value);
              }}
            />
          </div>

          <div className="contact-item">
            <label htmlFor="phone">PHONE *</label>
            <input
              required
              ref={phoneRef}
              type="tel"
              minLength={0}
              maxLength={16}
              pattern="\+?[0-9]*"
              placeholder="+1(123)-456-7890"
              name="phone"
              onChange={(e: BaseSyntheticEvent) => {
                e.target.value = phoneRef.current?.value.replace(/[^0-9+]/g, '');
                updatePhone(e.target.value);
              }}
            />
          </div>
          <div className="contact-item">
            <label htmlFor="message">MESSAGE *</label>
            <textarea
              ref={textAreaRef}
              required
              name="message"
              rows={7}
              style={{ resize: "none" }}
              onChange={(e: BaseSyntheticEvent) => {
                updateMessage(e.target.value);
              }}
            ></textarea>
          </div>
          <div className="contact-item">
            <label htmlFor="need">I NEED HELP WITH...</label>
            <Select
              required
              name="need"
              onChange={(e: SelectChangeEvent<string>) => {
                updateRequest(e.target.value);
              }}
              displayEmpty
              value={request}
              sx={{ background: "white" }}
            >
              <MenuItem value="" disabled autoFocus>
                <em>Choose an option</em>
              </MenuItem>
              {options.map((option) => {
                return (
                  <MenuItem
                    sx={[
                      {
                        "&:hover": {
                          color: '#F28500',
                          backgroundColor: "#90d5ff",
                        },
                      },
                    ]}
                    key={option}
                    value={option}
                  >
                    {option}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
        </div>
        <div className="form-upload-wrapper">
          <Button
            component="label"
            variant="contained"
            startIcon={file ? <CheckCircleIcon /> : <CloudUploadIcon />}
            sx={{
              backgroundColor: file ? "#d9d9d9" : "#e6e0e9",
              color: "black",
              width: "100%",
              marginRight: "auto",
              marginLeft: "0",
              "&:hover": {
                backgroundColor: "#F28500",
                color: "white",
              },

              fontSize: "1rem !important",
            }}
          >
            {file ? file?.name : "Upload (Max 25MB)"}{" "}
            {file?.name != "" && file ? (
              `${(file?.size / 1024 / 1024).toFixed(2)} MB`
            ) : (
              <></>
            )}
            <VisuallyHiddenInput
              type="file"
              accept=".doc,.docx,.pdf"
              name="file"
              ref={fileRef}
              onChange={changeFile}
            />
          </Button>
          {file ? (
            <Button
              onClick={() => {
                if (fileRef.current) {
                  fileRef.current.value = "";
                }
                updateFile(null);
              }}
            >
              <DeleteIcon sx={{ color: "#FF2400" }} />
            </Button>
          ) : (
            <></>
          )}
        </div>
        <div className="button-wapper">
          {loading ? (
            <button disabled className="form-submit-button">
              <CircularProgress
                sx={{ color: "#ffffff" }}
                variant="indeterminate"
              />
            </button>
          ) : (
            <button className="form-submit-button" type="submit">
              Submit Request
            </button>
          )}
        </div>
        <p
          style={{
            color: errorMessage?.color,
            textAlign: "center",
            fontSize: "1.2rem !important",
          }}
        >
          {errorMessage?.message}
        </p>
      </form>
    </div>
  );
};
