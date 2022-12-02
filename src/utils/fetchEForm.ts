import type { EForms } from '../types/typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

const query = groq`*[_type == "eform"]`

export const fetchEForms = async () => {
    const eForms: EForms[] = await sanityClient.fetch(query)
    return eForms;
}