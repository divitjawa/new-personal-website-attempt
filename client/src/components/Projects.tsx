import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy } from "lucide-react";

const achievements = [
  "Winners: Microsoft Hack for Good",
  "2nd Place: Impact Innovation Hackathon 2019",
  "Best in Show: Code Day Seattle 2017"
];

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Trophy className="h-5 w-5" />
            Projects & Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-4">
            {achievements.map((achievement) => (
              <li key={achievement} className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </motion.div>
  );
}
