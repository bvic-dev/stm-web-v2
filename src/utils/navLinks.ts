import StravaLogo from "../assets/strava.svg";
import FacebookLogo from "../assets/facebook.svg";
import InstagramLogo from "../assets/instagram.svg";
import DiscordLogo from "../assets/discord.svg";
import { PAGES, STRAVA_URL, FACEBOOK_URL, INSTAGRAM_URL, DISCORD_URL, LEGAL_MOBILE_PAGES } from "../config";

export const allNavRoutes = PAGES;

export const headerNavRoutes = PAGES;

export const footerNavRoutes = PAGES.filter(route => route.key !== "home");

export const legalMobileNavRoutes = LEGAL_MOBILE_PAGES

export const socialNavRoutes = [
  { key: "strava", href: STRAVA_URL, icon: StravaLogo },
  { key: "facebook", href: FACEBOOK_URL, icon: FacebookLogo },
  { key: "instagram", href: INSTAGRAM_URL, icon: InstagramLogo },
  { key: "discord", href: DISCORD_URL, icon: DiscordLogo }
];