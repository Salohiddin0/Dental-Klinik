"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/components/language-provider"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon, Globe } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { language, setLanguage, t } = useLanguage()
  const { theme, setTheme } = useTheme()

  const navigation = [
    { key: "nav.home", href: "#home" },
    { key: "nav.services", href: "#services" },
    { key: "nav.team", href: "#team" },
    { key: "nav.reviews", href: "#reviews" },
    { key: "nav.contacts", href: "#contacts" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">DC</span>
            </div>
            <span className="font-bold text-lg text-foreground">
              {language === "ru" ? "Дентал Клиник" : "Dental Klinik"}
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {t(item.key)}
              </button>
            ))}
          </nav>

          {/* Desktop Controls */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Language Toggle */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <Globe className="h-4 w-4" />
                  <span className="sr-only">Toggle language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage("ru")}>
                  <span className={language === "ru" ? "font-semibold" : ""}>Русский</span>
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage("uz")}>
                  <span className={language === "uz" ? "font-semibold" : ""}>O'zbek</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              className="h-8 w-8 p-0"
            >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>

            {/* CTA Button */}
            <Button onClick={() => scrollToSection("#contacts")} className="bg-primary hover:bg-primary/90">
              {t("hero.cta")}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden h-8 w-8 p-0"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/40 py-4">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {t(item.key)}
                </button>
              ))}

              {/* Mobile Controls */}
              <div className="flex items-center justify-between pt-4 border-t border-border/40">
                <div className="flex items-center space-x-2">
                  {/* Language Toggle Mobile */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <Globe className="h-4 w-4 mr-2" />
                        {language === "ru" ? "RU" : "UZ"}
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start">
                      <DropdownMenuItem onClick={() => setLanguage("ru")}>
                        <span className={language === "ru" ? "font-semibold" : ""}>Русский</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setLanguage("uz")}>
                        <span className={language === "uz" ? "font-semibold" : ""}>O'zbek</span>
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Theme Toggle Mobile */}
                  <Button variant="ghost" size="sm" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                    <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                    <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  </Button>
                </div>

                {/* Mobile CTA */}
                <Button
                  onClick={() => scrollToSection("#contacts")}
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                >
                  {t("hero.cta")}
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
