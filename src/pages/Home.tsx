import {
  FaLaravel,
  FaReact,
  FaBootstrap,
  FaDocker,
  FaGithub,
  FaGitSquare,
  FaPhp,
} from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiShadcnui,
  SiPostman,
  SiSwagger,
  SiAxios,
  SiMysql,
  SiPostgresql,
  SiMongodb,
} from "react-icons/si";
import { DiRedis } from "react-icons/di";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen m-0 p-0">
      <div className="max-w-[70%] space-y-6">
        <div>
          <h1 className="text-4xl font-bold mb-4">Uwakmfon Udoh</h1>
          <p className="text-lg text-gray-700">
            Hi! I'm Uwakmfon, a passionate software developer specializing in
            web development. Explore my projects and blog to see what I've been
            working on!
          </p>
        </div>

        <div>
          <div>
            <p>
              Working on some <a
                href="https://github.com/Uwakmfon"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                  dream projects
              </a>
              .
            </p>
            <span></span>
          </div>

          <div>
            <span className="flex items-center gap-4 text-2xl">
              <p>Frontend:</p>
              <span className="flex gap-2 font-bold">
                <FaBootstrap className="text-purple-600" />
                <RiTailwindCssFill className="text-sky-400" />
                <FaReact className="text-cyan-400" />
                <RiNextjsFill className="text-black" />
                <SiShadcnui className="text-zinc-800" />
                {/* laravel, next js, react,  tailwindcss icons go in here */}
              </span>
            </span>

            <span className="flex items-center gap-4 text-2xl">
              <p>Backend</p>
              <span className="flex gap-2 font-bold">
                <FaPhp className="text-indigo-600" />
                <FaLaravel className="text-red-600" />
              </span>
            </span>
            <span className="flex items-center gap-4 text-2xl">
              <p>API & Backend Communication</p>
              <span className="flex gap-2 font-bold">
                <SiPostman className="text-orange-500" />
                <SiSwagger className="text-green-600" />
                <SiAxios className="text-purple-600" />
              </span>
            </span>
            <span className="flex items-center gap-4 text-2xl">
              <p>Databases</p>
              <span className="flex gap-2 font-bold">
                <SiMysql className="text-blue-600" />
                <SiPostgresql className="text-blue-800" />
                <DiRedis className="text-red-600" />
                <SiMongodb className="text-green-700" />
              </span>
            </span>
            <span className="flex items-center gap-4 text-2xl">
              <p>Others:</p>
              <span className="flex gap-2 font-bold">
                <FaDocker className="text-blue-500" />
                <FaGitSquare className="text-gray-800" />
                <FaGithub className="text-gray-800" />
                {/* docker, git/github, pest */}
              </span>
            </span>
          </div>
        </div>

        <div>
          <p>
            I’m passionate about turning creative ideas into reality. I enjoy
            building tools that help both myself and others work more
            productively while making the process of creating enjoyable. You can
            explore my full{" "}
            <a
              href="https://github.com/Uwakmfon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              list of projects here
            </a>
            .
          </p>
          <span></span>
        </div>

        <br /><br />
        <div>
          <h2 className="text-2xl font-bold mb-4">My Projects</h2>
          <div className="grid grid-cols-3 md:grid-cols-2 gap-4 h-64">
            <div className="bg-gray-200 p-4 h-full">Project 1</div>
            <div className="bg-green-200 p-4 h-full">Project 2</div>
            <div className="bg-blue-200 p-4 h-full">Project 3</div>
            <div className="bg-yellow-200 p-4 h-full">Project 4</div>
            <div className="bg-orange-200 p-4 h-full">Project 5</div>
            <div className="bg-red-200 p-4 h-full">Project 6</div>
          </div>
        </div>
      </div>
        <Footer />

    </div>
  );
}
