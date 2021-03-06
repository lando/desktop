const {Auth0Client} = require('@auth0/auth0-spa-js');

const AUTH0_DOMAIN = 'dev-58jbozcd.us.auth0.com';
const AUTH0_CLIENT_ID = 'jaFOjJ2mxjUP4eDirSJjWidT1w1eFvW7';
const REDIRECT_URI = 'lando:///callback';
const AUDIENCE = `https://${AUTH0_DOMAIN}/api/v2/`;
const SCOPE = 'openid profile email offline_access read:current_user update:users';

let auth0 = null;

async function auth() {
  auth0 = new Auth0Client({
    domain: AUTH0_DOMAIN,
    client_id: AUTH0_CLIENT_ID,
    redirect_uri: REDIRECT_URI,
    audience: AUDIENCE,
    scope: SCOPE,
    advancedOptions: {
      defaultScope: null,
    },
  });
}
if (auth0 === null) {
  auth();
}

async function getLoginUrl() {
  return await auth0.buildAuthorizeUrl();
}

async function getLogOutUrl() {
  return await auth0.buildLogoutUrl({
    client_id: AUTH0_CLIENT_ID,
    returnTo: 'lando:///loginreg',
  });
}

async function handleRedirect() {
  await auth0.handleRedirectCallback();
}

async function isAuthenticated() {
  return await auth0.isAuthenticated();
}

async function getAccessToken() {
  return await auth0.getTokenSilently({
    audience: AUDIENCE,
    scope: SCOPE,
    advancedOptions: {
      defaultScope: null,
    },
  });
}

function getClient() {
  return auth0;
}

module.exports = {
  getLoginUrl,
  getLogOutUrl,
  handleRedirect,
  isAuthenticated,
  getAccessToken,
  getClient,
};
