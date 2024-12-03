import Image from "next/image";

import brianPic from "@/public/members/about_bry.png";
import jeranPic from "@/public/members/about_jeran.png";
import ijPic from "@/public/members/about_ij.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faq = [
  {
    question: "How can I earn rewards?",
    answer:
      "Students can earn rewards by completing various tasks and challenges within the game. These rewards can be used to purchase characters and other items in the shop.",
  },
  {
    question: "What is PvP (speedrun) mode?",
    answer:
      "PvP (speedrun) mode allows students to duel against each other by completing tasks as quickly as possible. The student who completes the tasks in the shortest time wins the duel.",
  },
  {
    question: "How do I purchase characters?",
    answer:
      "Characters can be purchased in the shop using the rewards earned from completing tasks and challenges within the game.",
  },
  {
    question: "Is CTRL+ALT+LEARN accessible?",
    answer:
      "Yes. It adheres to the WAI-ARIA design pattern to ensure accessibility for all users. It is also optimized for mobile devices.",
  },
  {
    question: "Can I track my progress?",
    answer:
      "Yes, the platform allows students to track their progress, view their achievements, and see their ranking in PvP mode.",
  },
  {
    question: "What kind of learning materials are available?",
    answer:
      "The platform provides a variety of learning materials including tutorials, quizzes, and interactive challenges to help students learn web development.",
  },
];

export default function About() {
  return (
    <main className="container mb-10 space-y-10">
      <div className="grid gap-10 rounded-lg bg-slate-200 p-10 md:grid-cols-2">
        <div className="border-black md:border-r-2">
          <h1 className="mb-4 text-center font-bold md:text-left md:text-4xl">
            What is CTRL + ALT + LEARN?
          </h1>
          <p className="text-center tracking-wide md:text-left md:text-lg md:leading-loose">
            <span className="font-semibold">CTRL+ALT+LEARN</span> is about
            tackling web development, where students can learn web development
            by playing this game. They can earn rewards, achievements, and
            participate in PvP (speedrun) to duel against other students. It
            also has a shop functionality where the students can buy characters
            that they can use for the game. The platform is designed to be
            engaging and educational, providing students with a fun and
            interactive way to learn web development.
          </p>
        </div>
        <div>
          <h2 className="mb-4 text-center font-bold md:text-left md:text-3xl">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible defaultValue={faq[0].question}>
            {faq.map(({ question, answer }, index) => (
              <AccordionItem
                key={index}
                value={question}
                className="md:text-lg"
              >
                <AccordionTrigger className="font-semibold">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="text-center italic md:text-left md:text-lg">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <p className="text-center text-xl">
        Get to know the creators of <br />
        <span className="text-2xl font-bold">CTRL + ALT + LEARN</span>
      </p>
      <div className="grid justify-center space-y-5 rounded-xl border-2 border-black p-5 shadow-lg md:grid-cols-3 md:place-items-center">
        <div className="max-w-96 space-y-3">
          <p className="text-center font-bold md:text-left md:text-2xl">
            MILLONTE, <br /> BRIAN LAURENCE E.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="rounded-full bg-[#FCF596] px-2 py-1">
              Full-Stack Developer
            </span>
            <span className="rounded-full bg-slate-300 px-2 py-1">
              UI/UX Designer
            </span>
            <span className="rounded-full bg-[#D8DBBD] px-2 py-1">
              Team Leader
            </span>
          </div>
        </div>
        <Image
          src={brianPic}
          alt=""
          width={500}
          height={500}
          className="w-96"
        />
        <div className="max-w-96 text-center md:max-w-80 md:text-right">
          <p>
            Brian Laurence E. Millonte is the mastermind behind the
            functionality of the system. As a full stack developer, he designed
            and implemented both the front-end and back-end of the project. He
            also took charge of the UI/UX design, ensuring a seamless and
            intuitive user experience. As the team leader, he coordinated the
            efforts of the group to bring the project to fruition.
          </p>
        </div>
      </div>
      <div className="grid justify-center space-y-5 rounded-xl border-2 border-black p-5 shadow-lg md:grid-cols-3 md:place-items-center">
        <div className="max-w-96 space-y-3">
          <p className="text-center font-bold md:text-left md:text-2xl">
            MERINO, <br /> JERAN CHRISTOPHER D.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="rounded-full bg-[#BFECFF] px-2 py-1">
              Content Creator
            </span>
            <span className="rounded-full bg-[#CDC1FF] px-2 py-1">
              Data Manager
            </span>
            <span className="rounded-full bg-slate-300 px-2 py-1">
              QA Tester
            </span>
          </div>
        </div>
        <Image
          src={jeranPic}
          alt=""
          width={500}
          height={500}
          className="w-96"
        />
        <div className="max-w-96 text-center md:max-w-80 md:text-right">
          <p>
            Jeran Christopher D. Merino is responsible for creating all the data
            needed for the project. He meticulously crafted the questions and
            learning materials, ensuring that the content is both educational
            and engaging. Additionally, he manages the data and tests the
            project to ensure everything is working properly. His contributions
            are crucial in providing the necessary information and resources for
            the users.
          </p>
        </div>
      </div>
      <div className="grid justify-center space-y-5 rounded-xl border-2 border-black p-5 shadow-lg md:grid-cols-3 md:place-items-center">
        <div className="max-w-96 space-y-3">
          <p className="text-center font-bold md:text-left md:text-2xl">
            MARASIGAN, <br /> ISAAC JAMES B.
          </p>
          <div className="mt-2 flex flex-wrap justify-center gap-2 md:justify-start">
            <span className="rounded-full bg-[#4C1F7A] px-2 py-1 text-white">
              Animator
            </span>
            <span className="rounded-full bg-[#219B9D] px-2 py-1 text-white">
              Sound Designer
            </span>
            <span className="rounded-full bg-[#EEEEEE] px-2 py-1">
              Background Designer
            </span>
          </div>
        </div>
        <Image src={ijPic} alt="" width={500} height={500} className="w-96" />
        <div className="max-w-96 text-center md:max-w-80 md:text-right">
          <p>
            Isaac James B. Marasigan is the creative force behind the animations
            in the game. He animated all the characters, bosses, and NPCs,
            bringing them to life with his artistic skills. Additionally, he
            selected the background images and audio for the game, ensuring an
            immersive and engaging experience for the players. His contributions
            are essential in creating the visual and auditory elements of the
            game.
          </p>
        </div>
      </div>
    </main>
  );
}
