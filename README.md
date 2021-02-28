![MIT LICENSE](https://img.shields.io/github/license/William-Krug/redux-feedback-loop.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/William-Krug/redux-feedback-loop.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/William-Krug/redux-feedback-loop.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/William-Krug/redux-feedback-loop.svg?style=social)

# Feedback Loop

## Description

_Duration: 1 Weekend Sprint_

This app was designed to implement a feedback survey for students. Questions about how a student is feeling, their understanding of content and how well they feel supported are mandatory questions. Students have the option to leave any comments if they so choose. Before submitting their responses, students have the chance to review their answers and change them if needed.

### Prerequisites

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [PostgreSQL](https://www.postgresql.org)
- [Postico](https://eggerapps.at/postico/)

## Installation

1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage

1. For the feedback questions that ask for a rating, users can type a number in the input field or use the arrows to select the appropriate response. Responses must be between 1 and 5 (inclusive).
   (**NOTE:** These questions are mandatory to move onto the next page.)
2. For the feedback question asking about comments, users can type or copy and paste their response in the input field.
3. Click the **NEXT** button on the feedback question pages to move to the next question.
4. At the end of the survey, users have the chance to review their answers. If they are correct, click the **SUBMIT** button to send the responses.
5. Click the **Edit** button to update any responses before submitting feedback.
6. Users are thanked for their participation and given the opportunity to start the feedback survey anew.

## Built With

- HTML
- CSS
- JavaScript
- Node
- Express
- React
- Redux
- PostgreSQL
- Postico

## License

[MIT]('./LICENSE.txt')

MIT License

Copyright (c) [2021] [William Krug]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality.

## Support

If you have suggestions or issues, please email me at [william.p.krug@gmail.com](william.p.krug@gmail.com)
