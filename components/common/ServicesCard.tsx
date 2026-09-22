import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Service } from '@/types/types'

type Props = {
    service : Service
}

const ServicesCard = ({service}: Props) => {
  return (
                  <Card key={service.title.substring(3)} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 hover:cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
  )
}

export default ServicesCard