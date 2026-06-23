import React from 'react';
import { motion } from 'framer-motion';
const stats = [
{
  value: '7+',
  label: 'Years'
},
{
  value: '10k',
  label: 'Clients'
},
{
  value: '12',
  label: 'Stylists'
}];

export function About() {
  return (
    <section
      id="about"
      className="py-12 md:py-16 bg-kumkum-wine text-kumkum-parchment">
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <span className="text-[10px] sm:text-[11px] uppercase tracking-widest text-kumkum-gold font-medium">
            &mdash; 02 / About Us
          </span>
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 md:gap-12">
            {stats.map((stat, index) =>
            <div key={index} className="flex items-baseline gap-2">
              <span className="text-xl sm:text-2xl md:text-3xl font-heading text-kumkum-gold">
                {stat.value}
              </span>
              <span className="text-[10px] uppercase tracking-widest text-kumkum-parchment/60 font-medium">
                {stat.label}
              </span>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>);

}