# Social Media Client

## The project:

- Configured to run Prettier on commit
- Configured to run ESLint on commit
- Default branch is protected, code is versioned and branching conventions have been followed.
- Configured to build and deploy to pages on merge to default branch
- Readme file is updated to include new configuration information and workflow status badges
- Project has been checked for 404 errors
- Any bugs found have been communicated in the Issues tab

### Unit Tests:
- The login function fetches and stores a token in browser storage
- The logout function clears the token from browser storage

### End-to End tests:
- The user can log in and access their profile
- The user cannot submit the login form with invalid credentials and is shown a message
- The user can log out with the logout button
