import { type NextApiRequest, type NextApiResponse } from "next";
import { groq } from 'next-sanity';
import { sanityClient } from '../../../sanity';

import { prisma } from "../../server/db/client";

import { EForms } from "../../types/typings";

const query = groq`*[_type == "eform"]`

const EFormsObject = async (req: NextApiRequest, res: NextApiResponse) => {
    const efrom: EForms[] = await sanityClient.fetch(query)
    res.status(200).json({ efrom });
};

export default EFormsObject;
