import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function Profile() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="overflow-hidden">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="relative w-48 h-48 rounded-full overflow-hidden">
              <img
                src="/attached_assets/profile.jpg"
                alt="Divit Jawa"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold mb-4">Divit Jawa</h1>
              <h2 className="text-xl text-muted-foreground mb-4">
                Software Engineer @ Tesla
              </h2>
              <p className="text-muted-foreground">
                Results producing, data-oriented, fast-paced, "get-it-done" guy, stepping into the world of Tech.
                Strong blend of business acumen and technical expertise in the right mix to achieve business objectives.
                Solid leadership skills with the ability to influence and motivate toward common goals.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}