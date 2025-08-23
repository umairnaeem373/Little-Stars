export interface Service {
  icon: React.ReactNode
  title: string
  description: string
}

export interface Testimonial {
  name: string
  content: string
  rating: number
  image: string
}

export interface Program {
  title: string
  age: string
  description: string
  features: string[]
  color: string
}

export interface Stats {
    number: String
    category: String
    color: String
}