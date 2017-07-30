import _ from 'lodash';
import 'whatwg-fetch';
import { ACCESS_TOKEN_KEY } from 'config';

const baseAPIEndpoint = 'http://localhost:3000';

export const httpMethods = {
  POST: 'POST',
  GET: 'GET',
  PUT: 'PUT',
  DELETE: 'DELETE',
};

export const routes = {
  /**
   * Exchange token by email and password
   * @param username
   * @param password
   * @returns {{path: string, method: string, body: {username: *, password: *}}}
   */
  exchangeToken(username, password) {
    return {
      path: '/api/tokens',
      method: httpMethods.POST,
      body: {
        username,
        password,
      },
    };
  },
  course: {
    create(schoolID, course) {
      return {
        path: `/api/manager/schools/${schoolID}/courses`,
        method: httpMethods.POST,
        body: course,
      };
    },
    all(schoolID) {
      return {
        path: `/api/manager/schools/${schoolID}/courses`,
        method: httpMethods.GET,
      };
    },
  },
  classroom: {
    create(schoolID, classroom) {
      return {
        path: `/api/manager/schools/${schoolID}/courses/${classroom.get('course_id')}/classes`,
        method: httpMethods.POST,
        body: classroom.delete('course_id'),
      };
    },
    all(schoolID) {
      return {
        path: `/api/manager/schools/${schoolID}/classes`,
        method: httpMethods.GET,
      };
    },
    students(schoolID, classID) {
      return {
        path: `/api/manager/schools/${schoolID}/classes/${classID}/students`,
        method: httpMethods.GET,
      };
    },
    addStudents(schoolID, classID, userIDs) {
      return {
        path: `/api/manager/schools/${schoolID}/classes/${classID}/students`,
        method: httpMethods.POST,
        body: {
          user_ids: userIDs,
        },
      };
    },
    deleteStudent(schoolID, classID, studentID) {
      return {
        path: `/api/manager/schools/${schoolID}/classes/${classID}/students/${studentID}`,
        method: httpMethods.DELETE,
      };
    },
  },
  unit: {
    get(schoolID, courseID, unitID) {
      return {
        path: `/api/manager/schools/${schoolID}/courses/${courseID}/units/${unitID}`,
        method: httpMethods.GET,
      };
    },
    create(schoolID, courseID, unit) {
      return {
        path: `/api/manager/schools/${schoolID}/courses/${courseID}/units`,
        method: httpMethods.POST,
        body: unit,
      };
    },
    all(schoolID, courseID) {
      return {
        path: `/api/manager/schools/${schoolID}/courses/${courseID}/units`,
        method: httpMethods.GET,
      };
    },
    delete(schoolID, courseID, unitID) {
      return {
        path: `/api/manager/schools/${schoolID}/courses/${courseID}/units/${unitID}`,
        method: httpMethods.DELETE,
      };
    },
  },
  user: {
    notJoinToClass(schoolID, classID) {
      return {
        path: `/api/manager/schools/${schoolID}/users?class_id=${classID}`,
        method: httpMethods.GET,
      };
    },
    create(schoolID, user) {
      return {
        path: `/api/manager/schools/${schoolID}/users`,
        method: httpMethods.POST,
        body: user,
      };
    },
    all(page, size) {
      return {
        path: `/api/admin/users?${buildQueryString({ page, per_page: size })}`,
        method: httpMethods.GET,
      };
    },
  },
  me: {
    ownSchools() {
      return {
        path: '/api/me/schools',
        method: httpMethods.GET,
      };
    },
  },
  school: {
    create(body) {
      return {
        path: '/api/manager/schools',
        method: httpMethods.POST,
        body,
      };
    },
    show(schoolID) {
      return {
        path: `/api/schools/${schoolID}`,
        method: httpMethods.GET,
      };
    },
  },
};

function buildQueryString(obj = {}) {
  const qs = _.reduce(obj, (result, value, key) => (
    (!_.isNull(value) && !_.isUndefined(value))
      ? (result += `${key}=${value}&`) // eslint-disable-line no-param-reassign
      : result
  ), '').slice(0, -1);
  return qs;
}

/**
 * Parses the JSON returned by a network request
 *
 * @param  {object} response A response from a network request
 *
 * @return {object}          The parsed JSON from the request
 */
function parseJSON(response) {
  if (response.status === 204) {
    return Promise.resolve();
  }
  return response.json();
}

/**
 * Checks if a network request came back fine, and throws an error if not
 *
 * @param  {object} response   A response from a network request
 *
 * @return {object|undefined} Returns either the response, or throws an error
 */
function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const error = new Error(response.statusText);
  return parseJSON(response).then((json) => {
    error.response = json;
    return Promise.reject(error);
  });
}

/**
 * Requests a URL, returning a promise
 *
 * @param  {object} route  The route has to confront to value of routes dictionary
 *
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(route) {
  const url = `${baseAPIEndpoint}${route.path}`;
  const options = {
    method: route.method,
  };
  const token = window.localStorage.getItem(ACCESS_TOKEN_KEY);
  if (token) {
    const authHeader = {
      Authorization: `Bearer ${token}`,
    };
    options.headers = _.assign({}, options.headers, authHeader);
  }

  const body = route.body;
  if (body) {
    if (body instanceof FormData) {
      options.body = body;
    } else {
      const contentType = {
        'Content-Type': 'application/json',
      };
      options.headers = _.assign({}, options.headers, contentType);
      options.body = JSON.stringify(body);
    }
  }
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then((data) => (Promise.resolve({ data })))
    .catch((error) => (Promise.resolve({ error })));
}
