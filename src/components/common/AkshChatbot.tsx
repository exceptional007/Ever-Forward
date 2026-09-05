import { memo, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  XIcon,
  SendIcon,
  RotateCcwIcon,
  UserIcon,
  ArrowRightIcon,
  ChevronDownIcon,
} from "lucide-react";
import { sendMessageToAksh, type Message } from "@/lib/chat-service";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";

const INITIAL_GREETING: Message = {
  role: "assistant",
  content: "Hi, I'm Aksh — ask me anything about Akshhat's work, stack, or availability!",
};

const SUGGESTED_PROMPTS = [
  "What tech stack does Akshhat use?",
  "Tell me about his work experience",
  "What projects & hackathons has he won?",
  "How can I contact Akshhat?",
];

const GREETING_TEXTS = ["Got questions? Ask me!", "Hello, Its Aksh!"];

export const AkshChatbot = memo(function AkshChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([INITIAL_GREETING]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showGreetingBubble, setShowGreetingBubble] = useState(false);

  // Rotating Typewriter State
  const [textIndex, setTextIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const [showScrollBottom, setShowScrollBottom] = useState(false);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Show greeting bubble after brief entrance delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowGreetingBubble(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Cycling Typewriter Effect between "Got questions? Ask me!" and "Hello, Its Aksh!"
  useEffect(() => {
    if (!showGreetingBubble || isOpen) return;

    const currentFullText = GREETING_TEXTS[textIndex];
    const typingSpeed = isDeleting ? 30 : 60;

    const handleTyping = () => {
      if (!isDeleting) {
        if (typedText.length < currentFullText.length) {
          setTypedText(currentFullText.slice(0, typedText.length + 1));
        } else {
          // Pause at full text before starting erasure
          setTimeout(() => setIsDeleting(true), 2400);
        }
      } else {
        if (typedText.length > 0) {
          setTypedText(currentFullText.slice(0, typedText.length - 1));
        } else {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % GREETING_TEXTS.length);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [typedText, isDeleting, textIndex, showGreetingBubble, isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    setShowScrollBottom(false);
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen, loading]);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    if (scrollHeight - scrollTop - clientHeight > 80) {
      setShowScrollBottom(true);
    } else {
      setShowScrollBottom(false);
    }
  };

  const handleSendText = async (textToSend: string) => {
    if (!textToSend.trim() || loading) return;

    const userMessage: Message = { role: "user", content: textToSend.trim() };
    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const historyForApi = updatedMessages.filter((m) => m.role !== "system");
      const replyText = await sendMessageToAksh(historyForApi);
      setMessages((prev) => [...prev, { role: "assistant", content: replyText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Akshhat specializes in Python, TypeScript, React, FastAPI, .NET Core, and RAG AI pipelines! Feel free to ask more.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleSend = (e?: React.FormEvent) => {
    e?.preventDefault();
    handleSendText(input);
  };

  const handleClear = () => {
    setMessages([INITIAL_GREETING]);
  };

  return (
    <>
      {/* Floating Trigger Launcher Button (Visible ONLY when chatbot is closed) */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex items-center gap-3"
          >
            {/* Rotating Typewriter Greeting Bubble */}
            {showGreetingBubble && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: 10 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: 10 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                onClick={() => setIsOpen(true)}
                className="group relative cursor-pointer rounded-2xl border border-white/14 bg-[#101014]/95 px-3.5 py-2 text-xs font-sans text-[#fcfdff] shadow-xl backdrop-blur-md hover:border-white/30 transition-all hidden sm:flex items-center gap-1.5"
              >
                <span>{typedText}</span>
                <span className="inline-block size-1.5 rounded-full bg-white animate-pulse" />
                {/* Pointer triangle */}
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 border-4 border-transparent border-l-[#101014]" />
              </motion.div>
            )}

            {/* Squarish Rounded Launcher Button with Green Online Dot */}
            <motion.div whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.94 }}>
              <Button
                type="button"
                onClick={() => setIsOpen(true)}
                size="icon"
                className="relative size-12 sm:size-13 rounded-2xl bg-[#fcfdff] text-[#000000] shadow-2xl hover:bg-white transition-all duration-300 border border-white/20 cursor-pointer flex items-center justify-center"
                aria-label="Open Aksh Chatbot"
              >
                <div className="relative flex items-center justify-center">
                  <img
                    src="https://img.icons8.com/ios-glyphs/30/online-support.png"
                    alt="online-support"
                    className="size-6 object-contain"
                  />
                  <span className="absolute -top-1 -right-1 flex size-3">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#11ff99] opacity-75" />
                    <span className="relative inline-flex size-3 rounded-full bg-[#11ff99] border-2 border-black" />
                  </span>
                </div>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Animated Chatbot Card Popup */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.88, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 24 }}
            transition={{ type: "spring", stiffness: 320, damping: 26 }}
            className="fixed bottom-20 right-4 sm:bottom-6 sm:right-6 z-50 flex h-[370px] sm:h-[380px] w-[calc(100vw-2rem)] sm:w-[300px] flex-col overflow-hidden rounded-2xl border border-white/14 bg-[#0a0a0c]/95 backdrop-blur-xl shadow-2xl p-0 font-sans text-[#fcfdff]"
          >
            <Card className="flex flex-col h-full rounded-none border-none bg-transparent shadow-none p-0">
              {/* Header with Larger Avatar, Green Online Dot & No Subtitle */}
              <CardHeader className="flex flex-row items-center justify-between bg-transparent p-3 pb-1 space-y-0">
                <div className="flex items-center gap-2.5">
                  <div className="relative">
                    <Avatar className="size-8 border border-white/20 bg-white/10 rounded-xl">
                      <AvatarFallback className="bg-white/10 text-white flex items-center justify-center p-0.5 rounded-xl">
                        <img
                          src="https://img.icons8.com/ios-glyphs/30/online-support.png"
                          alt="Support"
                          className="size-4 object-contain invert"
                        />
                      </AvatarFallback>
                    </Avatar>
                    <span className="absolute -bottom-0.5 -right-0.5 size-2.5 rounded-full bg-[#11ff99] border-2 border-[#0a0a0c]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <CardTitle className="font-sans text-xs font-bold text-[#fcfdff]">
                      Aksh
                    </CardTitle>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={handleClear}
                        className="size-6.5 rounded-lg text-[#a1a4a5] hover:text-[#fcfdff] hover:bg-white/10 transition-colors"
                      >
                        <RotateCcwIcon className="size-3" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="bg-[#101014] text-[#fcfdff] border border-white/14 font-sans text-xs"
                    >
                      Reset chat
                    </TooltipContent>
                  </Tooltip>

                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => setIsOpen(false)}
                        className="size-6.5 rounded-lg text-[#a1a4a5] hover:text-[#fcfdff] hover:bg-white/10 transition-colors"
                      >
                        <XIcon className="size-3.5" />
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent
                      side="bottom"
                      className="bg-[#101014] text-[#fcfdff] border border-white/14 font-sans text-xs"
                    >
                      Close chat
                    </TooltipContent>
                  </Tooltip>
                </div>
              </CardHeader>

              {/* Messages Body */}
              <CardContent className="relative flex-1 p-0 overflow-hidden">
                <div
                  ref={scrollContainerRef}
                  onScroll={handleScroll}
                  className="h-full overflow-y-auto p-2.5 pt-1"
                >
                  <div className="flex flex-col gap-3.5 pb-2">
                    {/* Suggested Prompts View (if only initial greeting) */}
                    {messages.length === 1 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="my-1 space-y-2 px-0.5"
                      >
                        <p className="font-sans text-[11px] text-[#a1a4a5]">
                          Ask about Akshhat's work, stack, or availability.
                        </p>
                        <div className="flex flex-col gap-1">
                          {SUGGESTED_PROMPTS.map((promptText, i) => (
                            <motion.button
                              key={i}
                              type="button"
                              initial={{ opacity: 0, x: -12 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.1 * i + 0.1 }}
                              whileHover={{ x: 3 }}
                              onClick={() => handleSendText(promptText)}
                              className="group flex items-center gap-1.5 font-sans text-[11px] text-[#d1d5db] hover:text-[#fcfdff] transition-colors cursor-pointer text-left py-0.5"
                            >
                              <ArrowRightIcon className="size-3 text-[#a1a4a5] group-hover:text-[#fcfdff] transition-colors shrink-0" />
                              <span>{promptText}</span>
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {/* Chat Messages */}
                    {messages.map((msg, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 6, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className={`flex gap-1.5 text-[11px] ${
                          msg.role === "user" ? "justify-end" : "justify-start"
                        }`}
                      >
                        {msg.role === "assistant" && (
                          <Avatar className="size-5 border border-white/20 bg-white/10 shrink-0 mt-0.5 rounded-lg">
                            <AvatarFallback className="bg-white/10 text-white flex items-center justify-center p-0.5 rounded-lg">
                              <img
                                src="https://img.icons8.com/ios-glyphs/30/online-support.png"
                                alt="Support"
                                className="size-3 object-contain invert"
                              />
                            </AvatarFallback>
                          </Avatar>
                        )}

                        <div
                          className={`rounded-2xl px-2.5 py-1.5 max-w-[88%] leading-relaxed ${
                            msg.role === "user"
                              ? "bg-[#fcfdff] text-[#000000] rounded-tr-xs font-sans font-semibold shadow-sm"
                              : "bg-[#141418] border border-white/10 text-[#fcfdff] rounded-tl-xs font-sans shadow-sm whitespace-pre-wrap"
                          }`}
                        >
                          {msg.content}
                        </div>

                        {msg.role === "user" && (
                          <Avatar className="size-5 border border-white/20 bg-white/10 shrink-0 mt-0.5 rounded-lg">
                            <AvatarFallback className="bg-white/10 text-[#fcfdff] rounded-lg">
                              <UserIcon className="size-3" />
                            </AvatarFallback>
                          </Avatar>
                        )}
                      </motion.div>
                    ))}

                    {/* Typing Loading Dots */}
                    {loading && (
                      <motion.div
                        initial={{ opacity: 0, y: 6 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-1.5 text-[11px] text-[#a1a4a5] self-start"
                      >
                        <Avatar className="size-5 border border-white/20 bg-white/10 shrink-0 rounded-lg">
                          <AvatarFallback className="bg-white/10 text-white flex items-center justify-center p-0.5 rounded-lg">
                            <img
                              src="https://img.icons8.com/ios-glyphs/30/online-support.png"
                              alt="Support"
                              className="size-3 object-contain invert"
                            />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex items-center gap-1 rounded-2xl rounded-tl-xs border border-white/10 bg-[#141418] px-2.5 py-1.5">
                          <span className="size-1.5 rounded-full bg-[#fcfdff] animate-bounce" />
                          <span className="size-1.5 rounded-full bg-[#fcfdff] animate-bounce [animation-delay:0.2s]" />
                          <span className="size-1.5 rounded-full bg-[#fcfdff] animate-bounce [animation-delay:0.4s]" />
                        </div>
                      </motion.div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>
                </div>

                {/* Floating "↓ New messages" Pill */}
                <AnimatePresence>
                  {showScrollBottom && (
                    <motion.button
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onClick={scrollToBottom}
                      className="absolute bottom-2 right-3 z-10 flex items-center gap-1 rounded-full border border-white/14 bg-[#141418]/95 px-2 py-0.5 text-[10px] font-sans text-[#fcfdff] shadow-lg backdrop-blur-md hover:bg-white/10 transition-colors cursor-pointer"
                    >
                      <ChevronDownIcon className="size-3 text-[#fcfdff]" />
                      <span>New messages</span>
                    </motion.button>
                  )}
                </AnimatePresence>
              </CardContent>

              {/* Seamless Input Footer */}
              <CardFooter className="bg-transparent p-2.5 pt-1 flex items-center gap-1.5">
                <Input
                  type="text"
                  placeholder="Ask a question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="flex-1 rounded-xl border-white/14 bg-[#0a0a0c] text-[11px] font-sans text-[#fcfdff] placeholder:text-[#a1a4a5] focus-visible:ring-white/30 h-7.5 px-2.5"
                />
                <Button
                  type="button"
                  onClick={handleSend}
                  size="icon"
                  disabled={!input.trim() || loading}
                  className="size-7.5 rounded-xl bg-[#fcfdff] text-[#000000] hover:bg-white disabled:opacity-40 shrink-0 cursor-pointer"
                >
                  <SendIcon className="size-3 text-[#000000]" />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
});
