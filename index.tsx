import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import Link from "next/link";

export default function HomePage() {
  const [terminalVisible, setTerminalVisible] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setTerminalVisible(true), 800);
    return () => clearTimeout(timeout);
  }, []);

  const background = darkMode ? "bg-[#143642]" : "bg-white";
  const text = darkMode ? "text-white" : "text-black";

  return (
    <div className={`${background} min-h-screen ${text} font-sans transition-colors duration-300`}>
      {/* Fixed Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 shadow-md bg-[#143642] text-white px-8 py-4 flex justify-between items-center">
        <div className="text-xl font-bold text-[#87A330]">Rita Ionides</div>
        <div className="space-x-6 text-sm font-semibold">
          <Link href="/" className="hover:text-[#87A330] transition-colors">Home</Link>
          <Link href="/projects" className="hover:text-[#87A330] transition-colors">Projects</Link>
          <Link href="/blog" className="hover:text-[#87A330] transition-colors">Blog</Link>
          <Link href="/now" className="hover:text-[#87A330] transition-colors">Now</Link>
          <Link href="/about" className="hover:text-[#87A330] transition-colors">About</Link>
          <Link href="/cv.pdf" className="hover:text-[#87A330] transition-colors" target="_blank">CV</Link>
        </div>
        <Switch checked={darkMode} onCheckedChange={setDarkMode} />
      </nav>

      <div className="pt-24 px-10 pb-10">
        <div className="text-xl md:text-2xl text-[#0F8B8D] mb-10">
          Building privacy-preserving AI for the medical future.
        </div>

        {terminalVisible && (
          <div className="bg-black text-green-400 font-mono p-4 rounded-xl shadow-xl w-full max-w-2xl">
            <div className="animate-pulse">Rita:~$ making AI safe for health data...</div>
          </div>
        )}

        {/* Profile Image Section */}
        <div className="my-10 flex flex-wrap gap-4">
          <img src="/images/rita1.jpg" alt="Rita 1" className="w-48 h-48 rounded-full object-cover border-4 border-[#0F8B8D]" />
          <img src="/images/rita2.jpg" alt="Rita 2" className="w-48 h-48 rounded-full object-cover border-4 border-[#0F8B8D]" />
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-bold text-[#87A330] mb-2">Projects</h2>
              <p>Explore my work on differential privacy, generative models, and med-tech infrastructure.</p>
              <Link href="/projects">
                <Button className="mt-4 bg-[#0F8B8D] hover:bg-[#0d6c6e]">View Projects</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-bold text-[#87A330] mb-2">Blog</h2>
              <p>Posts on privacy, math, and startup chaos — with the occasional easter egg.</p>
              <Link href="/blog">
                <Button className="mt-4 bg-[#0F8B8D] hover:bg-[#0d6c6e]">Read Blog</Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h2 className="text-lg font-bold text-[#87A330] mb-2">Now</h2>
              <p>
                April 2025: Applying to Y Combinator AI Summer School. Finishing up a private
                ML research project and mentoring undergrad stat students.
              </p>
              <Link href="/now">
                <Button className="mt-4 bg-[#0F8B8D] hover:bg-[#0d6c6e]">View More</Button>
              </Link>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-[#1C3B30] p-6 rounded-lg max-w-lg shadow-md">
          <h2 className="text-xl font-bold mb-2">Subscribe to the Blog</h2>
          <p className="text-sm mb-4">No spam. Just ideas and technical adventures.</p>
          <form>
            <div className="flex items-center space-x-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="text-black px-2 py-1 rounded-md w-full"
              />
              <Button type="submit" className="bg-[#87A330] hover:bg-[#6b8a27]">
                Subscribe
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
