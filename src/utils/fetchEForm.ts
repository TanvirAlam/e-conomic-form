import { EForms } from '../types/typings'
import { groq } from 'next-sanity'
import { sanityClient } from '../../sanity'

const query = groq`*[_type == "e-form"]`

export const fetchEForms = async () => {
    const eForms: EForms[] = await sanityClient.fetch(query)
    return eForms;
}