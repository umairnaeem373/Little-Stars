import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Service } from '@/app/page'

type Props = {
    service : Service
}

const ServicesCard = ({service}: Props) => {
  return (
                  <Card key={service.title.substring(3)} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
  )
}

export default ServicesCard