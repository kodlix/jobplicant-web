import request from "superagent";
import _superagent from "superagent";
import superagentPromise from "superagent-promise";

const superagent = superagentPromise(_superagent, global.Promise);

// export const API_ROOT = process.env.NODE_ENV === "development" ? 'http://localhost:8080' : "https://jobplicant-api.herokuapp.com";
// export const API_ROOT = "https://jobplicant-api.herokuapp.com";
// export const API_ROOT = "http://localhost:8080";
export const currentApp = process.env.REACT_APP_CURRENT_APP;
export const isArtisanApp = process.env.REACT_APP_CURRENT_APP === "artisan";

export const API_ROOT = process.env.NODE_ENV === "development" ? process.env.REACT_APP_API_ROOT_LOCAL : process.env.REACT_APP_API_ROOT_PROD;
// export const API_ROOT = "http://localhost:8080";
console.log('ENVIRONMENT:', process.env.NODE_ENV)

console.log("API_ROOT", API_ROOT);
console.log("environmental variables", process.env);
export const IMAGE_URL = API_ROOT + "/account/uploads/";

let accessToken = null;
const responseBody = (res) => res.body;

const getAuthToken = () => {
  const auth = JSON.parse(window.localStorage.getItem("auth"));
  const accessToken = auth ? auth.accessToken : null;
  return accessToken;
};

console.log(' request on dev mode:', process.env.REACT_APP_API_ROOT_LOCAL)
export const tokenPlugin = (req) => {
  req.set("Accept", "application/json");

  accessToken = getAuthToken();
  if (accessToken) {
    req.set("Authorization", `Bearer ${accessToken}`);
  }

  req.on("response", function (res) {
    console.log('onResponse returned kick off')
    if (res.status === 401) {
      //Always revert back here to change the production to the *CORRECT URL*
      // console.log("onResponse: This is called when Authorization is hit")
      localStorage.removeItem("auth");
      if (process.env.NODE_ENV === "development")
        return (window.location.href = "http://localhost:8080/login");
      else return (window.location.href = process.env.API_ROOT_PROD + "/login");
    }
  });

  req.on("error", function (err) {
    //manage error
    // const currentURL = window.location.href;
    // if (err.toString().includes('offline')) {
    //   console.log('super agent error', err, 'current location', currentURL)
    //   if (process.env.NODE_ENV === "development")
    //     return window.location.href = `${process.env.LOCAL_DEV_URL}offline?returnUrl=${currentURL}`;
    //   else
    //     return window.location.href = `${process.env.API_ROOT_PROD}/offline?returnUrl=${currentURL}`;
    // }
  });
};

const requests = {
  del: (url) =>
    superagent.del(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  get: (url) =>
    superagent.get(`${API_ROOT}${url}`).use(tokenPlugin).then(responseBody),
  put: (url, body) =>
    superagent
      .put(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
  post: (url, body) =>
    superagent
      .post(`${API_ROOT}${url}`, body)
      .use(tokenPlugin)
      .then(responseBody),
};

const Auth = {
  logError: (data) => requests.post("/v1/log/error", { data }),
  isAuth: () => {
    const accessToken = getAuthToken();
    return !!accessToken;
  },
  setToken: () => {
    const auth = JSON.parse(window.localStorage.getItem("auth"));
    accessToken = auth.accessToken;
  },
  saveAuthData: (_user) => {
    window.localStorage.setItem("auth", JSON.stringify(_user));
    accessToken = _user.accessToken;
  },
  saveFirstTime: () => {
    window.localStorage.setItem("ftime", true);
  },
  loggedInOnce: () => {
    return !!window.localStorage.getItem("ftime");
  },
  logout: () => {
    window.localStorage.removeItem("auth");
    accessToken = null;
  },
  current: () => JSON.parse(window.localStorage.getItem("auth")),
  isAdmin: () => {
    const user = Auth.current();
    return user?.role === ("Super-admin" || "Developer");
  },
  login: (email, password, type, app) =>
    requests.post("/auth/signIn", {
      email: email.toLowerCase(),
      password,
      type,
      app,
    }),
  register: (data) => requests.post("/auth/signUp", data),
  checkValidEmail: (email) =>
    requests.post(`/account/email/is-valid`, { email }),
  forgotPassword: (email) =>
    requests.put(`/auth/send-forget-password-email`, { email }),

  updatePassword: (shortCode, email, data) => {
    return requests.put(
      `/auth/change-password-email?shortCode=${shortCode}&email=${email}`,
      data
    );
    // console.log("testing", test);
  },
  resetPassword: (email, password) =>
    requests.post(`/ account / password / reset`, { email, password }),
  sendResetToken: (email) =>
    requests.post(`/ account / password / email`, { email }),
  verifyResetToken: (email, token) =>
    requests.post(`/ account / password / verify - token`, { email, token }),
  verifyAccount: (code) => requests.get(`/verification/signup/${code}`),
  artisanAccount: (page, limit, search) =>
    requests.get(
      `/accounts/nearest-artisans?page=${page}&limit=${limit}&search=${search}`
    ),
};

const User = {
  save: (user) => requests.post("/user", user),
  load: () => requests.get("/user"),
  edit: (user) => requests.put("/user", user),
  delete: (id) => requests.del(`/ user / ${id}`),
  view: (id) => requests.get(`/ user / ${id}`),
};

const Sector = {
  save: (data) => requests.post("/sector", data),
  load: () => requests.get("/sector"),
  search: (param) => requests.get("/sector" + param),
  edit: (sector) => requests.put("/sector", sector),
  delete: (id) => requests.del(`/ sector / ${id}`),
  view: (id) => requests.get(`/ sector / ${id}`),
};

const Account = {
  getProfileInfo: () => requests.get(`/accounts/profile/active`),
  updateCompanyInfo: (data) => requests.put("/accounts/company-info", data),
  updateBiography: (biography) => requests.put("/accounts/bio", biography),
  updateProfile: (profile) => requests.put("/accounts/profile", profile), //To update personal info e.g firstname, lastname etc...
  updateExperience: (experience) =>
    requests.put("/accounts/job-experience", experience),
  getProfileInfo: () => requests.get(`/accounts/profile/active`),
  updateBiography: (biography) => requests.put("/accounts/bio", biography),
  updateExperience: (experience) =>
    requests.put("/accounts/job-experience", experience),
  updateContactInfo: (contactInfo) =>
    requests.put("/accounts/contact-info", contactInfo),
  updateLOI: (loi) => requests.put("/accounts/location", loi),
  updateHobies: (hobbies) => requests.put("/accounts/hobbies", { hobbies }),
  updateProfessionOfInterest: (interests) =>
    requests.put("/accounts/interests", { interest: interests }),
  updateProfilePicture: (image) =>
    requests.put("/accounts/upload-avatar", image),
  deleteProfilePortfolio: (filename) =>
    requests.del(`/accounts/images/${filename}`),
  updateProfilePortfolio: (images) =>
    requests.put("/accounts/upload-portfolios", images),
  load: (email) => requests.get(`/account/getbyemail/${email}`),
  loadArtisanAccounts: () => requests.get("/accounts/nearest-artisans"),
  getByID: (id) => requests.get(`/accounts/${id}`),
  verifyAccount: (id) => requests.get(`/account/${id}`),
};

const JobExperience = {
  save: (data) => requests.post("/job-experience", data),
  load: () => requests.get("/job-experience"),
  search: (param) => requests.get("/job-experience" + param),
  edit: (id, data) => requests.put(`/job-experience/${id}`, data),
  delete: (id) => requests.del(`/job-experience/${id}`),
  view: (id) => requests.get(`/job-experience/ ${id}`),
};

const Job = {
  loadAll: () => requests.get(`/job/all`),
  save: (data) => requests.post("/job", data),
  edit: (id, data) => requests.put(`/job/${id}`, data),
  load: () => requests.get("/job"),
  loadAppliedJobs: () => requests.get("/job/applications/m/all"),
  view: (id) => requests.get(`/job/${id}`),
  apply: (id, data) => requests.post(`/job/${id}/apply`, { cvUrl: data }),
  applicants: (id) => requests.get(`/job/${id}/applicants`),
  acceptApplication: (applicationId, data) =>
    requests.put(`/job/${applicationId}/application/accept`, data),
  rejectApplication: (applicationId, data) =>
    requests.put(`/job/${applicationId}/application/reject`, data),
  suspendApplication: (applicationId, data) =>
    requests.put(`/job/${applicationId}/application/suspend`, data),
  applyWithCV: (id, data) => requests.post(`/job/${id}/apply-with-cv`, data),
  jobsFIlter: (filter) => requests.get(`/job/all/filter?=${filter}`),
  getIndustries: () => requests.get(`/industry`),
};

//education service api
const Education = {
  save: (data) => requests.post("/education", data),
  load: () => requests.get("/education"),
  search: (param) => requests.get("/education" + param),
  edit: (id, data) => requests.put(`/education/${id}`, data),
  delete: (id) => requests.del(`/education/${id}`),
  view: (id) => requests.get(`/education/${id}`),
};

const UserSkill = {
  save: (userskill) => requests.post("/user-skill", { skills: userskill }),
  load: () => requests.get("/user-skill"),
  delete: (id) => requests.del(`/user-skill/${id}`),
};

const Country = {
  load: () => requests.get("/country"),
};

const State = {
  loadByCountry: (countryid) =>
    requests.get(`/state/getbycountry/${countryid}`),
};
const Lga = {
  loadByState: (stateid) => requests.get(`/lga/getbystate/${stateid}`),
};

const JobVacancy = {
  save: (jobvacancy) => requests.post("/jobvacancy", jobvacancy),
  load: (pageNumber) =>
    requests.get("/jobvacancy/applications/active", pageNumber),
  loadAll: (pageNumber) => requests.get("/jobvacancy", pageNumber),
  view: (id) => requests.get(`/ jobvacancy / ${id}`),
  edit: (id, jobvacancy) => requests.put(`/ jobvacancy / ${id}`, jobvacancy),
  delete: (id) => requests.del(`/ jobvacancy / ${id}`),
  approve: (id, approval) =>
    requests.put(`/ jobvacancy / approve / ${id}`, approval),
  reject: (id, rejection) =>
    requests.put(`/ jobvacancy / reject / ${id}`, rejection),
};

// const Outlet = {
//   save: (outlet) => requests.post("/outlet", outlet),
//   load: (pageNumber) => requests.get("/outlet/apps/active", pageNumber),
//   view: (id) => requests.get(`/ outlet / ${id}`),
//   edit: (id, outlet) => requests.put(`/ outlet / ${id}`, outlet),
//   delete: (id) => requests.del(`/ outlet / ${id}`),
// };

// const Poll = {
//   save: (poll) => requests.post("/poll", poll),
//   load: (pageNumber) => requests.get("/poll", pageNumber),
//   view: (id) => requests.get(`/ poll / ${id}`),
//   edit: (id, poll) => requests.put(`/ poll / ${id}`, poll),
//   delete: (id) => requests.del(`/ poll / ${id}`),
// };

const ScheduleMeeting = {
  save: (schedulemeeting) =>
    requests.post("/meeting/schedule-meeting", schedulemeeting),
  load: () => requests.get("/meeting"),
  view: (id) => requests.get(`/ meeting / ${id}`),
  edit: (id, schedulemeeting) =>
    requests.put(`/ meeting / ${id}`, schedulemeeting),
  startmeeting: (id, startmeeting) =>
    requests.put(`/ meeting / start - meeting${id}`, startmeeting),
  endmeeting: (id, endmeeting) =>
    requests.put(`/ meeting / end - meeting${id}`, endmeeting),
  delete: (id) => requests.del(`/ meeting / ${id}`),
};

const Company = {
  load: () => requests.get(`/company`),
  put: (id, data) => requests.put(`/company/${id}`, data),
};

const InstantJob = {
  save: (instantjob) => requests.post("/instant-job", instantjob),
  apply: (jobid) => requests.post(`/instant-job/${jobid}/apply`, null),
  load: () => requests.get(`/instant-job`),
  loadApplicants: (jobId) => requests.get(`/instant-job/${jobId}/applicants`),
  loadAllInstantJobs: (page, take) =>
    requests.get("/instant-job/current", page, take),
  loadAppliedJobsById: (page, limit, search, sort) =>
    requests.get(
      `/instant-job/applications/me?page=${page}&limit=${limit}&search=${search}&sort=${sort}`
    ),
  view: (id) => requests.get(`/instant-job/${id}`),
  edit: (id, instantJob) => requests.put(`/instant-job/${id}`, instantJob),
  delete: (id) => requests.del(`/instant-job/${id}`),
  accept: (id) => requests.put(`/instant-job/${id}/application/accept`, null),
  reject: (id) => requests.put(`/instant-job/${id}/application/reject`, null),
  reject: (id) => requests.put(`/instant-job/${id}/application/reject`, null),
};

const Review = {
  save: (review) => requests.post("/review", review),
  load: () => requests.get(`/review`),
  loadByApplicant: (applicantId, page, limit) => {
    const url = `/review/${applicantId}/all?page=${page}&limit=${limit}`;
    return requests.get(url);
  },
  edit: (id) => requests.put(`review/edit/${id}`, id),
};

const ContractType = {
  save: (data) => requests.post("/contract-type", data),
  load: () => requests.get("/contract-type"),
  view: (id) => requests.get(`/contract-type/${id}`),
  edit: (id, data) => requests.put(`/contract-type/${id}`, data),
  delete: (id) => requests.del(`/contract-type/${id}`),
};

const Qualification = {
  save: (data) => requests.post("/qualification", data),
  load: () => requests.get("/qualification"),
  view: (id) => requests.get(`/qualification/${id}`),
  edit: (id, data) => requests.put(`/qualification/${id}`, data),
  delete: (id) => requests.del(`/qualification/${id}`),
};

const Skill = {
  save: (data) => requests.post("/skill", data),
  load: () => requests.get("/skill"),
  view: (id) => requests.get(`/skill/${id}`),
  edit: (id, data) => requests.put(`/skill/${id}`, data),
  delete: (id) => requests.del(`/skill/${id}`),
};

const ServiceGroup = {
  save: (data) => requests.post("/service-group", data),
  load: (page, limit, search) =>
    requests.get(
      `/service-group?${new URLSearchParams({
        page: page,
        limit: limit,
        search: search,
      }).toString()}`
    ),
  loadForService: (page, limit, search) =>
    requests.get(
      `/service-group?${new URLSearchParams({
        page: page,
        limit: limit,
        search: search,
      }).toString()}`
    ),
  view: (id) => requests.get(`/service-group/${id}`),
  edit: (id, data) => requests.put(`/service-group/${id}`, data),
  delete: (id) => requests.del(`/service-group/${id}`),
};

const Service = {
  save: (data) => requests.post("/service", data),
  load: (page, limit, search) =>
    requests.get(
      `/service?${new URLSearchParams({
        page: page,
        limit: limit,
        search: search,
      }).toString()}`
    ),
  view: (id) => requests.get(`/service/${id}`),
  edit: (id, data) => requests.put(`/service/${id}`, data),
  delete: (id) => requests.del(`/service/${id}`),
};

const Post = {
  save: (data) => requests.post("/post", data),
  edit: (id, data) => requests.put(`/post/${id}`, data),
  load: (page, take) =>
    requests.get(
      `/post?${new URLSearchParams({ page: page, take: take }).toString()}`
    ),
  loadByUserId: (id, page, take) =>
    requests.get(
      `/post/user/${id}?${new URLSearchParams({
        page: page,
        take: take,
      }).toString()}`
    ),
  view: (id) => requests.get(`/post/${id}`),
  search: (page, search) => requests.get("/post/search", page, search),
  like: (id) => requests.put(`/post/like/${id}`),
  dislike: (id) => requests.put(`/post/dislike/${id}`),
  postCount: () => requests.get("/post/count"),
  postCountByUser: (userId) => requests.get(`/post/user/${userId}/count`),
  delete: (id) => requests.del(`/post/${id}`),
};

const Comment = {
  save: (id, data) => requests.post(`/comment/${id}`, data),
  load: (id, page, take) =>
    requests.get(
      `/comment/post/${id}?${new URLSearchParams({
        page: page,
        take: take,
      }).toString()}`
    ),
  like: (id) => requests.put(`/comment/like/${id}`),
  dislike: (id) => requests.put(`/comment/dislike/${id}`),
  delete: (id) => requests.del(`/comment/${id}`),
};

const Contact = {
  load: (page, limit, search = "") =>
    requests.get(
      `/contact/free?${new URLSearchParams({
        page: page,
        limit: limit,
        search: search,
      }).toString()}`
    ),
  loadContacts: (page, limit) =>
    requests.get(
      `/contact?${new URLSearchParams({ page: page, limit: limit }).toString()}`
    ),
  loadRequests: (page, take) =>
    requests.get(
      `/contact/request/pending?${new URLSearchParams({
        page: page,
        take: take,
      }).toString()}`
    ),
  add: (id) => requests.post("/contact", id),
  delete: (id) => requests.del(`/contact/${id}`),
  accept: (data) => requests.post("/contact/accept", data),
  reject: (id) => requests.del(`/contact/reject/${id}`),
};

const Notification = {
  loadAll: () => requests.get("/notification"),
  loadById: (id) => requests.get(`/notification/${id}`),
  loadByAccount: (accountId) =>
    requests.get(`/notification/account/${accountId}`),
  loadAllByAccount: (id, search, page) =>
    requests.get(
      `/notification/account/all?page=${page}&search=${search}&accountId=${id}`
    ),
  updateNoti: (id) => requests.put(`/notification/${id}/seen`),
  loadAllSeenAndUnseenByAccount: (accountId, search, page, limit) =>
    requests.get(
      `/notification/account/${accountId}/all?search=${search}&page=${page}&limit=${limit}`
    ),
  delete: (id) => requests.del(`/notification/${id}`),
  clearAll: () => requests.del(`/notification/me/clearall`),
};

const Cv = {
  create: (data) => requests.post("/cv", data),
  fetch: (userId) => requests.get(`/cv/${userId}`),
  update: (id, data) => requests.put(`/cv/${id}`, data),
  delete: (id) => requests.del(`/cv/${id}`),
};
const Chat = {
  createChat: (data) => requests.post("/chat", data),
  deleteChatConversation: (conversationId) =>
    requests.del(`/chat/${conversationId}`),
  getConversationList: () => requests.get(`/chat/conversation-list`),
  getConversationsWithPartnerId: (partnerId) =>
    requests.get(`/chat/conversation-messages/${partnerId}`),
};

const Dashboard = {
  getCountByGroup: () => requests.get("/accounts/users-count-by-group"),
  getAllPostCount: () => requests.get("/post/count"),
  getAllJobCount: () => requests.get("/job/count"),
  getUserPostCount: (userId) => requests.get(`/post/user/${userId}/count`),
  loadUserContact: () => requests.get(`/contact/count`),
  loadInstantService: () => requests.get(`/instant-job/applications/m/count`),
  loadJobs: () => requests.get(`/job/applications/m/count`),
  loadUserActivities: () => requests.get(`/accounts/user-activities`),
};

const Industries = {
  getIndustries: () => requests.get("/industry"),
};

export default {
  Auth,
  User,
  // Outlet,
  Sector,
  Account,
  JobExperience,
  Job,
  Country,
  State,
  Lga,
  JobVacancy,
  ScheduleMeeting,
  // Poll,
  Company,
  Education,
  UserSkill,
  InstantJob,
  Post,
  Comment,
  Contact,
  Notification,
  Industries,
  setToken: (_accessToken) => {
    accessToken = _accessToken;
  },
  ContractType,
  Qualification,
  Skill,
  ServiceGroup,
  Service,
  Review,
  Cv,
  Chat,
  Dashboard,
};
