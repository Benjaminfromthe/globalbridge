export type Job = {
  id: string
  title: string
  company: string
  salaryRange: string
  location: string
  roleType: 'Full-time' | 'Gig' | 'Contract'
  description?: string
  imageUrl?: string
}

export const jobs: Job[] = [
  {
    id: 'job-001',
    title: 'Cultural Tour Guide',
    company: "Kigali Cultural Tours",
    salaryRange: '$300 - $600 / month',
    location: 'Kigali, Rwanda',
    roleType: 'Gig',
    imageUrl: '/assets/job-tour-guide.jpg',
    description: 'Lead small-group tours focusing on cultural heritage and community experiences.',
  },
  {
    id: 'job-002',
    title: 'Digital Marketing Specialist',
    company: 'Rwanda Travel Co',
    salaryRange: '$800 - $1,200 / month',
    location: 'Remote (Rwanda preferred)',
    roleType: 'Full-time',
    imageUrl: '/assets/job-marketing.jpg',
    description: 'Manage digital campaigns, social media, and content for tourism products.',
  },
  {
    id: 'job-003',
    title: 'Logistics Coordinator',
    company: 'Pan-Africa Logistics',
    salaryRange: '$500 - $900 / month',
    location: 'Kigali, Rwanda',
    roleType: 'Contract',
    imageUrl: '/assets/job-logistics.jpg',
    description: 'Coordinate shipments, local transport, and supplier communication for tourism services.',
  },
  {
    id: 'job-004',
    title: 'Translation & Localisation Specialist',
    company: 'LinguaWorks',
    salaryRange: '$20 - $40 / hour',
    location: 'Remote',
    roleType: 'Gig',
    imageUrl: '/assets/job-translation.jpg',
    description: 'Translate marketing materials and product descriptions into local languages.',
  },
]
