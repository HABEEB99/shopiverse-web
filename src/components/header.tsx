import { Logo, SearchBar, ThemeSwitcher, UserSettings } from "@/components";

const Header = () => {
  return (
    <header className="sticky inset-x-0 top-0 z-[100] h-14 w-screen bg-light/70 shadow-sm shadow-modal backdrop-blur-lg transition-all dark:bg-dark/70">
      <nav className="wrapper flex h-full w-full items-center justify-between">
        <Logo />
        <SearchBar />
        <div className="flex items-center justify-center space-x-2">
          <ThemeSwitcher />
          <UserSettings />
        </div>
      </nav>
    </header>
  );
};

export default Header;
