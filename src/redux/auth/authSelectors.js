export const isAuthSelector = state => state.auth.token;
export const profileSelector = state => state.auth.profile;
export const isRefreshing = state => state.user.isRefreshing;
