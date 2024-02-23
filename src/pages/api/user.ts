import { NextApiRequest, NextApiResponse } from 'next';
import { unstable_getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const {method} = req;
    const session = await unstable_getServerSession(req, res, authOptions);

    switch (method) {
    case 'GET':
        res.end(`Name: ${session.user.name}`);
        break;
    default: {
        res.setHeader('Allow', ['GET', 'PUT'])
        res.status(405).end(`Method ${method} Not Allowed`)
    }
    }
}