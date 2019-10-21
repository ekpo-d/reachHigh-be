/**
 * @api {post} /authentication Login authentication
 * @apiName postAuthentication
 * @apiGroup Authentication
 *
 * @apiParamExample {json} Request-Example:
 * {
      "email": "example@test.com",
      "password": "password",
      "strategy": "local"
    }
  *
  * @apiSuccess {String} accessToken JWT access token.
  * @apiSuccess {Object} authentication Strategy used in authentication.
  * @apiSuccess {Object} user User object.
  *
  * @apiSuccessExample Success-Response:
  *     HTTP/1.1 201 Created
  *     {
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6ImFjY2VzcyJ9.eyJpYXQiOjE1NzE1NTAyNzYsImV4cCI6MTU3MTYzNjY3NiwiYXVkIjoiaHR0cHM6Ly95b3VyZG9tYWluLmNvbSIsImlzcyI6ImZlYXRoZXJzIiwic3ViIjoiNWRhYjBiMDMxMWY4Njg3NGU3YjU4NzJjIiwianRpIjoiNjFlOGJkNDEtN2RiMS00OGI3LTk2NWUtMGRjZWNjYWUyYWI0In0.GTECkn08JprtUh4f21vFF8D3pNub8CrtnppOJqi8V-g",
            "authentication": {
                "strategy": "local"
            },
            "user": {
                "_id": "5dab0b0311f86874e1234",
                "completedTasks": [],
                "name": "John Doe",
                "email": "example@test.com",
                "createdAt": "2019-09-19T13:09:23.573Z",
                "updatedAt": "2019-09-20T05:36:06.307Z",
                "__v": 0,
                "selectedGoals": []
            }
        }
  *
  * @apiError NotAuthenticated Invalid login.
  *
  * @apiErrorExample Error-Response:
  *     HTTP/1.1 401 Unauthorized
  *     {
          "name": "NotAuthenticated",
          "message": "Invalid login",
          "code": 401,
          "className": "not-authenticated",
          "errors": {}
      }
  */

const { AuthenticationService, JWTStrategy } = require('@feathersjs/authentication');
const { LocalStrategy } = require('@feathersjs/authentication-local');
const { expressOauth } = require('@feathersjs/authentication-oauth');

/**
 * Authentication service
 * This is responsible for login authentication.
 */
module.exports = app => {
  const authentication = new AuthenticationService(app);

  authentication.register('jwt', new JWTStrategy());
  authentication.register('local', new LocalStrategy());

  app.use('/authentication', authentication);
  app.configure(expressOauth());
};
