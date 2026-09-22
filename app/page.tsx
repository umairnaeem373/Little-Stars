"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Baby,
  CheckCircle,
  CalendarDays,
} from "lucide-react";
import TestimonialCard from "@/components/common/TestimonialCard";
import Footer from "@/components/common/Footer";
import ServicesCard from "@/components/common/ServicesCard";
import { programs, services, stats, testimonials } from "@/data/data";
import StatsCard from "@/components/common/StatsCard";
import ContactForm from "@/components/common/ContactForm";
import Navbar from "@/components/common/Navbar";

const DaycareLandingPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);



  const smoothScroll = useCallback((targetId: string) => {
    const element = document.getElementById(targetId);
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar smoothScroll={smoothScroll} />

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <Badge
              variant="secondary"
              className="p-4 text-sm mb-8"
            >
              <Award className="h-4 w-4 text-yellow-500" />
              Licensed &amp; Accredited Daycare
            </Badge>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span className="bg-linear-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                Where Every Child
              </span>
              <br />
              <span className="text-primary">Shines Bright ✨</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto">
              Creating a nurturing, safe, and fun environment where your little
              ones can learn, grow, and discover their unique talents.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center">
              <Button
                size="lg"
                className="px-8 py-3 text-lg w-full sm:w-auto"
              >
                <CalendarDays />
                Schedule a Tour
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-border hover:bg-accent px-8 py-3 text-lg w-full sm:w-auto"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatsCard key={String(stat.number)} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
              Why Choose Us
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Built on Love, Trust & Excellence
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We provide more than childcare – we create a foundation for
              lifelong learning and growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <ServicesCard key={service.title} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
              Our Programs
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Age-Appropriate Learning Adventures
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Carefully designed programs that grow with your child, from
              infancy through preschool.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:grid-rows-[auto_1fr]">
            {programs.map((program, index) => (
              <Card
                key={index}
                className="border-2 row-span-2 grid-rows-subgrid content-start hover:shadow-xl transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-bold text-foreground">
                      {program.title}
                    </CardTitle>
                    <Baby className="h-8 w-8 text-primary" />
                  </div>
                  <Badge variant="secondary" className="w-fit">
                    {program.age}
                  </Badge>
                  <CardDescription className="text-muted-foreground text-base mt-4">
                    {program.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col h-full">
                  <div className="space-y-3 flex-1">
                    {program.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full mt-6">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
              Testimonials
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              What Parents Say About Us
            </h2>
            <p className="text-xl text-muted-foreground">
              {`Don't just take our word for it – hear from our amazing families!`}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/10">
              Get in Touch
            </Badge>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground">
              Contact us today to schedule a tour and see why families love
              Little Stars!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-8">
                  Visit Our Center
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Address</h4>
                      <p className="text-muted-foreground">
                        123 Rainbow Street
                        <br />
                        Sunshine City, SC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Phone</h4>
                      <p className="text-muted-foreground">(555) 123-KIDS</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Email</h4>
                      <p className="text-muted-foreground">
                        hello@littlestarsdaycare.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground">Hours</h4>
                      <p className="text-muted-foreground">
                        Monday - Friday: 6:00 AM - 7:00 PM
                        <br />
                        Saturday: 7:00 AM - 6:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card p-8 rounded-2xl">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Special Offer
                </h4>
                <p className="text-muted-foreground mb-4">
                  Schedule a tour this month and receive 50% off your first week
                  of care!
                </p>
                <Button>
                  <CalendarDays />
                  Schedule Tour Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer smoothScroll={smoothScroll} />
    </div>
  );
};

export default DaycareLandingPage;
