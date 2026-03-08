import { Code2, Database, Brain, Rocket } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive and modern user interfaces using HTML, CSS, JavaScript, and React.",
  },
  {
    icon: Database,
    title: "Backend Basics",
    description:
      "Learning backend development with Node.js and understanding APIs and server-side logic.",
  },
  {
    icon: Brain,
    title: "Continuous Learning",
    description:
      "Constantly learning new technologies and improving my skills in modern web development.",
  },
  {
    icon: Rocket,
    title: "Problem Solving",
    description:
      "Using logical thinking and programming to solve coding challenges and real-world problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Passionate about technology,
              <span className="font-serif italic font-normal text-white">
                {" "}building modern web experiences.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

              <p>
                I'm Subham Patra, a Computer Science student at Chandigarh
                University with a strong interest in web development and modern
                technologies. My journey started with curiosity about how
                websites work, which led me to explore JavaScript, React, and
                full stack development.
              </p>

              <p>
                I enjoy building modern and interactive web applications using
                React, JavaScript, and Node.js. I focus on writing clean code,
                creating responsive interfaces, and improving my problem-solving
                skills through real projects.
              </p>

              <p>
                When I'm not coding, I enjoy learning new technologies,
                improving my development skills, and working on personal
                projects that help me grow as a full stack developer.
              </p>

            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to continuously learn, build meaningful projects,
                and grow into a skilled full stack developer who can create
                impactful digital solutions."
              </p>
            </div>

          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};