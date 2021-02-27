/* Import Libraries */
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

/**
 * POST route for /feedback
 *
 * Adds new item to the database
 *
 * Request body looks like:
 * {
 *  feelingsScore: 4  //number
 *  understandingScore: 5  //number
 *  supportedScore: 5  //number
 *  comments: 'Redux Rocks!'  //string
 * }
 */
router.post('/', (req, res) => {
  const surveySubmission = req.body;

  // SQL scripts to add survey results to database
  const sqlText = `
    INSERT INTO "feedback"
      ("feeling", "understanding", "support", "comments")
    VALUES
      ($1, $2, $3, $4);
    `;
  const queryArguments = [
    surveySubmission.feelingsScore, // $1
    surveySubmission.understandingScore, // $2
    surveySubmission.supportedScore, // $3
    surveySubmission.comments, // $4
  ];

  // Pool query to database
  pool
    .query(sqlText, queryArguments)
    .then((dbResponse) => {
      // Breadcrumbs for testing and debugging
      console.log('*** pool POST success for /feedback');
      res.sendStatus(201);
    })
    .catch((error) => {
      // Breadcrumbs for testing and debugging
      console.log(`*** Error making database query ${sqlText}:`, error);
      res.sendStatus(500);
    });
});

module.exports = router;
