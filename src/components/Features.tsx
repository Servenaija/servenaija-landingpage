import {
  ShoppingCart,
  Briefcase,
  Wrench,
  Monitor,
  GraduationCap,
  Truck,
  HeartPulse,
  Home,
  Sprout,
  Music,
  Landmark,
  Luggage,
} from 'lucide-react'

type Props = { className?: string }

// const trustedBrands = [
//   'Dangote',
//   'MTN',
//   'FirstBank',
//   'Airtel',
//   'UBA',
//   'Jumia',
//   'Konga',
//   'DHL',
//   'Access',
//   'Interswitch',
// ]

const categories = [
  { icon: ShoppingCart, title: 'E-Commerce Marketplace', details: 'Electronics, Fashion, Groceries, Home Appliances, Furniture' },
  { icon: Briefcase, title: 'Professional Services', details: 'Lawyers, Accountants, Consultants, Architects, Engineers' },
  { icon: Wrench, title: 'Home Services', details: 'Plumbers, Electricians, Carpenters, Painters, Cleaners' },
  { icon: Monitor, title: 'Digital Services', details: 'Web Development, Design, Marketing, SEO, Content, Video Editing' },
  { icon: GraduationCap, title: 'Education Services', details: 'Tutors, Training Institutes, ICT, Vocational Training, Coaching' },
  { icon: Truck, title: 'Transportation Services', details: 'Logistics, Delivery, Courier, Car Hire, Bus Booking, Moving' },
  { icon: HeartPulse, title: 'Health Services', details: 'Hospitals, Clinics, Pharmacies, Diagnostics, Home Care' },
  { icon: Home, title: 'Real Estate Services', details: 'Property Sales, Rentals, Estate Agents, Facility Management' },
  { icon: Sprout, title: 'Agriculture Marketplace', details: 'Farm Produce, Livestock, Equipment, Fertilizers, Consultancy' },
  { icon: Music, title: 'Events & Entertainment', details: 'MCs, DJs, Decorators, Photographers, Caterers, Event Planning' },
  { icon: Landmark, title: 'Financial Services', details: 'Loan Consultants, Insurance, Investment, Cooperatives, Advisers' },
  { icon: Luggage, title: 'Tourism & Hospitality', details: 'Hotels, Resorts, Travel Agencies, Tour Operators, Vacation Rentals' },
]

export default function MarketplaceCategoriesSection({ className }: Props) {
  return (
    <section className={`section-one ${className ?? ''}`.trim()}>
      <p className="section-one__trusted-title">
        Trusted by thousands of businesses and professionals
      </p>

      {/* <ul className="section-one__trusted-grid" aria-label="Trusted brands">
        {trustedBrands.map((brand) => (
          <li key={brand} className="section-one__trusted-item">
            {brand}
          </li>
        ))}
      </ul> */}

      <h2 className="section-one__title">
        Everything You Need, <span>All in One Place</span>
      </h2>

      <div className="section-one__cards">
  {categories.map((category) => {
    const Icon = category.icon          // get the component
    return (
      <article key={category.title} className="section-one__card">
        <span className="section-one__card-icon" aria-hidden="true">
          <Icon size={28} strokeWidth={2} />  
        </span>
        <h3>{category.title}</h3>
        <p>{category.details}</p>
      </article>
    )
  })}
</div>
    </section>
  )
}
