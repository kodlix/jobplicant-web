import request from 'superagent';
import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent, global.Promise);

export const API_ROOT = process.env.NODE_ENV === "development" ? process.env.API_ROOT_LOCAL : "https://jobplicant-api-pyfpg.ondigitalocean.app";
console.log('API_ROOT', API_ROOT);
console.log("environmental variables", process.env);
export const IMAGE_URL = API_ROOT + '/account/uploads/';

let accessToken = null;
const responseBody = res => res.body;

const getAuthToken = () => {
  const auth = JSON.parse(window.localStorage.getItem('auth'));
  const accessToken = auth ? auth.accessToken : null;
  return accessToken;
}

export const tokenPlugin = req => {
  req.set('Accept', 'application/json');

  accessToken = getAuthToken();
  if (accessToken) {
    req.set('Authorization', `Bearer ${accessToken}`);
  }

  req.on('response', function (res) {
    if (res.status === 401) {
    }
  });

}

const requests = {
  del: url =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: url =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent.put(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody),
  post: (url, body) =>
    superagent.post(`${API_ROOT}${url}`, body).use(tokenPlugin).then(responseBody)
};

const Auth = {
  logError: (data) =>
    requests.post('/v1/log/error', { data }),
  isAuth: () => {
    const accessToken = getAuthToken();
    return !!accessToken;
  },
  setToken: () => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));
    accessToken = auth.accessToken;
  },
  saveAuthData: (_user) => {
    window.localStorage.setItem('auth', JSON.stringify(_user));
    accessToken = _user.accessToken;
  },
  saveFirstTime: () => {
    window.localStorage.setItem('ftime', true);
  },
  loggedInOnce: () => {
    return !!window.localStorage.getItem('ftime');
  },
  logout: () => {
    window.localStorage.removeItem('auth')
    accessToken = null
  },

  current: () => JSON.parse(window.localStorage.getItem('auth')),
  login: (email, password, type) =>
    requests.post('/auth/signIn', { email, password, type }),
  register: data =>
    requests.post('/auth/signUp', data),
  checkValidEmail: email =>
    requests.post(`/account/email/is-valid`, { email }),
  forgotPassword: email =>
    requests.put(`/auth/send-forget-password-email`, { email }),
  updatePassword: (data) => {
    const { shortCode, email, password, confirmPassword } = data;
    requests.put(`/auth/change-password-email/${shortCode}/${email}`, { password, confirmPassword })
  },
  resetPassword: (email, password) =>
    requests.post(`/ account / password / reset`, { email, password }),
  sendResetToken: (email) =>
    requests.post(`/ account / password / email`, { email }),
  verifyResetToken: (email, token) =>
    requests.post(`/ account / password / verify - token`, { email, token }),
  verifyAccount: (code) =>
    requests.get(`/verification/signup/${code}`)
}

const User = {
  save: (user) =>
    requests.post('/user', user),
  load: () =>
    requests.get('/user'),
  edit: (user) =>
    requests.put('/user', user),
  delete: (id) =>
    requests.del(`/ user / ${id}`),
  view: (id) =>
    requests.get(`/ user / ${id}`)
};

const Sector = {
  save: (data) =>
    requests.post('/sector', data),
  load: () => requests.get('/sector'),
  search: (param) => requests.get('/sector' + param),
  edit: (sector) =>
    requests.put('/sector', sector),
  delete: (id) =>
    requests.del(`/ sector / ${id}`),
  view: (id) =>
    requests.get(`/ sector / ${id}`)
};

const Account = {
  getProfileInfo: () =>
    requests.get(`/accounts/profile/active`),
  updateBiography: (biography) =>
    requests.put('/accounts/bio', biography),
   updateExperience: (experience) =>
    requests.put('/accounts/job-experience', experience),
  updateContactInfo: (contactInfo) =>
    requests.put('/accounts/contact-info', contactInfo),
  updateHobies: (hobbies) =>
    requests.put('/accounts/hobbies', hobbies),
  updateProfilePicture: (image) =>
    requests.put('/account/uploads', image),
  load: (email) => requests.get(`/ account / getbyemail / ${email}`),
  getByID: (id) =>
    requests.get(`/ account / ${id}`),
  verufyAccount: (id) =>
    requests.get(`/ account / ${id}`),
}

const JobExperience = {
  save: (data) =>
    requests.post('/job-experience', data),
  load: () => requests.get('/job-experience'),
  search: (param) => requests.get('/job-experience' + param),
  edit: (id, data) =>
    requests.put(`/job-experience/${id}`, data),
  delete: (id) =>
    requests.del(`/job-experience/ ${id}`),
  view: (id) =>
    requests.get(`/job-experience/ ${id}`)
}

const UserSkill = {
  save: (userskill) =>
    request.post('/user-skill', userskill),
  load: () =>
    request.get('/user-skill')
}

const Country = {
  load: () => requests.get('/country'),
};
const State = {
  loadByCountry: (countryid) =>
    requests.get(`/state/getbycountry/${countryid}`),
};
const Lga = {
  loadByState: (stateid) => requests.get(`/ lga / getbystate / ${stateid}`),
};

const JobVacancy = {
  save: (jobvacancy) =>
    requests.post('/jobvacancy', jobvacancy),
  load: (pageNumber) =>
    requests.get('/jobvacancy/applications/active', pageNumber),
  loadAll: (pageNumber) =>
    requests.get('/jobvacancy', pageNumber),
  view: (id) =>
    requests.get(`/ jobvacancy / ${id}`),
  edit: (id, jobvacancy) =>
    requests.put(`/ jobvacancy / ${id}`, jobvacancy),
  delete: (id) =>
    requests.del(`/ jobvacancy / ${id}`),
  approve: (id, approval) =>
    requests.put(`/ jobvacancy / approve / ${id}`, approval),
  reject: (id, rejection) =>
    requests.put(`/ jobvacancy / reject / ${id}`, rejection)

};


const Outlet = {
  save: (outlet) =>
    requests.post('/outlet', outlet),
  load: (pageNumber) =>
    requests.get('/outlet/apps/active', pageNumber),
  view: (id) =>
    requests.get(`/ outlet / ${id}`),
  edit: (id, outlet) =>
    requests.put(`/ outlet / ${id}`, outlet),
  delete: (id) =>
    requests.del(`/ outlet / ${id}`)
};

const Poll = {
  save: (poll) =>
    requests.post('/poll', poll),
  load: (pageNumber) =>
    requests.get('/poll', pageNumber),
  view: (id) =>
    requests.get(`/ poll / ${id}`),
  edit: (id, poll) =>
    requests.put(`/ poll / ${id}`, poll),
  delete: (id) =>
    requests.del(`/ poll / ${id}`)
};

const ScheduleMeeting = {
  save: (schedulemeeting) =>
    requests.post('/meeting/schedule-meeting', schedulemeeting),
  load: () =>
    requests.get('/meeting'),
  view: (id) =>
    requests.get(`/ meeting / ${id}`),
  edit: (id, schedulemeeting) =>
    requests.put(`/ meeting / ${id}`, schedulemeeting),
  startmeeting: (id, startmeeting) =>
    requests.put(`/ meeting / start - meeting${id}`, startmeeting),
  endmeeting: (id, endmeeting) =>
    requests.put(`/ meeting / end - meeting${id}`, endmeeting),
  delete: (id) =>
    requests.del(`/ meeting / ${id}`),
};

export default {
  Auth,
  User,
  Outlet,
  Sector,
  Account,
  JobExperience,
  Country,
  State,
  Lga,
  JobVacancy,
  ScheduleMeeting,
  Poll,
  UserSkill,
  setToken: _accessToken => { accessToken = -accessToken; },
};
