import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const education = [
  {
    school: "UW Foster School of Business",
    degree: "Master of Science - MS, Information Systems",
    period: "June 2024 - June 2025"
  },
  {
    school: "University of Washington",
    degree: "Bachelor of Science - BS, Informatics",
    period: "2017 - June 2021"
  },
  {
    school: "Delhi Public School - R. K. Puram",
    degree: "High School",
    period: "2003 - 2017"
  }
];

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5" />
            Education
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {education.map((edu) => (
              <div key={edu.school} className="border-l-2 pl-4 border-primary">
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="text-sm text-muted-foreground">{edu.degree}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
