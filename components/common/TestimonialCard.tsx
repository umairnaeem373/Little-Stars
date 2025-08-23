
import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Star } from 'lucide-react'
import { Testimonial } from '@/types/types'

type Props = {
    testimonial: Testimonial
}

const TestimonialCard = ({testimonial}: Props) => {
  return (
    <Card key={testimonial.name} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 line-clamp-3 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-2xl mr-4">
                      {testimonial.image}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-gray-500 text-sm">Parent</div>
                    </div>
                  </div>
                </CardContent>
              </Card>)
}

export default TestimonialCard