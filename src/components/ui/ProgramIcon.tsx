import {
  BookMarked,
  BookOpen,
  CalendarDays,
  Compass,
  GraduationCap,
  HeartHandshake,
  Languages,
  MessageCircle,
  Quote,
  ScrollText,
  Sparkles,
  Users,
  Video,
  type LucideIcon,
} from "lucide-react";

/**
 * Icon keys used by programs and services data. Add a mapping here when
 * introducing a new `icon` value; unknown keys fall back to Sparkles rather
 * than crashing the page.
 */
const ICONS: Record<string, LucideIcon> = {
  "book-open": BookOpen,
  "book-marked": BookMarked,
  video: Video,
  "graduation-cap": GraduationCap,
  compass: Compass,
  "scroll-text": ScrollText,
  quote: Quote,
  users: Users,
  languages: Languages,
  "heart-handshake": HeartHandshake,
  "message-circle": MessageCircle,
  "calendar-days": CalendarDays,
};

export function ProgramIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const Icon = ICONS[name] ?? Sparkles;
  return <Icon className={className} strokeWidth={1.5} aria-hidden />;
}
