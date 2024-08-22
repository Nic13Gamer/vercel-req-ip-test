import { getIp } from '@/utils/ip';
import { NextRequest } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const reqIp = req.ip ?? null;
  const headerIp = getIp();

  return Response.json({ ip_from_NextRequest: reqIp, ip_from_getIp: headerIp });
}
