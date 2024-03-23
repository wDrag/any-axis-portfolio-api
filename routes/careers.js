var express = require("express");
var router = express.Router();
const axios = require("axios");

/* GET careers List. */

router.get("/", async function (req, res, next) {
  const CareersList = [
    {
      CategoryName: `Engineering & Trading`,
      JobsList: [
        {
          JobTitle: `Senior Software Engineer`,
          Location: `SINGAPORE`,
          id: 1,
        },
        {
          JobTitle: `Senior Software Engineer`,
          Location: `SINGAPORE`,
          id: 2,
        },
        {
          JobTitle: `Senior Software Engineer`,
          Location: `SINGAPORE`,
          id: 3,
        },
      ],
    },
    {
      CategoryName: `Finance & Accounting`,
      JobsList: [
        {
          JobTitle: `Finance Manager`,
          Location: `SINGAPORE`,
          id: 4,
        },
        {
          JobTitle: `Finance Manager`,
          Location: `SINGAPORE`,
          id: 5,
        },
        {
          JobTitle: `Finance Manager`,
          Location: `SINGAPORE`,
          id: 6,
        },
      ],
    },
  ];
  res.status(200).send(CareersList);
});

router.get("/jobDetails", async function (req, res, next) {
  const { jobId } = req.query;
  const JobDetails = {
    JobTitle: "Senior Software Engineer",
    Location: "SINGAPORE",
    JobDescription:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum excepturi officiis repellat eveniet eaque dolores ipsam expedita corporis ducimus provident soluta rerum doloribus sunt, nulla quia nobis, delectus, nam fugit.",
    JobOccupation:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis, esse dolorum nemo sint iusto accusantium aliquam laborum odit, corporis asperiores, est nisi iure amet similique aspernatur voluptatum omnis. Maxime.",
    JobQualification:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi officiis, esse dolorum nemo sint iusto accusantium aliquam laborum odit, corporis asperiores, est nisi iure amet similique aspernatur voluptatum omnis. Maxime.",
    AboutCompany:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum excepturi officiis repellat eveniet eaque dolores ipsam expedita corporis ducimus provident soluta rerum doloribus sunt, nulla quia nobis, delectus, nam fugit.",
  };
  res.status(200).send(JobDetails);
});

router.post("/apply", async function (req, res, next) {
  const { formData } = req.body;
  console.log("formData", formData);
  try {
    const response = await axios.post(
      process.env.GOOGLE_APP_SCRIPT_URL,
      formData
    );
    console.log("response", response.data);
    res.status(200).send("Applied Successfully");
  } catch (error) {
    console.log("error", error);
    res.status(500).send("Failed to Apply");
  }
});

module.exports = router;
