import { motion, AnimatePresence } from "framer-motion";
import { FiSun, FiMoon, FiSettings } from "react-icons/fi";
import { LuLogOut, LuLayers } from "react-icons/lu";

export function Sidebar({
  // Navigation Items (supports `items` or `navItems`)
  items = [],
  navItems,
  // Active route/id (supports `activeId` or `router.pathname`)
  activeId,
  router,
  // Navigation handler
  onNavigate,
  // Theme handling (supports `onToggleTheme` or `toggleTheme`)
  theme = "dark",
  onToggleTheme,
  toggleTheme,
  // Action handlers
  onSettings,
  onLogout,
  // Branding (supports `logoImage`/`logoText`/`subText` or `logoSrc`/`brandName`/`brandTagline`)
  logoImage,
  logoSrc = "https://i.ibb.co/ymRVPhRz/logo.jpg",
  logoAlt = "Logo",
  logoText,
  brandName = "SAFEPAD",
  subText,
  Contractor = "Contractor Name",
}) {
  const isDark = theme === "dark";
  const itemList = items.length > 0 ? items : navItems || [];
  const currentActive = activeId !== undefined ? activeId : router?.pathname;
  const handleToggleTheme = onToggleTheme || toggleTheme;
  const logo = logoImage || logoSrc;
  const title = logoText || brandName;
  const tagline = subText || Contractor;

  return (
    <aside
      className={`
        flex h-full w-[275px] shrink-0 flex-col border-r
        transition-colors duration-200 z-10
        ${isDark ? "border-white/10 bg-black text-white" : "border-black/10 bg-white text-black"}
      `}
    >
      {/* Header */}
      <div className="relative mb-4 flex h-16 shrink-0 items-center justify-between px-6">
        <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-purple-500/0 via-purple-700/50 to-purple-500/0" />

        <div className="flex min-w-0 items-center gap-3.5">
          {logo && (
            <div className="relative flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden">
              <img
                src={logo}
                alt={logoAlt}
                className="relative h-11 w-11 rounded-full object-cover"
              />
            </div>
          )}

          <div className="min-w-0 leading-none">
            <h1 className="break-words text-[17px] font-bold uppercase tracking-[0.15em]">
              {title}
            </h1>

            <p
              className={`mt-1.5 break-words text-[9px] font-semibold uppercase tracking-[0.16em] ${isDark ? "text-purple-400" : "text-purple-600"
                }`}
            >
              {tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="relative flex-1 space-y-1 overflow-y-auto px-4 pb-3">
        {itemList.map((item) => {
          const itemId = item.id || item.route;
          const isActive = currentActive === itemId;
          const Icon = item.icon || LuLayers;

          return (
            <button
              type="button"
              key={itemId}
              onClick={() => onNavigate && onNavigate(itemId)}
              className={`
                group relative flex w-full cursor-pointer items-center gap-3
                overflow-hidden rounded-2xl px-3 py-1.5 text-left
                outline-none transition xl:py-2
                focus-visible:ring-2 focus-visible:ring-purple-500
                ${isActive
                  ? isDark
                    ? "text-white"
                    : "text-black"
                  : isDark
                    ? "text-white/60 hover:bg-white/[0.04] hover:text-white"
                    : "text-black/70 hover:bg-black/[0.03] hover:text-black"
                }
              `}
            >
              {/* Active background */}
              {isActive && (
                <motion.div
                  layoutId="active-module"
                  className={`absolute inset-0 rounded-2xl border ${isDark
                      ? "border-purple-500/25 bg-purple-500/10"
                      : "border-purple-500/20 bg-purple-500/[0.07]"
                    }`}
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* Active line */}
              {isActive && (
                <motion.span
                  layoutId="active-line"
                  className="absolute bottom-3 left-0 top-3 w-[3px] rounded-full bg-purple-500"
                  transition={{
                    type: "spring",
                    stiffness: 380,
                    damping: 30,
                  }}
                />
              )}

              {/* Icon */}
              <span
                className={`
                  relative z-10 flex h-10 w-10 shrink-0
                  items-center justify-center rounded-[14px]
                  transition
                  ${isActive
                    ? "bg-purple-600 text-white shadow-[0_8px_24px_rgba(147,51,234,0.25)]"
                    : isDark
                      ? "bg-white/[0.06] text-white/55 group-hover:bg-white/10 group-hover:text-white"
                      : "bg-black/[0.04] text-black/55 group-hover:bg-black/[0.07] group-hover:text-black"
                  }
                `}
              >
                <Icon className="text-[18px]" />
              </span>

              {/* Text */}
              <span className="relative z-10 min-w-0 flex-1">
                <span className="block whitespace-normal break-words text-[13px] font-semibold leading-tight">
                  {item.label}
                </span>
              </span>
            </button>
          );
        })}
      </nav>

      {/* Bottom Controls */}
      <div
        className={`border-t p-4 ${isDark ? "border-white/10" : "border-black/10"
          }`}
      >
        <div className="flex w-full items-center justify-between gap-2">
          {/* Theme */}
          {handleToggleTheme && (
            <button
              type="button"
              onClick={handleToggleTheme}
              aria-label={
                isDark ? "Switch to Light mode" : "Switch to dark mode"
              }
              className={`
                group flex cursor-pointer items-center rounded-2xl p-1.5
                transition-all duration-300 ease-in-out
                ${isDark
                  ? "bg-white text-black hover:bg-white/90"
                  : "bg-black text-white hover:bg-black/85"
                }
              `}
            >
              <span
                className={`
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-xl transition-colors
                  ${isDark
                    ? "bg-black/[0.06] text-purple-600"
                    : "bg-white/[0.12] text-purple-400"
                  }
                `}
              >
                <AnimatePresence mode="wait" initial={false}>
                  <motion.span
                    key={theme}
                    initial={{
                      opacity: 0,
                      rotate: -45,
                      scale: 0.7,
                    }}
                    animate={{
                      opacity: 1,
                      rotate: 0,
                      scale: 1,
                    }}
                    exit={{
                      opacity: 0,
                      rotate: 45,
                      scale: 0.7,
                    }}
                    transition={{ duration: 0.18 }}
                  >
                    {isDark ? <FiSun /> : <FiMoon />}
                  </motion.span>
                </AnimatePresence>
              </span>

              <span
                className="
                  max-w-0 overflow-hidden whitespace-nowrap
                  text-[13px] font-semibold opacity-0
                  transition-all duration-300 ease-in-out
                  group-hover:ml-2
                  group-hover:max-w-24
                  group-hover:pr-2
                  group-hover:opacity-100
                "
              >
                {isDark ? "Light" : "Dark"}
              </span>
            </button>
          )}

          {/* Settings */}
          {onSettings && (
            <button
              type="button"
              onClick={onSettings}
              aria-label="Settings"
              className={`
                group flex cursor-pointer items-center rounded-2xl p-1.5
                transition-all duration-300 ease-in-out
                ${isDark
                  ? "bg-white/[0.06] text-white hover:bg-white/10"
                  : "bg-black/[0.04] text-black hover:bg-black/[0.07]"
                }
              `}
            >
              <span
                className={`
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-xl transition-colors
                  ${isDark
                    ? "bg-white/[0.06] text-white/80 group-hover:bg-white/10 group-hover:text-white"
                    : "bg-black/[0.04] text-black/80 group-hover:bg-black/[0.07] group-hover:text-black"
                  }
                `}
              >
                <FiSettings size={16} />
              </span>

              <span
                className="
                  max-w-0 overflow-hidden whitespace-nowrap
                  text-[13px] font-semibold opacity-0
                  transition-all duration-300 ease-in-out
                  group-hover:ml-2
                  group-hover:max-w-24
                  group-hover:pr-2
                  group-hover:opacity-100
                "
              >
                Settings
              </span>
            </button>
          )}

          {/* Logout */}
          {onLogout && (
            <button
              type="button"
              onClick={onLogout}
              aria-label="Logout"
              className="
                group flex cursor-pointer items-center rounded-2xl
                bg-red-500/[0.08] p-1.5 text-red-600
                transition-all duration-300 ease-in-out
                hover:bg-red-600 hover:text-white
                dark:text-red-500
              "
            >
              <span
                className="
                  flex h-9 w-9 shrink-0 items-center justify-center
                  rounded-xl bg-red-500/10 text-red-600
                  transition-colors
                  group-hover:bg-white/15 group-hover:text-white
                  dark:text-red-500
                "
              >
                <LuLogOut />
              </span>

              <span
                className="
                  max-w-0 overflow-hidden whitespace-nowrap
                  text-[13px] font-semibold opacity-0
                  transition-all duration-300 ease-in-out
                  group-hover:ml-2
                  group-hover:max-w-24
                  group-hover:pr-2
                  group-hover:opacity-100
                "
              >
                Logout
              </span>
            </button>
          )}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;