import _superagent from 'superagent';
import superagentPromise from 'superagent-promise';

const superagent = superagentPromise(_superagent, global.Promise);

export const API_ROOT = 'http://localhost:8080';
export const IMAGE_URL = API_ROOT + '/account/uploads/';

let token = null;
const responseBody = res => res.body;

const getAuthToken = () => {
  const auth = JSON.parse(window.localStorage.getItem('auth'));
  const token = auth ? auth.token : null;
  return token;
}

export const tokenPlugin = req => {
  req.set('Accept', 'application/json');

  token = getAuthToken();
  if (token) {
    req.set('Authorization', `Bearer ${token}`);
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
    const token = getAuthToken();
    return !!token;
  },
  setToken: () => {
    const auth = JSON.parse(window.localStorage.getItem('auth'));
    token = auth.token;
  },
  saveAuthData: (_user) => {
    window.localStorage.setItem('auth', JSON.stringify(_user));
    token = _user.token;
  },
  saveFirstTime: () => {
    window.localStorage.setItem('ftime', true);
  },
  loggedInOnce: () => {
    return !!window.localStorage.getItem('ftime');
  },
  logout: () => {
    window.localStorage.removeItem('auth')
    token = null
  },

  current: () => JSON.parse(window.localStorage.getItem('auth')),
  login: (email, password, type) =>
    requests.post('/auth/signIn', { email, password, type }),
  register: data =>
    requests.post('/auth/signUp', data),
  checkValidEmail: email =>
    requests.post(`/account/email/is-valid`, { email }),
  forgotPassword: email =>
    requests.post(`/account/forgotPassword`, { email }),
  updatePassword: (data) =>
    requests.put(`/account/updatepassword`, data),
  resetPassword: (email, password) =>
    requests.post(`/account/password/reset`, { email, password }),
  sendResetToken: (email) =>
    requests.post(`/account/password/email`, { email }),
  verifyResetToken: (email, token) =>
    requests.post(`/account/password/verify-token`, { email, token })
}

const User = {
  save: (user) =>
    requests.post('/user', user),
  load: () =>
    requests.get('/user'),
  edit: (user) =>
    requests.put('/user', user),
  delete: (id) =>
    requests.del(`/user/${id}`),
  view: (id) =>
    requests.get(`/user/${id}`)
};

const Sector = {
  save: (data) =>
    requests.post('/sector', data),
  load: () => requests.get('/sector'),
  search: (param) => requests.get('/sector' + param),
  edit: (sector) =>
    requests.put('/sector', sector),
  delete: (id) =>
    requests.del(`/sector/${id}`),
  view: (id) =>
    requests.get(`/sector/${id}`)
};

const Account = {
  updateIndividualProfile: (email, data) =>
    requests.put(`/account/individual/${email}`, data),
  updateProfilePicture: (image) =>
    requests.put('/account/uploads', image),
  load: (email) => requests.get(`/account/getbyemail/${email}`),
  updateCorporateProfile: (email, data) =>
    requests.put(`/account/cooperate/${email}`, data),
  organizationName: () =>
    requests.get('/account/corporate/organizations'),
  getByID: (id) =>
    requests.get(`/account/${id}`),
}

const Country = {
  load: () => requests.get('/country'),
};
const State = {
  loadByCountry: (countryid) => requests.get(`/state/getbycountry/${countryid}`),
};
const Lga = {
  loadByState: (stateid) => requests.get(`/lga/getbystate/${stateid}`),
};

const JobVacancy = {
  save: (jobvacancy) =>
    requests.post('/jobvacancy', jobvacancy),
  load: (pageNumber) =>
    requests.get('/jobvacancy/applications/active', pageNumber),
  loadAll: (pageNumber) =>
    requests.get('/jobvacancy', pageNumber),
  view: (id) =>
    requests.get(`/jobvacancy/${id}`),
  edit: (id, jobvacancy) =>
    requests.put(`/jobvacancy/${id}`, jobvacancy),
  delete: (id) =>
    requests.del(`/jobvacancy/${id}`),
  approve: (id, approval) =>
    requests.put(`/jobvacancy/approve/${id}`, approval),
  reject: (id, rejection) =>
    requests.put(`/jobvacancy/reject/${id}`, rejection)

};


const Outlet = {
  save: (outlet) =>
    requests.post('/outlet', outlet),
  load: (pageNumber) =>
    requests.get('/outlet/apps/active', pageNumber),
  view: (id) =>
    requests.get(`/outlet/${id}`),
  edit: (id, outlet) =>
    requests.put(`/outlet/${id}`, outlet),
  delete: (id) =>
    requests.del(`/outlet/${id}`)
};


const Poll = {
  save: (poll) =>
    requests.post('/poll', poll),
  load: (pageNumber) =>
    requests.get('/poll', pageNumber),
  view: (id) =>
    requests.get(`/poll/${id}`),
  edit: (id, poll) =>
    requests.put(`/poll/${id}`, poll),
  delete: (id) =>
    requests.del(`/poll/${id}`)
};

const ScheduleMeeting = {
  save: (schedulemeeting) =>
    requests.post('/meeting/schedule-meeting', schedulemeeting),
  load: () =>
    requests.get('/meeting'),
  view: (id) =>
    requests.get(`/meeting/${id}`),
  edit: (id, schedulemeeting) =>
    requests.put(`/meeting/${id}`, schedulemeeting),
  startmeeting: (id, startmeeting) =>
    requests.put(`/meeting/start-meeting${id}`, startmeeting),
  endmeeting: (id, endmeeting) =>
    requests.put(`/meeting/end-meeting${id}`, endmeeting),
  delete: (id) =>
    requests.del(`/meeting/${id}`),
};

export default {
  Auth,
  User,
  Outlet,
  Sector,
  Account,
  Country,
  State,
  Lga,
  JobVacancy,
  ScheduleMeeting,
  Poll,
  setToken: _token => { token = _token; },
};
