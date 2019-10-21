/**
 * @api {get} /goals Gets all goals
 * @apiName getGoals
 * @apiGroup Goals
 *
* @apiHeader {String} Authorization Users unique access-token.
* @apiHeaderExample {json} Header-Example:
      {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
      }
*
*
* @apiSuccess {Number} total Number of goals retrieved.
* @apiSuccess {Number} limit Number of goals limited to.
* @apiSuccess {Number} skip Number of goals to skip.
* @apiSuccess {Array} data List of goals.
*
* @apiSuccessExample Success-Response:
*     HTTP/1.1 200 OK
*     {
    "total": 1,
    "limit": 30,
    "skip": 0,
    "data": [
        {
            "_id": "5dabe9d14993401226b60764",
            "title": "Be a better leader",
            "tasks": [
                {
                    "_id": "5dabe9d14993401226b60769",
                    "title": "Have a career conversation with your direct reports",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "duration": 90
                }
            ],
            "createdAt": "2019-10-20T05:00:01.714Z",
            "updatedAt": "2019-10-20T05:00:01.714Z",
            "__v": 0
        },
        
    ]
}
*/

/**
  * @api {get} /goals/:id Get a goal object
  * @apiName getGoal
  * @apiGroup Goals
  * 
  * @apiHeader {String} Authorization Users unique access-token.
  * @apiHeaderExample {json} Header-Example:
        {
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g"
        }
  *
  * @apiParam {Number} id Goal unique ID.
  *
  * @apiSuccess {String} title Goal title.
  * @apiSuccess {Array} tasks Tasks attached to a goal.
  * @apiSuccess {String} _id MongoDB object id.
  * @apiSuccess {Date} createdAt Timestamp.
  * @apiSuccess {Date} updatedAt Timestamp.
  * @apiSuccess {Number} __v Mongoose versionKey.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 200 OK
  *     {
            "_id": "5dabe9d14993401226b60764",
            "title": "Be a better leader",
            "tasks": [
                {
                    "_id": "5dabe9d14993401226b60769",
                    "title": "Have a career conversation with your direct reports",
                    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                    "duration": 90
                }
            ],
            "createdAt": "2019-10-20T05:00:01.714Z",
            "updatedAt": "2019-10-20T05:00:01.714Z",
            "__v": 0
        }
  *
  * @apiError BadRequest Cast to ObjectId failed.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 400 Bad Request
  *     {
            "name": "BadRequest",
            "message": "Cast to ObjectId failed for value \"5dab0b0311f86874e7b5872cs\" at path \"_id\" for model \"goals\"",
            "code": 400,
            "className": "bad-request",
            "errors": {}
        }
*/

// Initializes the `goals` service on path `/goals`
const { Goals } = require('./goals.class');
const createModel = require('../../models/goals.model');
const hooks = require('./goals.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/goals', new Goals(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('goals');

  service.hooks(hooks);
};
