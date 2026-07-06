"use client";
import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Link, Zap, Calendar, FileText, Code, User as UserIcon, Clock } from "lucide-react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const iconMap: Record<string, React.ElementType> = {
  Calendar,
  FileText,
  Code,
  User: UserIcon,
  Clock,
};

interface TimelineItem {
  id: number;
  title: string;
  date: string;
  content: string;
  category: string;
  icon: string | React.ElementType;
  relatedIds: number[];
  status: "completed" | "in-progress" | "pending";
  energy: number;
}

interface RadialOrbitalTimelineProps {
  timelineData: TimelineItem[];
}

export default function RadialOrbitalTimeline({
  timelineData,
}: RadialOrbitalTimelineProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const openScheduleModal = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("schedule", "true");
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  const [expandedItems, setExpandedItems] = useState<Record<number, boolean>>({});
  const [rotationAngle, setRotationAngle] = useState<number>(0);
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [pulseEffect, setPulseEffect] = useState<Record<number, boolean>>({});
  const [centerOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [activeNodeId, setActiveNodeId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const nodeRefs = useRef<Record<number, HTMLDivElement | null>>({});

  const handleContainerClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === containerRef.current || e.target === orbitRef.current) {
      setExpandedItems({});
      setActiveNodeId(null);
      setPulseEffect({});
      setAutoRotate(true);
    }
  };

  const toggleItem = (id: number) => {
    setExpandedItems((prev) => {
      const newState = { ...prev };
      Object.keys(newState).forEach((key) => {
        if (parseInt(key) !== id) {
          newState[parseInt(key)] = false;
        }
      });
      newState[id] = !prev[id];

      if (!prev[id]) {
        setActiveNodeId(id);
        setAutoRotate(false);
        const relatedItems = getRelatedItems(id);
        const newPulseEffect: Record<number, boolean> = {};
        relatedItems.forEach((relId) => { newPulseEffect[relId] = true; });
        setPulseEffect(newPulseEffect);
        centerViewOnNode(id);
      } else {
        setActiveNodeId(null);
        setAutoRotate(true);
        setPulseEffect({});
      }

      return newState;
    });
  };

  useEffect(() => {
    let rotationTimer: ReturnType<typeof setInterval> | undefined;
    if (autoRotate) {
      rotationTimer = setInterval(() => {
        setRotationAngle((prev) => Number(((prev + 0.3) % 360).toFixed(3)));
      }, 50);
    }
    return () => { if (rotationTimer) clearInterval(rotationTimer); };
  }, [autoRotate]);

  const centerViewOnNode = (nodeId: number) => {
    const nodeIndex = timelineData.findIndex((item) => item.id === nodeId);
    const totalNodes = timelineData.length;
    const targetAngle = (nodeIndex / totalNodes) * 360;
    setRotationAngle(270 - targetAngle);
  };

  const calculateNodePosition = (index: number, total: number) => {
    const angle = ((index / total) * 360 + rotationAngle) % 360;
    const radius = 200;
    const radian = (angle * Math.PI) / 180;
    const x = radius * Math.cos(radian) + centerOffset.x;
    const y = radius * Math.sin(radian) + centerOffset.y;
    const zIndex = Math.round(100 + 50 * Math.cos(radian));
    const opacity = Math.max(0.35, Math.min(1, 0.35 + 0.65 * ((1 + Math.sin(radian)) / 2)));
    return { x, y, angle, zIndex, opacity };
  };

  const getRelatedItems = (itemId: number): number[] => {
    const currentItem = timelineData.find((item) => item.id === itemId);
    return currentItem ? currentItem.relatedIds : [];
  };

  const isRelatedToActive = (itemId: number): boolean => {
    if (!activeNodeId) return false;
    return getRelatedItems(activeNodeId).includes(itemId);
  };

  const getStatusColor = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
      case "in-progress": return "bg-blue-500/20 text-blue-400 border-blue-500/30";
      case "pending": return "bg-foreground/10 text-foreground/60 border-foreground/20";
      default: return "bg-foreground/10 text-foreground/60 border-foreground/20";
    }
  };

  const getStatusLabel = (status: TimelineItem["status"]): string => {
    switch (status) {
      case "completed": return "COMPLETE";
      case "in-progress": return "IN PROGRESS";
      case "pending": return "PENDING";
      default: return "PENDING";
    }
  };

  return (
    <div
      className="w-full flex flex-col lg:flex-row items-center justify-between bg-background overflow-hidden px-6 lg:px-20 py-12 lg:py-16 gap-8 lg:gap-0"
      ref={containerRef}
      onClick={handleContainerClick}
    >
      {/* Left Content */}
      <div className="w-full lg:w-5/12 max-w-xl z-20 flex flex-col gap-8 lg:ml-8">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground">
          <span className="w-8 h-px bg-foreground/30" />
          Our Process
        </div>

        <h2 className="text-[clamp(1.8rem,3.5vw,3rem)] font-display leading-[1.05] tracking-tight text-foreground">
          How We Bring Your{" "}
          <span className="text-blue-500">Vision to Life</span>
        </h2>

        <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
          From consultation to launch, our streamlined process ensures transparency, efficiency, and exceptional results.
        </p>

        {/* Process Steps List */}
        <div className="flex flex-col gap-1.5">
          {timelineData.map((item, index) => {
            const Icon = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;
            const isActive = activeNodeId === item.id;
            return (
              <button
                key={item.id}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
                className={`flex items-center gap-3 px-3.5 py-2.5 rounded-xl border text-left transition-all duration-300 group ${isActive
                  ? "border-foreground/30 bg-foreground/10"
                  : "border-foreground/10 bg-foreground/[0.03] hover:border-foreground/20 hover:bg-foreground/5"
                  }`}
              >
                <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-300 ${isActive ? "bg-foreground text-background" : "bg-foreground/10 text-foreground/60 group-hover:bg-foreground/20"
                  }`}>
                  {Icon && <Icon size={14} />}
                </div>
                <div className="flex flex-col min-w-0">
                  <span className="text-xs font-semibold text-foreground leading-tight">
                    <span className="text-muted-foreground font-mono text-[10px] mr-1.5">0{index + 1}</span>
                    {item.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">{item.category}</span>
                </div>
                <ArrowRight className={`w-3.5 h-3.5 ml-auto text-foreground/30 transition-transform duration-300 ${isActive ? "translate-x-1 text-foreground/60" : "group-hover:translate-x-0.5"}`} />
              </button>
            );
          })}
        </div>
        {/* CTAs */}
        <div className="flex flex-row items-center gap-3">
          <Button
            onClick={openScheduleModal}
            className="bg-foreground hover:bg-foreground/90 text-background px-6 h-9 text-xs rounded-full group"
          >
            Start Your Project
            <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            variant="outline"
            className="h-9 px-6 text-xs rounded-full border-foreground/20 hover:bg-foreground/5"
          >
            Explore Process
          </Button>
        </div>
      </div>

      {/* Right Orbital */}
      <div className="relative w-full lg:w-7/12 h-[420px] lg:h-[600px] flex items-center justify-center">
        {/* Ambient glow */}
        <div className="absolute w-80 h-80 rounded-full bg-blue-500/5 blur-[80px] pointer-events-none" />
        <div
          className="absolute w-full h-full flex items-center justify-center scale-75 sm:scale-90 lg:scale-100"
          ref={orbitRef}
          style={{
            perspective: "1000px",
            transform: `translate(${centerOffset.x}px, ${centerOffset.y}px)`,
          }}
        >
          {/* Center Orb */}
          <div className="absolute w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-600 flex items-center justify-center z-10 shadow-[0_0_40px_rgba(99,102,241,0.4)]">
            <div className="absolute w-20 h-20 rounded-full border border-foreground/15 animate-ping opacity-60"></div>
            <div className="absolute w-24 h-24 rounded-full border border-foreground/10 animate-ping opacity-40" style={{ animationDelay: "0.5s" }}></div>
            <div className="w-8 h-8 rounded-full bg-white/90 backdrop-blur-md shadow-inner"></div>
          </div>

          {/* Orbit Ring */}
          <div className="absolute w-[400px] h-[400px] rounded-full border border-foreground/10 border-dashed"></div>
          {/* Secondary ring for depth */}
          <div className="absolute w-[360px] h-[360px] rounded-full border border-foreground/5"></div>

          {/* Nodes */}
          {timelineData.map((item, index) => {
            const position = calculateNodePosition(index, timelineData.length);
            const isExpanded = expandedItems[item.id];
            const isRelated = isRelatedToActive(item.id);
            const isPulsing = pulseEffect[item.id];
            const Icon = typeof item.icon === "string" ? iconMap[item.icon] : item.icon;

            return (
              <div
                key={item.id}
                ref={(el) => (nodeRefs.current[item.id] = el)}
                className="absolute transition-all duration-700 cursor-pointer"
                style={{
                  transform: `translate(${position.x}px, ${position.y}px)`,
                  zIndex: isExpanded ? 200 : position.zIndex,
                  opacity: isExpanded ? 1 : position.opacity,
                }}
                onClick={(e) => { e.stopPropagation(); toggleItem(item.id); }}
              >
                {/* Glow halo */}
                {isPulsing && (
                  <div
                    className="absolute -inset-4 rounded-full animate-pulse"
                    style={{ background: "radial-gradient(circle, rgba(99,102,241,0.2) 0%, transparent 70%)" }}
                  />
                )}

                {/* Node button */}
                <div className={`
                  w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300
                  border-2 transform
                  ${isExpanded
                    ? "bg-foreground text-background border-foreground scale-150 shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                    : isRelated
                      ? "bg-foreground/20 text-foreground border-foreground/50 animate-pulse"
                      : "bg-background text-foreground/70 border-foreground/25 hover:border-foreground/60 hover:bg-foreground/10"
                  }
                `}>
                  {Icon ? <Icon size={15} /> : null}
                </div>

                {/* Label */}
                <div className={`
                  absolute top-12 left-1/2 -translate-x-1/2 whitespace-nowrap
                  text-[11px] font-semibold tracking-wider transition-all duration-300
                  ${isExpanded ? "text-foreground scale-125" : "text-foreground/50"}
                `}>
                  {item.title}
                </div>

                {/* Expanded Card */}
                {isExpanded && (
                  <div className="absolute top-20 left-1/2 -translate-x-1/2 w-64 z-50 rounded-2xl border border-foreground/15 bg-background/95 backdrop-blur-xl shadow-2xl overflow-hidden">
                    {/* Card top accent line */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-blue-500/50 via-indigo-500/50 to-purple-500/50" />
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-3 bg-foreground/30"></div>

                    <div className="p-4">
                      <div className="flex justify-between items-center mb-3">
                        <Badge className={`px-2 text-[10px] font-mono border ${getStatusColor(item.status)}`}>
                          {getStatusLabel(item.status)}
                        </Badge>
                        <span className="text-[10px] font-mono text-muted-foreground">{item.date}</span>
                      </div>

                      <h4 className="text-sm font-semibold text-foreground mb-2">{item.title}</h4>
                      <p className="text-xs text-muted-foreground leading-relaxed">{item.content}</p>

                      <div className="mt-4 pt-3 border-t border-foreground/10">
                        <div className="flex justify-between items-center text-[10px] mb-1.5 text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Zap size={10} />
                            Completion
                          </span>
                          <span className="font-mono text-foreground">{item.energy}%</span>
                        </div>
                        <div className="w-full h-1 bg-foreground/10 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                            style={{ width: `${item.energy}%` }}
                          />
                        </div>
                      </div>

                      {item.relatedIds.length > 0 && (
                        <div className="mt-4 pt-3 border-t border-foreground/10">
                          <div className="flex items-center gap-1 mb-2">
                            <Link size={10} className="text-muted-foreground" />
                            <h5 className="text-[10px] uppercase tracking-wider font-medium text-muted-foreground">
                              Connected Steps
                            </h5>
                          </div>
                          <div className="flex flex-wrap gap-1.5">
                            {item.relatedIds.map((relatedId) => {
                              const relatedItem = timelineData.find((i) => i.id === relatedId);
                              return (
                                <button
                                  key={relatedId}
                                  className="flex items-center gap-1 px-2 py-1 text-[10px] rounded-lg border border-foreground/15 bg-foreground/5 hover:bg-foreground/10 text-foreground/70 hover:text-foreground transition-all"
                                  onClick={(e) => { e.stopPropagation(); toggleItem(relatedId); }}
                                >
                                  {relatedItem?.title}
                                  <ArrowRight size={8} />
                                </button>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
