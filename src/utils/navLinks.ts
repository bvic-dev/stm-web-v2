import StravaLogo from "../assets/strava.svg";
import FacebookLogo from "../assets/facebook.svg";
import InstagramLogo from "../assets/instagram.svg";
import DiscordLogo from "../assets/discord.svg";
import { PAGES } from "../config";

export const headerNavRoutes = PAGES.filter(route => route.key !== "home" && route.key !== "privacy");

export const footerNavRoutes = PAGES.filter(route => route.key !== "home");

export const socialNavRoutes = [
  { key: "strava", href: "https://www.strava.com/clubs/sporttrackmerger", icon: StravaLogo },
  { key: "facebook", href: "https://www.facebook.com/profile.php?id=61576930135105", icon: FacebookLogo },
  { key: "instagram", href: "https://www.instagram.com/sporttrackmerger", icon: InstagramLogo },
  { key: "discord", href: "https://discord.gg/r7vmTP5sye", icon: DiscordLogo }
];