import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Education from "@/components/Education";

const experience = [
  {
    company: "Tesla",
    role: "Software Engineer II",
    period: "February 2025 - Present",
    description: "Building delivery and registration tools in the vehicle fulfillment team in the Digital Experience org."
  },
  {
    company: "Navasal Inc.",
    role: "AEM Developer",
    period: "February 2023 - July 2023",
    description: "Worked on AEM 6.x. Developed reusable components for AEM authors. Developed workflows that would trigger based on specific actions."
  },
  {
    company: "Poggio Labs",
    role: "Software Engineer",
    period: "April 2022 - November 2022",
    description: "Developed high-priority features for 3 customers from scratch using reusable schema-driven React components. Implemented entire frontend for a project to increase coverage of the product's search feature from 30% to 80%."
  }
];

export default function Experience() {
  return (
    <div className="container py-20 space-y-12">
      <div className="h-14" /> {/* Navigation offset */}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card>
          <CardHeader>
            <CardTitle>Professional Experience</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {experience.map((exp) => (
                <div key={`${exp.company}-${exp.role}`} className="border-l-2 pl-4 border-primary">
                  <h3 className="font-semibold">{exp.company}</h3>
                  <p className="text-sm font-medium">{exp.role}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{exp.description}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <Education />
    </div>
  );
}
