// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  msg: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { collection, id } = req.query;
  if (!collection || id === undefined) return res.json({ msg: 'not found data', })
  const data = await import(`../../../../../public/collection/${collection}/${+id+1}.json`);
  res.status(200).json(data)
}
