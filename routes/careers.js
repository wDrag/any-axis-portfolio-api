var express = require("express");
var router = express.Router();

/* GET careers List. */

router.get("/", function (req, res, next) {
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
  res.send(CareersList);
});

router.get("/jobDetails", function (req, res, next) {
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
  res.send(JobDetails);
});
module.exports = router;
