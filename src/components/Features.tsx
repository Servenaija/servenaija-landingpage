type Props = { className?: string }

const trustedBrands = [
  'Dangote',
  'MTN',
  'FirstBank',
  'Airtel',
  'UBA',
  'Jumia',
  'Konga',
  'DHL',
  'Access',
  'Interswitch',
]

const categories = [
  {
    icon: '🛒',
    title: 'E-Commerce Marketplace',
    details: 'Electronics, Fashion, Groceries, Home Appliances, Furniture',
  },
  {
    icon: '💼',
    title: 'Professional Services',
    details: 'Lawyers, Accountants, Consultants, Architects, Engineers',
  },
  {
    icon: '🛠️',
    title: 'Home Services',
    details: 'Plumbers, Electricians, Carpenters, Painters, Cleaners',
  },
  {
    icon: '🖥️',
    title: 'Digital Services',
    details: 'Web Development, Design, Marketing, SEO, Content, Video Editing',
  },
  {
    icon: '🎓',
    title: 'Education Services',
    details: 'Tutors, Training Institutes, ICT, Vocational Training, Coaching',
  },
  {
    icon: '🚚',
    title: 'Transportation Services',
    details: 'Logistics, Delivery, Courier, Car Hire, Bus Booking, Moving',
  },
  {
    icon: '💚',
    title: 'Health Services',
    details: 'Hospitals, Clinics, Pharmacies, Diagnostics, Home Care',
  },
  {
    icon: '🏠',
    title: 'Real Estate Services',
    details: 'Property Sales, Rentals, Estate Agents, Facility Management',
  },
  {
    icon: '🌿',
    title: 'Agriculture Marketplace',
    details: 'Farm Produce, Livestock, Equipment, Fertilizers, Consultancy',
  },
  {
    icon: '🎵',
    title: 'Events & Entertainment',
    details: 'MCs, DJs, Decorators, Photographers, Caterers, Event Planning',
  },
  {
    icon: '🏦',
    title: 'Financial Services',
    details: 'Loan Consultants, Insurance, Investment, Cooperatives, Advisers',
  },
  {
    icon: '🧳',
    title: 'Tourism & Hospitality',
    details: 'Hotels, Resorts, Travel Agencies, Tour Operators, Vacation Rentals',
  },
]

export default function MarketplaceCategoriesSection({ className }: Props) {
  return (
    <section className={`section-one ${className ?? ''}`.trim()}>
      <p className="section-one__trusted-title">
        Trusted by thousands of businesses and professionals
      </p>

      <ul className="section-one__trusted-grid" aria-label="Trusted brands">
        {trustedBrands.map((brand) => (
          <li key={brand} className="section-one__trusted-item">
            {brand}
          </li>
        ))}
      </ul>

      <h2 className="section-one__title">
        Everything You Need, <span>All in One Place</span>
      </h2>

      <div className="section-one__cards">
        {categories.map((category) => (
          <article key={category.title} className="section-one__card">
            <span className="section-one__card-icon" aria-hidden="true">
              {category.icon}
            </span>
            <h3>{category.title}</h3>
            <p>{category.details}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
