export function getAdminIPs() {
  if (!process.env.ADMIN_IPS) return [];

  return process.env.ADMIN_IPS.replace(/\s/g, '').split(',');
}

export default { getAdminIPs };
