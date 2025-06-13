import StravaLogo from "../assets/strava.svg";
import FacebookLogo from "../assets/facebook.svg";
import InstagramLogo from "../assets/instagram.svg";
import DiscordLogo from "../assets/discord.svg";
import { getRelativeLocaleUrl } from 'astro:i18n';

export const headerNavRoutes = [
  { key: "home", href: "/" },
  { key: "blog", href: "blog" },
  { key: "faq", href: "faq" },
  { key: "changelog", href: "changelog" },
  { key: "contact", href: "contact" },
];

export const footerNavRoutes = [
  { key: "privacy", href: "privacy" },
  ...headerNavRoutes.slice(1),
];

export const socialNavRoutes = [
  { key: "strava", href: "https://www.strava.com/clubs/sporttrackmerger", icon: StravaLogo },
  { key: "facebook", href: "https://www.facebook.com/profile.php?id=61576930135105", icon: FacebookLogo },
  { key: "instagram", href: "https://www.instagram.com/sporttrackmerger", icon: InstagramLogo },
  { key: "discord", href: "https://discord.gg/r7vmTP5sye", icon: DiscordLogo }
];