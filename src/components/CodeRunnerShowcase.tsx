import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Terminal, Sparkles } from "lucide-react";

const codeExamples = [
  {
    language: "Python",
    code: `def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

for i in range(10):
    print(f"F({i}) = {fibonacci(i)}")`,
    output: "F(0) = 0\nF(1) = 1\nF(2) = 1\nF(3) = 2\n...",
  },
  {
    language: "JavaScript",
    code: `const greet = (name) => {
  console.log(\`Salom, \${name}!\`);
  return \`Welcome to KnowHub!\`;
}

console.log(greet("Developer"));`,
    output: "Salom, Developer!\nWelcome to KnowHub!",
  },
  {
    language: "C++",
    code: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello from KnowHub!" << endl;
    return 0;
}`,
    output: "Hello from KnowHub!",
  },
];

const CodeRunnerShowcase = () => {
  const [activeExample, setActiveExample] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const handleRun = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 1500);
  };

  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">
              30+ Dasturlash Tillari
            </span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-gradient">Code Runner</span> Platformasi
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Kodni yozing, ishga tushiring va natijani darhol ko'ring. Hech qanday
            sozlashsiz!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Code Editor */}
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up">
            <div className="flex items-center justify-between mb-4">
              <div className="flex gap-2">
                {codeExamples.map((example, index) => (
                  <Button
                    key={index}
                    variant={activeExample === index ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setActiveExample(index)}
                    className={
                      activeExample === index
                        ? "bg-gradient-primary text-primary-foreground"
                        : ""
                    }
                  >
                    {example.language}
                  </Button>
                ))}
              </div>
              <Button
                onClick={handleRun}
                disabled={isRunning}
                className="bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                <Play className="w-4 h-4 mr-2" />
                {isRunning ? "Ishlamoqda..." : "Ishga Tushirish"}
              </Button>
            </div>

            <div className="relative rounded-lg bg-muted/50 p-4 font-mono text-sm overflow-x-auto">
              <pre className="text-foreground whitespace-pre-wrap">
                {codeExamples[activeExample].code}
              </pre>
            </div>
          </Card>

          {/* Output Terminal */}
          <Card
            className="p-6 bg-card/50 backdrop-blur-sm border-border/50 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Terminal className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Natija</h3>
              {isRunning && (
                <div className="ml-auto flex gap-1">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-pulse"
                    style={{ animationDelay: "0.2s" }}
                  />
                  <div
                    className="w-2 h-2 bg-primary rounded-full animate-pulse"
                    style={{ animationDelay: "0.4s" }}
                  />
                </div>
              )}
            </div>

            <div className="relative rounded-lg bg-muted/50 p-4 font-mono text-sm min-h-[200px]">
              <pre className="text-green-400 whitespace-pre-wrap">
                {isRunning ? (
                  <span className="text-yellow-400">Kod ijro etilmoqda...</span>
                ) : (
                  codeExamples[activeExample].output
                )}
              </pre>
            </div>
          </Card>
        </div>

        {/* Features */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          {[
            {
              title: "Xavfsiz Ijro",
              description: "Docker konteynerlarida izolyatsiya qilingan muhit",
            },
            {
              title: "Real Vaqt",
              description: "Kod natijalarini darhol ko'ring va test qiling",
            },
            {
              title: "30+ Tillar",
              description: "Python, JavaScript, C++, Java va boshqa tillar",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-card/30 backdrop-blur-sm border border-border/30 text-center"
            >
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodeRunnerShowcase;
