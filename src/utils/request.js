import { getAdminIPs } from './environment';

export function isAdmin(req) {
  return getAdminIPs().includes(req.headers['x-forwarded-for'] || process.env.IP);
}

export default { isAdmin };
